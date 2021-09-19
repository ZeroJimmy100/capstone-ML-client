import React, {useState} from 'react';
import '../css/NavBar.css';
import LogoIcon from '../css/LookupLogo3.png';
import { Image } from 'react-bootstrap';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import { Redirect, BrowserRouter } from 'react-router-dom';
import SpeakingIcon from '../css/speakingIcon2.png';

export default function NavBar() {
    const [redirectUrl, setRedirectUrl] = useState<string>("");
    const commands = [{
      command: ["Go to *", "Open *", "*"],
      callback: (redirectPage:any) => setRedirectUrl(redirectPage),
      },
    ];
    const {transcript} = useSpeechRecognition({commands});
    const [isStart, setIsStart] = useState<boolean>(true);
    
    if(!SpeechRecognition.browserSupportsSpeechRecognition){
        return null;
    }
  
    let redirect:any = "";
  
    const pages = ['home', 'testing'];
    const URLs:any = {
        home: "/",
        testing: "/testing"
    };
  
    const speakURLVoice = () => {
      const utterance = new SpeechSynthesisUtterance(`You are now in ${redirectUrl}`);
      utterance.voice = speechSynthesis.getVoices()[0];
      speechSynthesis.speak(utterance);
    }
    
    if(redirectUrl){
      if(pages.includes(redirectUrl)){
          redirect = <Redirect to={URLs[redirectUrl]} />
          speakURLVoice();
      } else {
          redirect = <p>Could not find page: {redirectUrl}</p>
      }
    }
  
    const stopListening = () => SpeechRecognition.stopListening();
  
  
    const allowListening = () => {
      if(isStart === true){
        setIsStart(false);
        SpeechRecognition.startListening()
        setTimeout(() => {
          console.log("stop listening");
          setIsStart(true);
          stopListening();
        }, 3000);
      }else {
        stopListening();
        setIsStart(true);
      }
    }
  
    const startListening = () => {
      // if(canClick){
        allowListening();
      // }
    };
  
    const handleSpace = (e:any) => {
      if(e.key === " "){
        allowListening();
      }
    };
    
    console.log(redirectUrl);
    return (
        
            <header className = "header">
                <a href="/" className="Mylogo"><Image className="homeImg" src={LogoIcon} fluid alt=""/></a>
                {isStart ?
                    <button onKeyDown={handleSpace} style={{float:'left', marginTop:'.5%', backgroundColor: "transparent"}} onClick={startListening}><img src={SpeakingIcon} style={{height:'40px', width:"40px"}}/></button> : null
                }
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                <ul className="LeMenu">
                    <li><a href="/">home</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </header>
           
       
    )
}
