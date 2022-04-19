import layouts from "../styles/Layouts/layouts.module.css"

const Arrows=(props)=>{
  const ArrowsBtn=(d)=>(
    <button className={layouts[d]} >
      <i className={`fas fa-chevron-${d} ${props.arrow} ${layouts.arrbtn}`} onClick={props[d]} ></i>
    </button>
  );
    return(
        <div className={layouts.arrows}>
          {ArrowsBtn('up')}
          <div className={layouts.center}>
            {ArrowsBtn('left')}
            <button className={layouts.enter} >
              <i className={`fas fa-dot-circle  ${props.arrow} ${layouts.entbtn} `} onClick={props.enter} ></i>
            </button>
            {ArrowsBtn('right')}
          </div>
          {ArrowsBtn('down')}
        </div>
    )}
export default Arrows;