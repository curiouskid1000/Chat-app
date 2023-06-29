import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';


const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
      height ="100vh"
      projectID = "7d50e07a-814c-4f5f-a1f4-ae192c0dec98"
      userName = {localStorage.getItem('username')}
      userSecret = {localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed{...chatAppProps}/>}
    />
  );
}

export default App;
