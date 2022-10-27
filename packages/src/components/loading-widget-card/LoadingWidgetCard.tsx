import { Icon } from '@iconify/react'
import { WidgetCard } from 'asma-antrd'

import styles from './LoadingWidgetCard.module.scss'

export const LoadingWidgetCard: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <WidgetCard>
            <Icon icon='line-md:loading-twotone-loop' width='56' className={styles['root']} />
            {props.children}
        </WidgetCard>
    )
}
