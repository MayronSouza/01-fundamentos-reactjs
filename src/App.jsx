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
      { type: 'paragraph', content: 'Oi pessoal' },
      { type: 'paragraph', content: 'Estou començando em um novo projeto, muito interessante em ReactJS' },
      { type: 'link', content: 'mayron.dev/developer' },
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
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
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