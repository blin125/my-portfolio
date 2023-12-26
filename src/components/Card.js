import React from 'react';
import questionMark from '../images/QuestionMark.png';

const CardComponent = ({ title, imageSrc, description, githubLink, stack, projLink}) => {
    return (
    <div className='card'>
        <div className='card-title'>
            <h3>{title}</h3>
        </div>
        <div className='card-col'>
            <div className='card-image' >
                <img 
                    src={imageSrc} 
                    alt={`${title} Image`} 
                    style={imageSrc === questionMark ? {aspectRatio: '1/1', maxHeight: '150px', maxWidth: '250px'} : null}
                    />
            </div>
            <div className='card-body'>
                <p>{description}</p>
                <div className='card-bottom'>
                    <div className='stack'>
                        <div className='stack-label'>
                            MAIN STACK :
                        </div>
                        <div className='tech-icons'>
                            {stack.length > 0 ? (
                                stack.map((item) => (
                                    React.createElement(item.src, {
                                        key: item.id,
                                        className: 'tech-img',
                                        alt: item.alt,
                                      })
                                ))
                            ) : (
                                <span>&nbsp;N/A</span>
                            )}
                        </div>
                    </div>
                    <a className="git-button" href={projLink} target="_blank" rel="noopener noreferrer">
                        See more on GitHub
                    </a>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CardComponent;
