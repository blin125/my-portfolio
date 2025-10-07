import React, { useState } from 'react';
import questionMark from '../images/QuestionMark.png';
import MediaModal from './MediaModal';

const Card = ({
  title,
  imageSrc,
  description,
  stack = [],
  projLink,
  mediaType = 'image', // 'image' or 'video'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="card">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-col">
          <div className="card-image">
            {mediaType === 'video' ? (
              <video
              controls
                muted
                style={{ cursor: 'pointer', maxWidth: '100%', maxHeight: '200px' }}
                onClick={openModal}
              >
                <source src={imageSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={imageSrc}
                alt={`${title} Image`}
                style={
                  imageSrc === questionMark
                    ? { aspectRatio: '1/1', maxHeight: '150px', maxWidth: '250px', cursor: 'pointer' }
                    : { cursor: 'pointer' }
                }
                onClick={openModal}
              />
            )}
          </div>

          <div className="card-body">
            <p>{description}</p>
            <div className="card-bottom">
              <div className="stack">
                <div className="stack-label">MAIN STACK :</div>
                <div className="tech-icons">
                  {stack.length > 0
                    ? stack.map((item) =>
                        React.createElement(item.src, { key: item.id, className: 'tech-img', title: item.alt })
                      )
                    : <span>&nbsp;N/A</span>}
                </div>
              </div>
              <a className="git-button" href={projLink} target="_blank" rel="noopener noreferrer">
                See more on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <MediaModal
        isOpen={isOpen}
        onClose={closeModal}
        mediaType={mediaType}
        src={imageSrc}
        title={title}
      />
    </>
  );
};

export default Card;
