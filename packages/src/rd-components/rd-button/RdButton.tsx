import { Button, ButtonProps } from 'antd'
import styled from 'styled-components'

const ButtonTemplate: React.FC<ButtonProps> = (props) => {
    return (
        <Button {...props} className={`${props.className ?? ''}`}>
            {props.children}
        </Button>
    )
}

export const RdButton = styled(ButtonTemplate)`
    border-radius: 3px;
    border: 1px solid transparent;
    color: black;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    transition: all 300ms ease-in-out;

    &.ant-btn-primary {
        color: var(--colors-text-component);
        background: var(--colors-gama-500);

        &:hover {
            color: var(--colors-text-component);
            background: var(--colors-gama-600);
        }
        &:focus {
            background: var(--colors-gama-500);
            border: 1px solid var(--colors-gama-700);
        }
        &:active {
            background: var(--colors-gama-600);
        }
    }

    &.ant-btn-default {
        border: 1px solid var(--colors-gama-500);

        &:hover {
            color: var(--colors-text-component);
            background: var(--colors-gama-600);
            border: 1px solid var(--colors-gama-600);
        }
        &:focus {
            color: var(--colors-text-component);
        }
        &:active {
            color: var(--colors-text-component);
            background: var(--colors-gama-600);
            border: 1px solid var(--colors-gama-600);
        }
    }

    &:disabled,
    &.ant-btn-default:disabled,
    &.ant-btn-primary:disabled {
        cursor: default;
        border: 1px solid transparent;
        background: #e5e7eb;
        color: var(--colors-delta-250);

        &:hover {
            background: #e5e7eb;
            color: var(--colors-delta-250);
        }
        &:focus {
            background: #e5e7eb;
            color: var(--colors-delta-250);
        }
    }
`
