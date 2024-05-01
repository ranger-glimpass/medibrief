import Vapi from "@vapi-ai/web";
import { useState, useEffect } from "react";

export const vapi = new Vapi("e6cd20a5-8cd5-463b-a336-8637a1c7f98d"); // Get Public Token from Dashboard > Accounts Page

export default function VapiAssistant({setIsUserSpeaking}) {
  const [callStatus, setCallStatus] = useState("inactive");
  const start = async () => {
    setCallStatus("active");
    const response = vapi.start("1bf1e306-3e0a-4dfc-a826-bf6490d2da98");
  };
  const stop = () => {
    setCallStatus("stop");
    vapi.stop();
  };
   useEffect(() => {
        // Simulate user speaking action (you would replace this with your actual logic)
        const simulateUserSpeaking = () => {
            setIsUserSpeaking(true);
            setTimeout(() => setIsUserSpeaking(false), 2000); // Simulate speaking for 2 seconds
        };

        // Simulate Vapi AI speaking action (you would replace this with your actual logic)
        const simulateVapiSpeaking = () => {
            setIsUserSpeaking(false); // Set to false when Vapi AI is speaking
            setTimeout(() => setIsUserSpeaking(true), 2000); // Simulate speaking for 2 seconds
        };

        // Simulate user and Vapi AI interactions
        setTimeout(simulateUserSpeaking, 1000); // Simulate user speaking after 1 second
        setTimeout(simulateVapiSpeaking, 5000); // Simulate Vapi AI speaking after 5 seconds
    }, [setIsUserSpeaking]); // Re-run the effect when setIsUserSpeaking changes

//   useEffect(() => {
//     vapi.on("call-start", () => {
//         setCallStatus("active");
//         setResponse("Call started.");  // Update response state when the call starts
//     });
//     vapi.on("call-end", () => {
//         setCallStatus('inactive');
//         setResponse("Call ended.");  // Update response state when the call ends
//     });

//     return () => vapi.removeAllListeners();
// }, [setResponse])  // Include setResponse in the dependency array if it's coming from props
  return (
    <div>
      {callStatus === "inactive" ? (<button onClick={start}>Start</button>) : null}
      {callStatus === "loading" ? <i>Loading...</i> : null}
      {callStatus === "active" ? (<button onClick={stop}>Stop</button>) : null}
    </div>
  );
}
