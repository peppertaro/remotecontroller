const Chs=(props)=>{
    const Nums=[...Array(12).keys()].map(i=>++i);
    return(
        Nums.map((i)=>{return(
            <button className={props.btn} key={props.k}>{i}</button>
            )            
        })
    )}
export default Chs;

