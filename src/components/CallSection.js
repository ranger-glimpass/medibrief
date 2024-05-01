import React, { useState } from 'react';
import VoiceAnimation from './VoiceAnimation';
import VapiAssistant from './VapiAssistant';
import '../App.css'; // Import your CSS file for styling

const CallSection = () => {
    const [isUserSpeaking, setIsUserSpeaking] = useState(false);
    const [isCallConnected, setIsCallConnected] = useState(false);

    const connectCall = () => {
        // Logic to connect the call
        setIsCallConnected(true);
    };

    return (
        <div className="App">
            <header className="call-header">
                <h1>Voice Animation</h1>
            </header>
            <VoiceAnimation
                isUserSpeaking={isUserSpeaking}
                isCallConnected={isCallConnected}
                connectCall={connectCall}
            />
            <header className="call-header">
                <h1>Vapi Chat</h1>
            </header>
            <main>
                <VapiAssistant setIsUserSpeaking={setIsUserSpeaking} />
            </main>
        </div>
    );
};

export default CallSection;
