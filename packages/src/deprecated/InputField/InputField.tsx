import { Icon } from '@iconify/react'
import { Input } from 'antd'
import type { InputProps } from 'antd/lib/input/Input'
import clsx from 'clsx'
import { omit } from 'lodash'
import React from 'react'
import type { FC } from 'react'

import styles from './Input.module.scss'
import { i18n } from '../helpers/i18n'

enum IconPositionEnum {
    Prefix = 'prefix',
    Suffix = 'suffix',
    Both = 'both',
}

interface InputField extends InputProps {
    icon_style?: string
    icon?: string
    label?: string
    error?: string
    is_error?: boolean
    is_warning?: boolean
    iconPosition?: IconPositionEnum
}
/**
 * @deprecated Use other method
 */
const InputField: FC<InputField> = (props, { iconPosition = IconPositionEnum.Prefix }) => {
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
        <div className={styles['input-wrapper']}>
            <label>
                {props.label && <span className={styles['text-label']}>{props.label}</span>}
                <Input
                    placeholder={i18n.write_something}
                    {...((iconPosition === IconPositionEnum.Prefix || iconPosition === IconPositionEnum.Both) && {
                        prefix: (
                            <Icon
                                icon={props.icon ?? ''}
                                className={clsx('text-xl', props.icon_style && props.icon_style)}
                            />
                        ),
                    })}
                    {...((iconPosition === IconPositionEnum.Suffix || iconPosition === IconPositionEnum.Both) && {
                        suffix: (
                            <Icon
                                icon={props.icon ?? ''}
                                className={clsx('text-xl', props.icon_style && props.icon_style)}
                            />
                        ),
                    })}
                    {...omit(props, 'is_warning', 'iconPosition', 'is_error', 'error')}
                    status={isErrorOrNot()}
                />
            </label>
            {isErrorOrNot() && (
                <span className={styles['error-message']}>{props.error ? props.error : i18n.required_field}</span>
            )}
        </div>
    )
}

export { InputField }
