import { Post } from "./Post"
import { Header } from "./components/Header"
import "./global.css"

export function App() {
  return (
    <div>

      <Header />

      <Post
        author="Thales Wendel"
        content="Lorem, ipsum dolor"
      />

      <Post
        author="Diego Fernandes"
        content="Lorem, ipsum dolor"
      />
    </div>
  )
}