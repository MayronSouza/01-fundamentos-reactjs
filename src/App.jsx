/* eslint-disable react/jsx-key */
import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa, É um projeto ReactJS pela Rocketseat' },
      { type: 'link', content: 'mayk.educator/educator' },
    ],
    publishedAt: new Date('2024-07-23 18:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/MayronSouza.png',
      name: 'Mayron Souza',
      role: 'FullStack Developer'
    },
    content: [
      { id: 1, type: 'paragraph', content: 'Oi pessoal' },
      { id: 2, type: 'paragraph', content: 'Estou començando em um novo projeto, muito interessante em ReactJS' },
      { id: 3, type: 'link', content: 'mayron.dev/developer' },
    ],
    publishedAt: new Date('2024-07-23 13:42:52')
  }
]

export function App() {

  return (
     <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
     </>
  )
}