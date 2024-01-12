import './Body.css';
import groupEmojis from './components/CategoryConponents/groupEmojis';
import emojiData from '../src/data/emoji-details.json';
import GroupEmoji from './components/CategoryConponents/GroupEmoji';

function Body() {

  console.log("Initial emojiData:", emojiData); // 元のデータ構造の確認

  const groupedEmojiData = groupEmojis(emojiData);

  return (
    <div className="body">
      <GroupEmoji groupedEmojiData={groupedEmojiData} />
    </div>
  );
}

export default Body;
