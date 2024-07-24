import styles from '../components/Post.module.css'
import { Comment } from './Comment'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/MayronSouza.png" />
          <div className={styles.authorInfo}>
            <strong>Mayron Souza</strong>
            <span>FullStack Developer</span>
          </div>
        </div>

        <time title="23 de julho de 2024" dateTime="2024-07-23 20:32:05">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="#">mayron.dev/developer</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#"> #nlw</a>{' '}
          <a href="#">#rocketseat🚀</a>
        </p>
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