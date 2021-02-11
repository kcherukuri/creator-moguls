import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Host from '../components/host'
import Event from '../components/event'
import Link from 'next/link'

export async function getStaticProps() {
  const events = [
    {
      time: "FRI, FEB 12 6:00 PM PT", 
      title: "Creator Moguls Ep 1. Twitch Founder Justin Kan AMA", 
      description: "Episode 1 of Creator Moguls bringing you moguls across all industries to share stories and learnings. First guest is Justin Kan, founder of Twitch turned YouTuber & TikToker.", 
      speakers: [
        {name: "TZ", img: "https://pbs.twimg.com/profile_images/1264039152569352194/_9WjTZY8.jpg"},
        {name: "Justin", img: "https://pbs.twimg.com/profile_images/992080380428611586/J28JCtzb_400x400.jpg"},
        {name: "Michael", img: "https://pbs.twimg.com/profile_images/1326326646920548352/vcIoxnUU.jpg"},
        {name: "Marco", img: "https://pbs.twimg.com/profile_images/1219567856796553216/w-lljfRQ.jpg"},
      ],
      link: "https://www.joinclubhouse.com/event/m2jLY8Ap"
    }
  ]
  return {
    props: {
      events,
    }
  }
}

export default function Home({ hosts, events }) {
  return (
    <div className={styles.container}>

      <Head>
        <title>Creator Moguls</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <a href="www.creatormoguls.com">CREATOR MOGULS</a>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Build an empire.
        </h1>
        <h1 className={styles.title}>
          Become a mogul.
        </h1>
        <p className={styles.description}>
        Creator Moguls invites real moguls across tech, media, and commerce to share ideas & learnings for creators who want to build an empire.
        </p>
        <Link href="/join">
          <a className={styles.community}>Join the community</a>
        </Link>
        <h3 className={styles.subtitle}>
          UPCOMING EVENTS
        </h3>
        <div className={styles.grid}>
          {events.map(({time, title, description, speakers, link}) => (
              <>
                <a href={link}>
                  <Event time={time} title={title} description={description} speakers={speakers}/>
                </a>
              </>
            ))}
        </div>
      </main>

    </div>
  )
}
