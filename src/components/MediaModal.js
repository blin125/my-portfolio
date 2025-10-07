import React from 'react';
import ReactDOM from 'react-dom';

const MediaModal = ({ isOpen, onClose, mediaType, src, title }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'auto',
        padding: '2px',
        zIndex: 9999,
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '80%',
          maxHeight: '80%',
        }}
      >
        {/* Close button */}
        <button
        onClick={onClose}
        style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(206, 44, 44)',
            color: 'white',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000,
        }}
        title="Close"
        >
        X
        </button>

        {/* Media */}
        {mediaType === 'video' ? (
          <video
            src={src}
            controls
            autoPlay
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block',
            }}
          />
        ) : (
          <img
            src={src}
            alt={`${title} Full`}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block',
            }}
          />
        )}
      </div>
    </div>,
    document.body
  );
};

export default MediaModal;
