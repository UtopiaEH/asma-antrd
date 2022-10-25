import { DangerButton } from '../DangerButton'
import styles from './WidgetCard.module.scss'

export const WidgetCard: React.FC<
    React.PropsWithChildren<{ title: string; actionTitle: string; onActionHandler: () => void | Promise<void> }>
> = ({ children, title, actionTitle, onActionHandler }) => {
    return (
        <div className={styles['container']}>
            <span className={styles['title']}>{title}</span>

            {children}

            <div className={styles['actions']}>
                <DangerButton className={styles['action']} onClick={onActionHandler} title={actionTitle} />
            </div>
        </div>
    )
}