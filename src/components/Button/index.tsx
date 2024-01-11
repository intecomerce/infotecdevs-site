import React from 'react';
import "./styles.css";

interface IButton {
    title: string;
    onPress: () => void;
    classe?: string;
}

const Button: React.FC<IButton> = ({
    title,
    onPress,
    classe
}) => {
    return (
        <button
            data-aos="fade-up"
            type="submit"
            onClick={onPress}
            className={classe ?? 'default-class'}>
            {title}
        </button >
    )
}

export default Button;