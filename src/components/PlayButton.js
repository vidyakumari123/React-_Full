import './PlayButton.css';
import { useState ,useContext } from 'react';
import ThemeContext from '../context/ThemeContext';


function PlayButton({ message, children, onPlay, onPause }) {
    // let playing = false;  // don't use this approach;
    const [playing, setPlaying] = useState(false);
     const theme = useContext(ThemeContext)
    function handleClick(e) {
        console.log(e)
        e.stopPropagation()

        if (playing) onPause()
        else onPlay();
        setPlaying(!playing)
    }

    return (
        <button onClick={handleClick}>{children} : {playing ? '>' : '||'}</button>
    )

}

export default PlayButton;