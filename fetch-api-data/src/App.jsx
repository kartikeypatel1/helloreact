import { getPosts, getRandomUser } from './api/index.js'
import { useEffect, useState } from 'react'
import './App.css'
import PostCard from './components/PostCard.jsx'
import UserCard from './components/UserCard.jsx'

function App() {
  const [posts, setPosts] = useState([])
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([getPosts(), getRandomUser()])
      .then(([postsData, userRes]) => {
        setPosts(postsData)
        setUserData(userRes?.results?.[0] || null)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])
const refreshData=()=>{
  getRandomUser().then((userRes)=>{
    setUserData (userRes?.results?.[0] || null)
  }).catch((err)=>{
    console.error (err)
  })
}
  return (
    <div className="App">
      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          {userData && <UserCard data={userData} />}
          <button onClick={refreshData} className='button-refresh'>Fetch New User</button>
          <h1>Posts</h1>

          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default App
