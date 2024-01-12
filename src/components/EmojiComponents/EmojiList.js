import React from 'react';
import './EmojiList.css';
import emojisData from './emojis.json';

function EmojiList() {
  const handleCopyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(`${text}をコピーしました！`);
  };

  return (
    <div className='container'>
      {emojisData.map((emoji, index) => (
        <div key={index}>
          <span className='emoji-size'>{emoji}</span>
          <button onClick={() => handleCopyToClipboard(emoji)}>コピー</button>
        </div>
      ))}
    </div>
  );
}

export default EmojiList;
