import clsx from 'clsx'
import { TimePicker } from 'antd'
import moment from 'moment'
import React from 'react'

import styles from './TimeField.module.scss'
import { i18n } from 'src/deprecated/helpers/i18n'

const format = 'HH:mm'

export const TimeField: React.FC<{
    className?: string
    label?: string
    placeholder?: string
    value?: Date | null | moment.Moment
    onChange: (value: Date | null) => void
    disabled?: boolean
    error?: string
    is_error?: boolean
    is_warning?: boolean
}> = function TimeField(props) {
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
        <div className={clsx(props.className, styles['wrapper'])}>
            <label className={styles['label-wrapper']}>
                <span className={styles['label']}>{props.label}</span>
                <TimePicker
                    className={styles['content']}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    onChange={(time) => {
                        if (!time) {
                            props.onChange(null)

                            return
                        }

                        props.onChange(time.toDate())
                    }}
                    format={format}
                    value={(props.value && moment(props.value, format)) || undefined}
                    allowClear={false}
                    suffixIcon={<span className={clsx('material-icons', styles['icon'])}>schedule</span>}
                    minuteStep={10}
                    showNow={false}
                    renderExtraFooter={() => null}
                    status={isErrorOrNot()}
                />
            </label>
            {isErrorOrNot() && (
                <span className={styles['error']}>{props.error ? props.error : i18n.required_field}</span>
            )}
        </div>
    )
}
