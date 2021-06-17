import Head from 'next/head';
import { Header,Footer } from '../modules/Template';
        
const Layout=(props)=>{
    return(
        <div name={props.name} >
            <Head>
                <title>rtSmartHome - {props.name}</title>
                <meta name="description" content="Created by T.Arita" />
                <link rel="icon" href="/Kyon.ico" />
            </Head>
            <div className={props.container} >
                <Header powerbtn={props.powerbtn} val={props.val} />
                    {props.children}
                <Footer focus={props.focus} loc={props.loc} />
            </div>
        </div>
    );
}
export default Layout;