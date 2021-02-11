import styles from './event.module.css'

export default function Event({ time, title, description, speakers }) {
    return (
    <div className={styles.container}>
        <p className={styles.time}>{time}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.featuring}>FEATURING</p>
        <div className={styles.speakers}>
            {speakers.map((speaker) => (
                <div className={styles.speaker}>
                    <img src={speaker.img}></img>
                    <p>{speaker.name}</p>
                </div>
            ))}
        </div>
    </div>
    )
}