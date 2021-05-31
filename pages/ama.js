import styles from '../styles/ama.module.css';
import layouts from '../styles/Layouts/layouts.module.css';
import Layout from '../layouts/layout';
import Req from '../modules/request';

const Ama=()=> {
  return (
    <Layout container={styles.container} 
            powerbtn={styles.powerbtn}
            name="FIRE"
            val="FIRE_pw" >
      <div className={layouts.arrows}>
        <button className={layouts.up} >
          <i className={`fas fa-chevron-up ${layouts.arrow} ${styles.btn}`} onClick={()=>Req("FIRE_up")} ></i>
        </button>
        <button className={layouts.left} >
          <i className={`fas fa-chevron-left ${layouts.arrow} ${styles.btn}`} onClick={()=>Req("FIRE_left")} ></i>
        </button>
        <button className={layouts.enter} >
          <i className={`fas fa-dot-circle ${layouts.arrow} ${styles.entbtn}`} onClick={()=>Req("FIRE_enter")} ></i>
        </button>
        <button className={layouts.right} >
          <i className={`fas fa-chevron-right ${layouts.arrow} ${styles.btn}`} onClick={()=>Req("FIRE_right")} ></i>
        </button>
        <button className={layouts.down} >
          <i className={`fas fa-chevron-down ${layouts.arrow} ${styles.btn}`} onClick={()=>Req("FIRE_down")} ></i>
        </button>
      </div>
      <div className={styles.search}>
        <input className={styles.searchbox} />
        <button className={styles.searchbtn}>Input</button>
      </div>
    </Layout>
  )
}
export default Ama;