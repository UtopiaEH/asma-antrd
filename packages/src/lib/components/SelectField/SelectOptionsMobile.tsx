import { ActionSheet } from 'antd-mobile'
//import { observer } from 'mobx-react-lite'
import clsx from 'clsx'

import type { TSelectCustomProps } from './SelectField'
import { i18n } from '../../i18n'

interface ISelectOptionsMobile extends TSelectCustomProps {
    visible: boolean
    onClose?: () => void
}
export const SelectOptionsMobile: React.FC<ISelectOptionsMobile> = ({
    lists,
    translate = false,
    placeholder,
    value,
    onSelect,
    visible,
    onClose,
}) => {
    const listsMobile = lists.map((list) => {
        return {
            //@ts-ignore
            text: <div className={clsx(value === list && 'text-beta-700')}>{translate ? i18n[list] : list}</div>,
            key: list,
            // disabled: props.value === list,
            onClick: () => onSelect?.(list, { label: list, value: list }),
        }
    })

    return (
        <div>
            <ActionSheet
                popupClassName={'antd-options-mobile'}
                extra={placeholder}
                // cancelText={i18n.cancel}
                closeOnAction={true}
                visible={visible}
                actions={listsMobile}
                onClose={onClose}
            />
        </div>
    )
}
