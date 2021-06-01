import Req from "../modules/request";
import layouts from "../styles/Layouts/layouts.module.css"

const Arrows=(props)=>{
    return(
        <div className={layouts.arrows}>
          <button className={layouts.up} >
            <i className={`fas fa-chevron-up ${layouts.arrow} ${layouts.arrbtn}`} onClick={()=>Req(`${props.val}_up`)} ></i>
          </button>
          <button className={layouts.left} >
            <i className={`fas fa-chevron-left ${layouts.arrow} ${layouts.arrbtn}`} onClick={()=>Req(`${props.val}_left`)} ></i>
          </button>
          <button className={layouts.enter} >
            <i className={`fas fa-dot-circle ${layouts.arrow} ${layouts.entbtn}`} onClick={()=>Req(`${props.val}_enter`)} ></i>
          </button>
          <button className={layouts.right} >
            <i className={`fas fa-chevron-right ${layouts.arrow} ${layouts.arrbtn}`} onClick={()=>Req(`${props.val}_right`)} ></i>
          </button>
          <button className={layouts.down} >
            <i className={`fas fa-chevron-down ${layouts.arrow} ${layouts.arrbtn}`} onClick={()=>Req(`${props.val}_down`)} ></i>
          </button>
        </div>
    )}
export default Arrows;