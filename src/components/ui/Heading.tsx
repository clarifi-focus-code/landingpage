import React from "react";

interface HeadingProps {
    text: string;
    color?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, color = '#123dd8'}) => {
    return (
        <h2 className="heading" style={{ color }}>
            {text}
        </h2>
    )
}

export default Heading;