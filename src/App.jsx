import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

export function App() {

  return (
     <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Mayron"
            content="Vamos de textos aleatórios 1"
          />
          <Post
            author="Liliane"
            content="Vamos de textos aleatórios 2"
          />
        </main>
      </div>
     </>
  )
}