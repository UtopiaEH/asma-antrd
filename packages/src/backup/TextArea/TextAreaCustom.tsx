import { Input } from 'antd'
import type { TextAreaProps } from 'antd/es/input'
import { type FC } from 'react'

import { i18n } from '../../components/helpers/i18n'
import styles from './Textarea.module.scss'

const { TextArea } = Input

interface TextAreaCustom extends TextAreaProps {
    value: string
    error?: string
    label?: string
}

const TextAreaCustom: FC<TextAreaCustom> = (props) => {
    return (
        <div className='mb-4'>
            <label>
                {props.label && <span className={'text-base font-bold'}>{props.label}</span>}
                <div className={styles['textarea-wrapper']}>
                    <TextArea placeholder={i18n.write_something} {...props} rows={4} value={props.value} />
                </div>
                {props.status && (
                    <span className={styles['error-message']} style={{ color: 'red', fontSize: 42 }}>
                        {props.error ? props.error : i18n.required_field}
                    </span>
                )}
            </label>
        </div>
    )
}

export default TextAreaCustom