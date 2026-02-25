import './Video.css';

function Video({ title, id, channel = "Coder Dost", views, time, verified, children, deleteVideo, editVideo }) {
  return (
    <>
      <div className='container'>
        <button className='close' onClick={() => deleteVideo(id)}>X</button>
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