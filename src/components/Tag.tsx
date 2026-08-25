import React from 'react';
import '../assets/Tag.scss';

interface TagProps {
    text: string,
    variant?: 'tool' | 'role',
}

const Tag: React.FC<TagProps> = ({ text, variant = 'tool' }) => {
    return (
        <>
        <div className={`tag tag--${variant}`}>
            <p className="tag-text">{text}</p>
        </div>
        </>
    );
};

export default Tag;