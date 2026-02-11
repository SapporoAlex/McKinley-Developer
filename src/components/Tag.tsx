import React from 'react';
import '../assets/Tag.scss';

interface WorkCardProps {
    text: string,
}

const Tag: React.FC<WorkCardProps> = ({ text }) => {
    return (
        <>
        <div className="tag">
            <p className="tag-text">{text}</p>
        </div>
        </>
    );
};

export default Tag;