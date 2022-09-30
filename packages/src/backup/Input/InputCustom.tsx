import { Icon } from '@iconify/react'
import { type InputRef, Input } from 'antd'
import type { InputProps } from 'antd/lib/input/Input'
import { type FC, RefAttributes } from 'react'
import { i18n } from 'src/components/helpers/i18n'

// import { i18n } from '../../components/helpers/i18n'
import styles from './Input.module.scss'

interface InputCustom extends InputProps, RefAttributes<InputRef> {
    tw_icon_style?: string
    icon?: string
    error?: string
    label?: string
}

const InputCustom: FC<InputCustom> = (props) => {
    return (
        <div className='mb-4'>
            {props.label && <span className={'text-base font-bold'}>{props.label}</span>}
            <div className={styles['input-wrapper']}>
                <Input
                    // placeholder={i18n.write_something}
                    {...props}
                    prefix={
                        props.icon ? (
                            <Icon
                                icon={props.icon ?? ''}
                                className={props.tw_icon_style ? 'text-xl' + ' ' + props.tw_icon_style : 'text-xl'}
                            />
                        ) : (
                            ''
                        )
                    }
                />
            </div>
            {props.status && (
                <span className={styles['error-message']}>{props.error ? props.error : i18n.required_field}</span>
            )}
        </div>
    )
}

export default InputCustom
