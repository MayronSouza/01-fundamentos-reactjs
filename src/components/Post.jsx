/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from '../components/Post.module.css'

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index}>{item.content}</p>
          } else if(item.type === 'link') {
            return <p key={index}><a href='#'>{item.content}</a></p>
          }
        })}
      </div>
      
      <form className={styles.commentForm}>
        <p>Deixe seu feedback</p>

        <textarea placeholder='Deixe seu comentário' />

        <div className={styles.btn}>
          <button type='submit'>Publicar</button>
        </div>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}