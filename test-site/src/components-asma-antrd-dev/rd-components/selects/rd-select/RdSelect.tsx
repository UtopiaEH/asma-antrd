import { Select, SelectProps } from 'antd'
import type { SelectValue } from 'antd/lib/select'
import { useState } from 'react'
import styled from 'styled-components'

export const RdSelectOption = Select.Option

export const SelectModel = (props: SelectProps<SelectValue>) => {
    const [open, setOpen] = useState(false)

    return (
        <Select
            {...props}
            open={open}
            onDropdownVisibleChange={o => setOpen(o)}
            onBlur={data => {
                props.onBlur?.(data)
            }}
        >
            {props.children}
        </Select>
    )
}

export const RdSelect = styled(SelectModel)`
    color: red;
`
