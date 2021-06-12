import Link from 'next/link';
import styles from '../styles/Layouts/layouts.module.css';

const Footer=(props)=> {
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
    return (
        <footer className={styles.footer} style={{display:props.focus?"none":""}} >
            {Lists.map((list,k)=>{
                if(props.loc==list.href){
                    return (
                        <button className={`${styles.icons} ${styles.btn}`} disabled  key={k} >
                            <i className={list.faw} ></i>
                        </button>
                    )
                }else{
                   return( 
                        <Link href={list.href} key={k} >
                            <button className={`${styles.icons} ${styles.btn}`} >
                                <i className={list.faw} ></i>
                            </button>
                        </Link> 
                    )
                }
            })}
        </footer>
    )
}
export default Footer;