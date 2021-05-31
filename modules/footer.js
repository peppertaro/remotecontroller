import Link from 'next/link';
import styles from '../styles/Layouts/layouts.module.css';
//import {useState} from 'react';

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
    
/*
    const [ScrollState, setScrollState]=useState(false);
    const ShowFooter=()=>{
        if(window.pageYOffset===0||window.pageYOffset===0){
            setScrollState(!ScrollState);
        }
    };
*/
    const Location =()=> {
        !window
        ?  location.pathname
        :  window.location.pathname;
    }
    return (
        <footer className={styles.footer}>
            {Lists.map((list,k)=>{return(
                <Link href={list.href} className={styles.icons} key={k} /*style={{display:ScrollState?"":"none"}} */>
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