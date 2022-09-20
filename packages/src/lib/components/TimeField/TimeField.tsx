import 'moment/dist/locale/nb'
import { Icon } from '@iconify/react'
import type { TimePickerProps } from 'antd/es'
import { ConfigProvider, TimePicker } from 'antd'
import clsx from 'clsx'
import moment from 'moment'
import type { Moment } from 'moment/moment'
import locale from 'antd/es/locale/nb_NO'
import React, { useState } from 'react'
import { omit } from 'lodash'
import { format, setHours, setMinutes } from 'date-fns'
import { Picker } from 'antd-mobile'

import { mobileView, useWindowWidthSize } from '../../../hooks/useWindowWidthSize.hook'

import styles from './TimeField.module.scss'
import { getGeneratedTime } from './helper'
import { i18n } from '../../i18n'

const format_time = 'HH:mm'

moment.locale('nb')

interface ITimeField {
    label?: string
    value: Date | '' | undefined | Moment
    onChange: (date: Date | null) => void
    error?: string
    is_error?: boolean
    is_warning?: boolean
    lang: 'En' | 'No'
}

type TTimeFieldCustom = TimePickerProps & ITimeField

export const TimeField = (props: TTimeFieldCustom) => {
    const windowWidthSize = useWindowWidthSize()
    const isMobileView = mobileView(windowWidthSize)

    const [timePickerMobile, setTimePickerMobile] = useState(false)

    const validTimeForMobilePicker = props.value ? new Date(props.value.toString()) : new Date()

    const hours = format(validTimeForMobilePicker, 'HH')
    const minutes = format(validTimeForMobilePicker, 'mm')

    const isErrorOrNot = () => {
        if (props.is_error) {
            return 'error'
        }

        if (props.is_warning) {
            return 'warning'
        }

        return undefined
    }

    return (
        <div className={styles['wrapper']}>
            <label className={styles['label-wrapper']}>
                {props.label && <span className={styles['label']}>{props.label}</span>}
                {isMobileView ? (
                    <>
                        <Picker
                            popupClassName={styles['mobile-version']}
                            confirmText={i18n.ok}
                            cancelText={i18n.close}
                            onClose={() => setTimePickerMobile(false)}
                            columns={[getGeneratedTime(24), getGeneratedTime(60)]}
                            visible={timePickerMobile}
                            mouseWheel={true}
                            value={[hours, minutes]}
                            defaultValue={[hours, minutes]}
                            forceRender={true}
                            style={{
                                '--header-button-font-size': '16px',
                                '--item-font-size': '16px',
                                '--item-height': '40px',
                                height: 'calc(48px * 7)',
                            }}
                            onSelect={(val) => {
                                const hours = val[0] ? +val[0] : 0
                                const minutes = val[1] ? +val[1] : 0

                                const time = new Date(setMinutes(setHours(validTimeForMobilePicker, hours), minutes))

                                if (!props.onChange || !val) return
                                props.onChange(time)
                            }}
                        >
                            {(data) => {
                                return (
                                    <div
                                        className={clsx(
                                            styles['content'],
                                            props.disabled && styles['content_disabled'],
                                            'justify-between',
                                        )}
                                        onClick={() => !props.disabled && setTimePickerMobile(!timePickerMobile)}
                                    >
                                        <span>
                                            {props.disabled || data === null
                                                ? i18n.select_time
                                                : format(validTimeForMobilePicker, 'HH:mm')}
                                        </span>
                                        <span className={'text-base opacity-40'}>
                                            <Icon icon={'ic:baseline-access-time'} />
                                        </span>
                                    </div>
                                )
                            }}
                        </Picker>
                    </>
                ) : (
                    <ConfigProvider locale={locale}>
                        <TimePicker
                            renderExtraFooter={() => null}
                            showNow={false}
                            minuteStep={10}
                            format={format_time}
                            placeholder={i18n.select_time}
                            {...omit(props, 'is_warning', 'is_error', 'error')}
                            className={styles['content']}
                            popupClassName={styles['piker_time']}
                            onChange={(time, timeString) => {
                                if (!props.onChange) return

                                if (!time) {
                                    props.onChange(null, timeString)
                                    return
                                }

                                props.onChange(moment(time), timeString)
                            }}
                            status={isErrorOrNot()}
                        />
                    </ConfigProvider>
                )}
            </label>
            {isErrorOrNot() && (
                <span className={styles['error']}>{props.error ? props.error : i18n.required_field}</span>
            )}
        </div>
    )
}
