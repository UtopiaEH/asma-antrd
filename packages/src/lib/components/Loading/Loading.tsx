import { Icon } from '@iconify/react'
import type { FC } from 'react'

const Loading: FC<{ tw_color?: string }> = ({ tw_color = '!text-[#ADC6BC]' }) => {
    return (
        <div
            className={
                'fixed left-0 right-0 bottom-0 z-50 flex h-screen w-full items-start items-center justify-center'
            }
        >
            <div className={'flex flex-col items-center'}>
                <Icon icon={'line-md:loading-twotone-loop'} className={`text-[56px] ${tw_color}`} />
                {/*<div className={'text-2xl'}>Loading...</div>*/}
            </div>
        </div>
    )
}

export default Loading
