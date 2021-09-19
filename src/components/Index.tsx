import React, {useState} from 'react'
import { Link, Redirect } from 'react-router-dom';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import BannerLogo from './css/BannerLogo.png';
import '../components/css/Index.css';

export default function Index() {
    return (
        <div>
            <div className="BannerLogo"></div>
        </div>
    )
}
