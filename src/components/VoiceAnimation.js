import React, { useEffect, useRef, useState } from 'react';
import userTalkingGif from '../assets/vapiTalking.gif';
import vapiTalkingGif from '../assets/vapiTalking.gif';

const VoiceAnimation = ({ isUserSpeaking, isCallConnected, connectCall }) => {
    const [gifSrc, setGifSrc] = useState(userTalkingGif); // Default to userTalking.gif
    const sketchRef = useRef();

    useEffect(() => {
        // Change the GIF source based on speaking status and call connection status
        if (isCallConnected) {
            if (isUserSpeaking) {
                setGifSrc(userTalkingGif);
            } else {
                setGifSrc(vapiTalkingGif);
            }
        } else {
            // If call is not connected, set default image or a placeholder
            setGifSrc(null);
        }
    }, [isUserSpeaking, isCallConnected]); // Re-render the component when speaking status or call connection changes

    return (
        <div className="voice-animation">
            {isCallConnected ? (
                <img src={gifSrc} alt="Voice Animation" />
            ) : (
                <button onClick={connectCall}>Connect Call</button>
            )}
        </div>
    );
};

export default VoiceAnimation;
