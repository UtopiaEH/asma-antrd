import React, { ReactNode } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import clsx from 'clsx'

import styles from './Modal.module.scss'

export interface ModalProps {
    className?: string
    isOpen: boolean
    children?: ReactNode

    onClose: () => void
}

export const ModalEventDesktop: React.FC<ModalProps> = (props) => {
    return (
        <Transition appear show={props.isOpen} as={React.Fragment}>
            <Dialog onClose={props.onClose} className={clsx(styles['dialog'], props.className)}>
                <Transition.Child
                    as={React.Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className={styles['overlay']} />
                </Transition.Child>

                <Transition.Child
                    as={React.Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                    <div className={styles['wrapper']}>
                        <Dialog.Panel className={styles['panel']}>
                            <div className={styles['content']}>{props.children}</div>
                        </Dialog.Panel>
                    </div>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}
