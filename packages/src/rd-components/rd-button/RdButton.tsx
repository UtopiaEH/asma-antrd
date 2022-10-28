import './RdButton.scss'

import { Button, ButtonProps } from 'antd'

export const RdButtonx: React.FC<ButtonProps> = (props) => {
    return (
        <Button {...props} className={`rd-button ${props.className ?? ''}`}>
            {props.children}
        </Button>
    )
}
