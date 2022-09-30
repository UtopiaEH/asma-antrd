import { Icon } from '@iconify/react'
import { clsx } from 'clsx'
import type { FC } from 'react'

import styles from './Loading.module.scss'

const Loading: FC<{ className?: string; iconClassName?: string }> = ({ className, iconClassName }) => {
    return (
        <div className={clsx(styles['container'], className)}>
            <Icon icon={'line-md:loading-twotone-loop'} className={clsx(styles['iconName'], iconClassName)} />
        </div>
    )
}

export { Loading }
