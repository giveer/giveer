import React from 'react';

const Share = ({ url, title, text}) => {
  const handleShareClick = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <button onClick={handleShareClick}>
      <i class="fa-duotone fa-share-nodes"></i>
    </button>
  );
};

export default Share;
