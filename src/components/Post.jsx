import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/douglasmartins7.png" />
                    <div className={styles.authorInfo}>
                        <strong>Douglas Martins</strong>
                        <span>Full Cycle Plus</span>
                    </div>
                </div>

                <time title="09 de Agosto ás 09:32:30" dateTime="2022-08-09 09:32:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no VR adventure, evento da VRaptor Code. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>

                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#vradventure</a>{' '} 
                    <a href="">#vraptorcode</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixa seu feedback</strong>
                   
                <textarea
                     placeholder="Deixe um comentário"
                />
                
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}