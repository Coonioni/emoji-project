// groupEmojis.js
const groupEmojis = (emojiData) => {
  const groupedData = {};

  Object.entries(emojiData).forEach(([emoji, details]) => {
    const group = details.group;
    if (!groupedData[group]) {
      groupedData[group] = [];
    }
    groupedData[group].push({ emoji, ...details });
  });

  console.log("Grouped emojiData:", groupedData); // グループ化されたデータの確認

  return groupedData;
};

export default groupEmojis;
