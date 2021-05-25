import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>rtSmartHome</title>
        <meta name="description" content="Created by T.Arita" />
        <link rel="icon" href="/Kyon.ico" />
      </Head>

      <main className={styles.main}>        
        <h1 className={styles.title}>
          天才的な僕はテレビをいじるよ
        </h1>

        <div className={styles.grid}>
        <Link href="/tv">
            <a className={styles.card}>
                <h2>TV & Blu-Ray &rarr;<br/><i className="fas fa-tv"></i></h2>
            </a>              
        </Link>
        <Link href="/ama">
            <a className={styles.card}>
              <h2>Fire TV Stick &rarr;<br/><i className="fab fa-amazon"></i></h2>
            </a>
        </Link>
        <Link href="/rpj">
            <a className={styles.card}>
                <h2>Ryoko's Projector &rarr;<br/><i className="fas fa-video"></i></h2>
            </a>
        </Link>
        <Link href="/ac" className={styles.card} >
            <a className={styles.card}>
              <h2> Air Conditioner &rarr;<br/><i className="fas fa-thermometer-half"></i></h2>
            </a>
        </Link>
        </div>
      </main>

      <footer className={styles.footer}>
          <p>Presented by</p>
          <span className={styles.logo}>
            <img className={styles.footerimg} src="/Kyon.ico" />            
          </span>
      </footer>
    </div>
  )
}
