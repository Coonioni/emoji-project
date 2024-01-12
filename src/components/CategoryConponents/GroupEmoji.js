import React, { useState } from 'react';
import EmojiList from './EmojiList';
import "./EmojiDisplay.css";
import "./Category.css";

const GroupEmoji = ({ groupedEmojiData }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <>
    <div className="container">
      <div className='emoji-category'>
        {Object.keys(groupedEmojiData).map(group => (
          <div key={group}>
            <h3 onClick={() => handleGroupClick(group)} className='column'>
              {group}
            </h3>
          </div>
        ))}
      </div>
      <EmojiList emojis={groupedEmojiData[selectedGroup]} />
    </div>
    </>
  );
};

export default GroupEmoji;
