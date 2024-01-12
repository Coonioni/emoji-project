import React, { useState, useEffect } from 'react';

const EmojiSearch = ({ emojiData }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // 確実にemojisが配列であることを確認する
  useEffect(() => {
    if (Array.isArray(emojiData)) {
      setResults(emojiData);
    } else {
      setResults([]); // emojisが配列でない場合は空の配列を設定
    }
  }, [emojiData]);

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (Array.isArray(emojiData)) {
      const filteredEmojis = emojiData.filter(emoji => 
        emoji.name.includes(newQuery) || emoji.slug.includes(newQuery)
      );
      setResults(filteredEmojis);
    }
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
        {Array.isArray(results) && results.map((emoji, index) => (
          <div key={index}>
            {emoji.name} ({emoji.slug})
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiSearch;
