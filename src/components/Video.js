import { useContext ,useRef, useId, useEffect,memo ,useLayoutEffect} from 'react';

import ThemeContext from '../context/ThemeContext';
import useVideoDispatch from '../hooks/VideoDispatch';
import './Video.css';

const Video = memo(function Video({title,id,channel="Coder Dost",views,time,verified,children,editVideo}) {
  console.log('render Video',id)
   const theme = useContext(ThemeContext)
   const dispatch = useVideoDispatch()

 const ref = useRef(null);
  const uid = useId();

  // useLayoutEffect(() => {
  //   const { height } = ref.current.getBoundingClientRect();
  //   console.log(height)
  // }, []);

      
  //  useEffect(()=>{
  //     const idx= setInterval(()=>{
  //       console.log('video playing', id)
  //     },3000)
      
  //     return ()=>{
  //         clearInterval(idx)
  //      }

  //  },[id])
  return (
    <>
      <div id={uid} ref={ref} className={`container ${theme}`}>
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
})

export default Video;