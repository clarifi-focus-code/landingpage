import React from "react";

type ButtonVariant = 'primary' | 'secondary' | 'cta' | 'more';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    type = 'button',
    variant = 'primary',
}) => {
    return (
        <button className={`button button-${variant}`} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;