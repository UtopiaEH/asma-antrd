import { Icon } from '@iconify/react'
import { Button } from 'antd'
import type { ButtonProps } from 'antd/lib/button/button'
import type { FC } from 'react'

import styles from './Button.module.scss'

interface IButtonCustom extends ButtonProps {
    icon?: string
    btn_color?: boolean
    twClass?: string
}

const ButtonCustom: FC<IButtonCustom> = (props) => {
    const defProps = { ...props }
    delete defProps.btn_color
    delete defProps.twClass
    delete defProps.icon

    return (
        <Button
            {...defProps}
            size={'large'}
            icon={<Icon icon={props.icon || ''} />}
            className={`${styles[`btn-custom`]} ${props.btn_color && styles[`green`]}  ${
                props.twClass && props.twClass
            } `}
        >
            {props.title}
        </Button>
    )
}

export default ButtonCustom
