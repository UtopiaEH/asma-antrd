import { Checkbox } from 'antd'
import type { CheckboxProps } from 'antd'
import type { FC } from 'react'

import styles from './CheckBox.module.scss'

interface ICheckBoxCustom extends CheckboxProps {
    title: string
}
/**
 * @deprecated Use other method
 */
const CheckBoxCustom: FC<ICheckBoxCustom> = (props) => {
    return (
        <div className={`${props.checked ? styles['checkbox-custom_checked'] : styles['checkbox-custom_unchecked']}`}>
            <Checkbox {...props}>{props.title}</Checkbox>
        </div>
    )
}

export default CheckBoxCustom
