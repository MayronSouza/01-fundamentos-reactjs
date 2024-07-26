/* eslint-disable react/prop-types */
import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from '../components/Post.module.css'

export function Post({ author, content, publishedAt }) {
  const [comments, setCommets] = useState([''])
  const [newCommentText, setNewCommentText] = useState('')
  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  function handleCreateNewComment(e) {
    e.preventDefault()
    
    setCommets([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(e) {
    setNewCommentText(e.target.value)
  }

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
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.id}>{item.content}</p>
          } else if(item.type === 'link') {
            return <p key={item.id}><a href='#'>{item.content}</a></p>
          }
        })}
      </div>
      
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <p>Deixe seu feedback</p>

        <textarea
          name='content'
          onChange={handleNewCommentChange}
          placeholder='Deixe seu comentário'
        />

        <div className={styles.btn}>
          <button type='submit'>Publicar</button>
        </div>
      </form> 

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment}/>
        })}
      </div>
    </article>
  )
}