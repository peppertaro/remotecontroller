import Link from 'next/link';
import styles from '../styles/Layouts/layouts.module.css';

const Footer=()=> {
    const Lists=[
        {
            href:"/ac",
            faw:"fas fa-thermometer-half"
        },
        {
            href:"/tv",
            faw:"fas fa-tv"  
        },
        {
            href:"/",
            faw:"fas fa-home"
        },
        {
            href:"/ama",
            faw:"fab fa-amazon"
        },
        {
            href:"/rpj",
            faw:"fas fa-video"
        },
    ]
    const Location =()=> {
        !window
        ?  location.pathname
        :  window.location.pathname;
    }

    return (
        <footer className={styles.footer}>
            {Lists.map((list,k)=>{return(
                <Link href={list.href} className={styles.icons} key={k} >
                    <button className={`${styles.icons} ${styles.btn}`} disabled ={Location==list.href} >
                        <i className={list.faw}></i>
                    </button>
                </Link>
                )}
            )}            
        </footer>
    )
}
export default Footer;