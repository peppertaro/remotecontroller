 import Req from "../modules/request";

const Chs=(props)=>{
    const Nums=[...Array(12).keys(12)].map(i=>++i);
    return(
        Nums.map((i,k)=>{return(
            <button className={props.btn} key={k} onClick={()=>Req(`TV_${i}`)}>{i}</button>
            )
        })
    )}
export default Chs;

