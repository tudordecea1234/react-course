import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import './ChatMessage.css';
import dayjs from 'dayjs';

export function ChatMessage({ message, sender }) {
  console.log(UserProfileImage);
  const time= dayjs().valueOf();
  return (
    <div className={
      sender === 'user'
        ? 'chat-message-user'
        : 'chat-message-chatbot'
    }>
      {sender === 'chatbot' && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      <div className="chat-message-time">
        {dayjs(time).format('HH:mm')}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}