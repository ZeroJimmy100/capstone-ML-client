import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
// import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';

export default function Dashboard() {

    // const commands = [{
    //     command: ["Go to *", "Open *"],
    //     callback: (redirectPage:any) => setRedirectUrl(redirectPage),
    //     },
    // ];
    // const {transcript} = useSpeechRecognition({commands});
    // const [redirectUrl, setRedirectUrl] = useState<string>("");

    // if(!SpeechRecognition.browserSupportsSpeechRecognition){
    //     return null;
    // }

    // let redirect:any = "";

    // const pages = ['home', 'testing'];
    // const URLs:any = {
    //     home: "/",
    //     testing: "/testing"
    // };

    // if(redirectUrl){
    //     if(pages.includes(redirectUrl)){
    //         redirect = <Redirect to={URLs[redirectUrl]} />
    //     } else {
    //         redirect = <p>Could not find page: {redirectUrl}</p>
    //     }
    // }

    return (
        <div>
            <h1>Welcome to John Doe!</h1>
            <Link to="/testing">
                testing
            </Link>
        </div>
    )
}
