import layouts from '../styles/Layouts/layouts.module.css';
import Req from '../modules/request';

 const Header=(props)=> {
    return (
        <div className={layouts.power}>
            <button className={`${props.powerbtn} ${layouts.btn} ${layouts.icons}`} ><i className="fas fa-power-off" onClick={()=>Req(props.val)}></i></button>
        </div>
    )
  }
  export default Header;