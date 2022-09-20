import { Icon } from '@iconify/react'
import { Button } from 'antd'
import type { ButtonProps } from 'antd/lib/button/button'
import clsx from 'clsx'
import { omit } from 'lodash'
import type { FC } from 'react'

import styles from './Button.module.scss'

type IButtonCustom = ButtonProps & {
    icon?: string
    btn_type?: 'primary' | 'secondary' | 'ghost'
    title?: string
    classNameIcon?: string
}

const ButtonCustom: FC<IButtonCustom> = (props) => {
    let btnType: string | undefined = 'primary'
    let btnTypeDisabled: string | undefined = undefined
    const btn_type = props.btn_type ?? 'primary'

    if (btn_type === 'primary') {
        btnType = styles[`btn-primary`]
        btnTypeDisabled = styles[`btn-primary_disabled`]
    }

    if (btn_type === 'secondary') {
        btnType = styles[`btn-secondary`]
        btnTypeDisabled = styles[`btn-secondary_disabled`]
    }

    if (btn_type === 'ghost') {
        btnType = undefined
        btnTypeDisabled = undefined
    }
    return (
        <Button
            {...omit(props, 'btn_type', 'classNameIcon', 'icon')}
            className={clsx(btnType, props.className, styles['btn-wrapper'], props.disabled && btnTypeDisabled)}
            {...(props.icon && {
                icon: (
                    <Icon
                        icon={props.icon || ''}
                        color={props.color || ''}
                        className={
                            (clsx(btn_type === 'ghost' ? styles['icon-text'] : styles['icon']), props.classNameIcon)
                        }
                    />
                ),
            })}
        >
            {props.title}
        </Button>
    )
}

export default ButtonCustom
