import React, { useState } from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';

const liff = window.liff;

const App = () => {
  const [name, setName] = useState('');
  const [userLineID, setUserLineID] = useState('');
  const [pictureUrl, setPictureUrl] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const getProfile = async () => {
    await liff.init();
    let getProfile = await liff.getProfile();
    setName(getProfile.displayName);
    setUserLineID(getProfile.userId);
    setPictureUrl(getProfile.pictureUrl);
    setStatusMessage(getProfile.statusMessage);
  };

  const sendMessage = () => {
    liff.sendMessages([{
      type: 'text',
      text: "Hi LIFF"
    }]).then(() => {
      liff.closeWindow();
    });
  };

  const closeLIFF = () => {
    liff.closeWindow();
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="support">
          <img width="25%" src="https://img.icons8.com/color/420/line-me.png" />
          <img width="25%" src="https://lh3.googleusercontent.com/illfpW97yh9TtvtmtN-BiNcpomys5gzAj4nw8Je6Ydby814PRquAPcvsP2tAV43Iqe8logzjUnjp7tN5Dvk" />
        </div>
        <div className="support">
          {
            pictureUrl && pictureUrl !== '' &&
            <img width="25%" src={pictureUrl} />
          }
        </div>
        {
          name && name !== '' &&
          <p>Name: {name}</p>
        }
        {
          userLineID && userLineID !== '' &&
          <p>LineID: {userLineID}</p>
        }
        {
          statusMessage && statusMessage !== '' &&
          <p>statusMessage: {statusMessage}</p>
        }
        <div className="support">
          {/* <Button variant="contained"  style={{ marginRight: '20px' }} color="primary">
            Getdata INFO
          </Button>
          <Button variant="contained"  style={{ marginRight: '20px' }}>
            Send Message
          </Button>
          <Button variant="contained"  color="secondary">
            Close LIFF
          </Button> */}
        </div>
      </header>
    </div>
  );
};

export default App;
