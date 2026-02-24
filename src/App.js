// import './App.css';

// function App() {

//   let name  = 'react app'
//   let className = 'App-header';
//   console.log('App')
//   return (
//     <div className="">
//       <div className={className}>
//          {name}
//          <Demo></Demo>
//       </div>
//     </div>
//   );
// }
// function Demo() {
//   console.log('Demo')
//   return (
//     <div className="App">
//       <div className='App-header'>
//          Demo
//       </div>
//     </div>
//   );
// }



// export default App;
// import Video from "./components/Video";
// function App(){
// return (
//   <div>
// <div>Hello</div>
// <Video></Video>
// </div>
// )
// }
// export default App;





// PROPS
import './App.css';
import Video from './components/Video';
import videos from './data/data'
function App() {
  
  return (
    <div className="App">
      <div>Videos</div>
      {
        videos.map(video=><Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>)
      }
    
    </div>
  );
}

export default App;