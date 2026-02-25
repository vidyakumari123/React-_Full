import { useContext } from 'react';

import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hooks/VideoDispatch';
import './Video.css';

function Video({ title, id, channel = "Coder Dost", views, time, verified, children,editVideo }) {
    const theme = useContext(ThemeContext)
      const dispatch = useVideoDispatch()
  return (
    <>
      <div className={`container ${theme}`}>
        <button className='close' onClick={()=>dispatch({type:'DELETE',payload:id})}>X</button>
        <button className='edit' onClick={() => editVideo(id)}>Edit</button>
        <div className="pic">
          <img src="https://picsum.photos/160/90" alt="Video Thumbnail" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified && '✅'} </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        {children}
      </div>
    </>
  );
}

export default Video;