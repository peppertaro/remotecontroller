    import Header from "../modules/header";
    import Footer from "../modules/footer";
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