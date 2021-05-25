import layouts from '../styles/Layouts/layouts.module.css';



 const Header=(props)=> {
    return (
      <>
        <div className={layouts.power}>
            <button className={`${props.powerbtn} ${layouts.btn} ${layouts.icons}`}><i className="fas fa-power-off"></i></button>
        </div>
      </>
    )
  }
  export default Header;