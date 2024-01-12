// {selectedGroup === group && (
//   <div className='emoji-list'>
//     {groupedEmojiData[group].map(emoji => (
//       <p key={emoji.emoji} className='icon-btn' onClick={() => copyToClipboard(emoji.emoji)}>{emoji.emoji}</p>
//     ))}
//   </div>
// )}
import React from "react";
import './EmojiDisplay.css';

const copyToClipboard = (emoji) => {
  navigator.clipboard.writeText(emoji).then(() => {
    alert(`${emoji} copied to clipboard!`);
  }).catch(err => {
    console.error('Could not copy emoji to clipboard', err);
  });
};

const EmojiList = ({ emojis }) => {
  if (!emojis) return null;

  return (
    <div className="emoji-list">
      {emojis.map(emoji => (
        <p key={emoji.emoji} className="icon-btn" onClick={() => copyToClipboard(emoji.emoji)}>
          {emoji.emoji}
        </p>
      ))}
    </div>
  );
};

export default EmojiList;