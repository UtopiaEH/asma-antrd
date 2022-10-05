import { Button, ButtonProps } from 'antd'

const RdButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button {...props} className={`rd-button-wrapper ${props.className ?? ''}`}>
            {props.children}
        </Button>
    )
}

export default RdButton
