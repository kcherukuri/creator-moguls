import styles from './host.module.css'

export default function Host({ image, name, bio }) {
    return (
    <div className={styles.container}>
        <img src={image} className={styles.hostImage}></img>
        <div className={styles.hostInfoFrame}>
            <a>{name}</a>
            <p>{bio}</p>
        </div>
    </div>
    )
   
}