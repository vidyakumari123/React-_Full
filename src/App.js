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

function App() {
  let obj = {
    title: 'React JS tutorial',
    views: '999K',
    time: '1 year ago',
    channel: 'Coder Dost',
  };
  return (
    <div className="App">
      <div>Videos</div>
      <Video {...obj}></Video>
      <Video title="Node JS tutorial" views="100K" time="1 month ago"></Video>
      <Video
        title="Mongo DB tutorial"
        views="1M"
        time="1 month ago"
        channel="Coder Dost"
      ></Video>
    </div>
  );
}

export default App;