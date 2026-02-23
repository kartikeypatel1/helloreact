import React from "react";

export default function SongCard(props) {
  return (
    <div className="container">
      <div className="card">
        <img
          className="cover"
          src={props.cover}
          alt="Song Cover"
        />

        <h2 className="title">{props.title}</h2>
        <p className="artist">{props.artist}</p>

        <div className="progress-bar">
          <div className="progress"></div>
        </div>

        <div className="time">
          <span>1:24</span>
          <span>3:45</span>
        </div>

        <div className="controls">
          <button>⏮</button>
          <button className="play">▶</button>
          <button>⏭</button>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        .container {
          height: 100vh;
          width: 10%;
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
         
        }

        .card {         
         width: 300px;
          padding: 20px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          text-align: center;
          color: white;
          transition: 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        .cover {
          width: 100%;
          border-radius: 15px;
          margin-bottom: 15px;
        }

        .title {
          margin: 5px 0;
          font-size: 22px;
        }

        .artist {
          font-size: 14px;
          opacity: 0.8;
          margin-bottom: 15px;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .progress {
          width: 40%;
          height: 100%;
          background: white;
        }

        .time {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          opacity: 0.8;
          margin-bottom: 15px;
        }

        .controls {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .controls button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          padding: 10px 14px;
          border-radius: 50%;
          font-size: 18px;
          color: white;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .controls button:hover {
          background: white;
          color: #764ba2;
        }

        .play {
          background: white;
          color: #764ba2;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}