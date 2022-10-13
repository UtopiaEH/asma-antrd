import { SelectValue } from 'antd/lib/select'
import { useState } from 'react'
import { RdSelect } from '../../components-asma-antrd-dev/rd-components/selects/rd-select'

export const SelectModule: React.FC = () => {
    const options = [
        { label: 'option 1', value: 'option 1' },
        { label: 'option 2', value: 'option 2' },
        { label: 'option 3', value: 'option 3' },
        { label: 'option 4', value: 'option 4' },
        { label: 'option 5', value: 'option 5' },
    ]

    const [selected, setSelected] = useState<SelectValue | undefined>('option 1')

    return (
        <div className="flex w-full h-full rounded-md bg-white p-4">
            <RdSelect
                value={selected}
                options={options}
                onChange={e => {
                    console.log(e)
                    setSelected(e as string)
                }}
            />
        </div>
    )
}
