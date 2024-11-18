import { useState } from 'react'
import './App.css'

const basePosts = [

]

function App() {

  const [posts, setPosts] = useState(basePosts)
  const [newPost, setNewPost] = useState('')

  function addPost(e) {
    e.preventDefault()

    setPosts([...posts, newPost])
    setNewPost('')
  }

  function handleDelete(e) {
    const postIndex = Number(e.target.getAttribute('data-index'))

    const newPosts = posts.filter((post, index) => index != postIndex)
    setPosts(newPosts)
  }

  return (
    <>
      <div className="container">
        <h1>React Blog Form</h1>

        <form onSubmit={addPost}>
          <div className="mb-3">
            <label htmlFor="post" className="form-label">Post</label>
            <div className="input-group mb-3">


              <input type="text" className="form-control" placeholder="Aggiungi un post" aria-label="Aggiungi un post" aria-describedby="button-addon2" value={newPost} onChange={e => setNewPost(e.target.value)} />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Invia</button>
            </div>


          </div>
        </form>


        <ul className="list-group">
          {posts.map((post, index) => <li key={index} className="list-group-item d-flex justify-content-between">{post}


            <button onClick={handleDelete} data-index={index}><i className="bi bi-trash"></i></button>
          </li>)}

        </ul>

      </div>
    </>
  )
}

export default App
