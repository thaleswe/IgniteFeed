import styles from "./Comment.module.css"
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/thaleswe.png" alt="Foto de perfil" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Thales Wendel</strong>
                            <time title="18 de abril às 14:55" dateTime="18/04/2024 14:55:40">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Wendel, parabéns!! 👏👏</p>
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