import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import axios from 'axios';
import {useState, useEffect, useCallback, useMemo} from 'react';
import useVideoDispatch from "../hooks/VideoDispatch";

// function VideoList({videos,dispatch,editVideo}){

//     return(
//         <>
//         {videos.map((video) => (
//             <Video
//               key={video.id}
//               title={video.title}
//               views={video.views}
//               time={video.time}
//               channel={video.channel}
//               verified={video.verified}
//               id={video.id}
//              dispatch={dispatch}
//               editVideo={editVideo}
//             >
//               <PlayButton
//                 onPlay={() => console.log('Playing..',video.title)}
//                 onPause={() => console.log('Paused..',video.title)}
//               >
//                 {video.title}
//               </PlayButton>
//             </Video>
//           ))}
//           </>
//     )
// }


function VideoList({editVideo}){
  const url = "https://jsonplaceholder.typicode.com/posts";
   const videos = useVideos()
   const dispatch = useVideoDispatch();

   async function handleClick (){
    const res = await axios.get(url);
    console.log('getVideos', res.data)
    dispatch({type:'LOAD',payload:res.data})
   }

  useEffect(()=>{
    async function getVideos (){
      const res = await axios.get(url);
      console.log('getVideos', res.data)
      dispatch({type:'LOAD',payload:res.data})
     }
     getVideos()
  },[dispatch])
  const play = useCallback(() => console.log('Playing..'), []);
  const pause = useCallback(() => console.log('Pause..'), []);
  const memoButton = useMemo(() => (
    <PlayButton onPlay={play} onPause={pause}>
      Play
    </PlayButton>
  ),[pause, play]);
return(
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              editVideo={editVideo}
            >
              {memoButton}
              
            </Video>
          ))}
           <button onClick={handleClick}>Get Videos</button>
          </>
    )
}
export default VideoList