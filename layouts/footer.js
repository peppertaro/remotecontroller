import Link from 'next/link';
import styles from '../styles/Layouts/layouts.module.css'

export default function TV() {
    return (
      <>
        <footer className={styles.footer}>
            <Link href="/ac" className={styles.icons} >
                <button className={`${styles.icons} ${styles.btn}`}>
                    <i className="fas fa-thermometer-half"></i>
                </button>
            </Link>
            <Link href='/tv'>
                <button className={`${styles.icons} ${styles.btn}`}>
                    <i className="fas fa-tv"></i>
                </button>
            </Link>
            <Link href='/'>
                <button className={`${styles.icons} ${styles.btn}`}>
                    <i className="fas fa-home"></i>
                </button>
            </Link>
            <Link href='/ama'>
                <button className={`${styles.icons} ${styles.btn}`}>
                    <i className="fab fa-amazon"></i>
                </button>
            </Link>
            <Link href="/rpj">
                <button className={`${styles.icons} ${styles.btn}`}>
                    <i className="fas fa-video"></i>
                </button>
            </Link>
        </footer>
      </>
    )
}