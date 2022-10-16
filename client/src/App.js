import './App.css';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelContainer,ChannelListContainer,Auth} from './components';

const cookies = new Cookies(); 
const apiKey = 'rxj4n4w59bfz';
const authToken = cookies.get("token");
const client = StreamChat.getInstance(apiKey);

if(authToken){
  client.connect({
    
  })
}
function App() {
  if(!authToken) return <Auth/>
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
        
        />
        <ChannelContainer
        
        />
      </Chat>
    </div>
  );
}

export default App;
