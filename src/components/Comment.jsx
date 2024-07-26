/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/MayronSouza.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTine}>
              <strong>Mayron Souza</strong>
              <time title="23 de julho de 2024" dateTime="2024-07-23 20:32:05">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}