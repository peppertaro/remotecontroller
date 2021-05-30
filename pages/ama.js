import styles from '../styles/ama.module.css';
import Layout from '../layouts/layout';
import Req from '../modules/request';

const Ama=()=> {
  return (
    <Layout container={styles.container} 
            powerbtn={styles.powerbtn}
            name="FIRE"
            val="FIRE_pw" >
      <div className={styles.arrows}>
        <button className={styles.up} >
          <i className={`fas fa-chevron-up ${styles.arrow} ${styles.btn}`} onClick={()=>Req("FIRE_up")} ></i>
        </button>
        <button className={styles.left} >
          <i className={`fas fa-chevron-left ${styles.arrow} ${styles.btn}`} onClick={()=>Req("FIRE_left")} ></i>
        </button>
        <button className={styles.enter} >
          <i className={`fas fa-dot-circle ${styles.arrow} ${styles.entbtn}`} onClick={()=>Req("FIRE_enter")} ></i>
        </button>
        <button className={styles.right} >
          <i className={`fas fa-chevron-right ${styles.arrow} ${styles.btn}`} onClick={()=>Req("FIRE_right")} ></i>
        </button>
        <button className={styles.down} >
          <i className={`fas fa-chevron-down ${styles.arrow} ${styles.btn}`} onClick={()=>Req("FIRE_down")} ></i>
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