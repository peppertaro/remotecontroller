    import Header from "./header";
    import Footer from "./footer";
const Layout=(props)=>{
    return(
        <div className={props.container}>
            <Header powerbtn={props.powerbtn} />
                {props.children}
            <Footer />
        </div>
    );
}
export default Layout;