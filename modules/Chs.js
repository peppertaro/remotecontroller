const Chs=(props)=>{
    const Nums=[...Array(12).keys(12)].map(i=>++i);
    return(
        Nums.map((i,k)=>{return(
            <button className={props.btn} key={k}>{i}</button>
            )
        })
    )}
export default Chs;

