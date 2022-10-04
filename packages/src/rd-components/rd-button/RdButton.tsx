import { Button, ButtonProps } from 'antd'

export const RdButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button {...props} className={`x-button-wrapper ${props.className ?? ''}`}>
            {props.children}
        </Button>
    )
}
