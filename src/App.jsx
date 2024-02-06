import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);
   const [videos, setVideos] = useState([]);
   const getVideos = async () => {
      const res = await fetch(
         "/api/video/random"
      );
      const data = await res.json();
      console.log(data.data);
      setVideos(data.data);
   };

   useEffect(() => {
      getVideos();
   }, []);

   return (
      <>
         <div>
            <a href="https://vitejs.dev" target="_blank">
               <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
            <button onClick={getVideos}>Get Videos
            </button>
         </div>
         <div>
          {videos.map((elem, index)=> <h2 key={index}>{elem.title}</h2>)}
         </div>
      </>
   );
}

export default App;
