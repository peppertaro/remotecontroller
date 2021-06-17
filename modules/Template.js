import layouts from '../styles/Layouts/layouts.module.css';
import { Req } from '../modules/Send2Api';
import Link from 'next/link';

 const Header=(props)=> {
    return (
        <div className={layouts.power}>
            <button className={`${props.powerbtn} ${layouts.btn} ${layouts.icons}`} ><i className="fas fa-power-off" onClick={()=>Req(props.val)}></i></button>
        </div>
    )
  }

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
        <footer className={layouts.footer} style={{display:props.focus?"none":""}} >
            {Lists.map((list,k)=>{
                if(props.loc==list.href){
                    return (
                        <button className={layouts.disbtn} disabled  key={k} >
                            <i className={list.faw} ></i>
                        </button>
                    )
                }else{
                   return( 
                        <Link href={list.href} key={k} >
                            <button className={`${layouts.icons} ${layouts.btn}`} >
                                <i className={list.faw} ></i>
                            </button>
                        </Link> 
                    )
                }
            })}
        </footer>
    )
}
export {Header,Footer};