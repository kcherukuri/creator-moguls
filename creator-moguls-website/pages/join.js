import styles from '../styles/Join.module.css'
import Link from 'next/link'

export default function Join() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <a>CREATOR MOGULS</a>
                </Link>
            </header>
            <main className={styles.main}>
                <h1>INSERT TYPEFORM IFRAME HERE</h1>
            </main>
        </div>
    )
  }