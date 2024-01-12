import React, { useState } from 'react';

const EmojiSearchComponent = ({ emojiData }) => {
  const [query, setQuery] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState(emojiData);

  // 検索クエリに基づいて絵文字をフィルタリングする関数
  const handleSearch = (event) => {
    const newQuery = event.target.value.toLowerCase();
    setQuery(newQuery);

    const filtered = emojiData.filter(emoji => 
      emoji.name.toLowerCase().includes(newQuery) || emoji.slug.toLowerCase().includes(newQuery)
    );
    setFilteredEmojis(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="絵文字を検索..."
      />
      <div>
        {filteredEmojis.map((emoji, index) => (
          <div key={emoji.emoji}>
            {emoji.emoji} - {emoji.name} ({emoji.slug})
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiSearchComponent;
