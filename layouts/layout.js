    import Header from "../modules/header";
    import Footer from "../modules/footer";
        
const Layout=(props)=>{
    return(
        <div name={props.name} >
            <div className={props.container} >
                <Header powerbtn={props.powerbtn} val={props.val} />
                    {props.children}
                <Footer focus={props.focus} />
            </div>
        </div>
    );
}
export default Layout;