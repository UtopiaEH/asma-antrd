import { SelectValue } from 'antd/lib/select'
import { useState } from 'react'
import { RdSelect } from '../../../components-asma-antrd-dev/rd-components/selects/rd-select'

export const Topbar: React.FC = () => {
    const options = [
        { label: 'default', value: 'default' },
        { label: 'fretex', value: 'fretex' },
    ]

    const [selected, setSelected] = useState<SelectValue | undefined>('default')

    const setTheme = (e: SelectValue) => {
        console.log(e)
        setSelected(e)
        const root = document.body

        e && (root.dataset['theme'] = e as string)
    }

    return (
        <div className="shadow-xl shadow-black/20 bg-delta-700 text-white py-1 px-4 items-center w-full h-[var(--top-bar-height)] flex justify-between">
            <span className="font-nova text-white text-3xl font-bold"> ANTRD </span>
            <RdSelect
                value={selected}
                options={options}
                onChange={e => {
                    setTheme(e)
                }}
            />
        </div>
    )
}
