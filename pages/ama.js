import styles from '../styles/ama.module.css';
import Layout from '../layouts/layout';
import Arrows from '../modules/Arrows';
import Req from "../modules/request";

const Ama=()=> {
  return (
    <Layout container={styles.container} 
            powerbtn={styles.powerbtn}
            name="FIRE"
            val="FIRE_pw" >
      <Arrows val={"FIRE"} />
      <div className={styles.search}>
        <input className={styles.searchbox} />
        <button className={styles.searchbtn} onClick={()=>null}>Input</button>
      </div>
    </Layout>
  )
}
export default Ama;