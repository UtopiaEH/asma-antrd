import { Select } from 'antd'
import type { SelectProps, SelectValue } from 'antd/es/select'
import { i18n } from 'src/components/helpers/i18n'

import styles from './Select.module.scss'

type TSelectCustom = SelectValue & { lists: string[]; translate?: boolean; label?: string }
type TSelectCustomProps = SelectProps & { lists: string[]; translate?: boolean; label?: string }

const { Option } = Select

//component was wrapped in observer because on mobile view not everytime render options and self translate without observer
const SelectCustom = <T extends TSelectCustom = TSelectCustom>({
    lists,
    translate = false,
    ...props
}: TSelectCustomProps) => {
    return (
        <div className={styles['select-wrapper']}>
            {props.label && <span className={'text-base font-bold'}>{props.label}</span>}
            <Select<T>
                {...props}
                // dropdownClassName={styles['select-wrapper_dropdown_mobile']}
                // defaultOpen={true}
                // dropdownAlign={{ offset: [0, 300] }}
            >
                {lists.map((list, i) => {
                    return (
                        <Option key={i} value={list}>
                            {/* //@todo: need transform current interface at the moment translate is not generic
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore  */}
                            {translate ? i18n[list] : list}
                        </Option>
                    )
                })}
            </Select>
        </div>
    )
}
export default SelectCustom
