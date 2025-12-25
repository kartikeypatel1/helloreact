import { getPosts } from './api/index.js'
import { useEffect, useState } from 'react'
import './App.css'
import PostCard from './components/PostCard.jsx'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setData(posts);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {
        loading
          ? <p>Loading...</p>
          : data.map((e) => (
              <PostCard title={e.title} body={e.body}/>
            ))
      }
    </div>
  );
}

export default App;
