import layouts from "../styles/Layouts/layouts.module.css"

const Arrows=(props)=>{
    return(
        <div className={layouts.arrows}>
          <button className={layouts.up} >
            <i className={`fas fa-chevron-up ${props.arrow} ${layouts.arrbtn}`} onClick={props.up} ></i>
          </button>
          <button className={layouts.left} >
            <i className={`fas fa-chevron-left ${props.arrow} ${layouts.arrbtn} `} onClick={props.left} ></i>
          </button>
          <button className={layouts.enter} >
            <i className={`fas fa-dot-circle  ${props.arrow} ${layouts.entbtn} `} onClick={props.enter} ></i>
          </button>
          <button className={layouts.right} >
            <i className={`fas fa-chevron-right  ${props.arrow} ${layouts.arrbtn}`} onClick={props.right} ></i>
          </button>
          <button className={layouts.down} >
            <i className={`fas fa-chevron-down  ${props.arrow} ${layouts.arrbtn}`} onClick={props.down} ></i>
          </button>
        </div>
    )}
export default Arrows;