import styles from '../styles/rpj.module.css';
import layouts from '../styles/Layouts/layouts.module.css';
import Layout from '../layouts/layout';
import { Req } from '../modules/Send2Api';

const RPJ=()=> {
  return (
    <Layout container={styles.container}
    powerbtn={styles.powerbtn}
    name="Projector"
    val="RPJ_pw"
    loc="/rpj">
      <div className={styles.control}> 
        <button className={`${styles.src} ${layouts.btn}`} onClick={()=>Req("RPJ_src")}>SRC</button>
        <div className={styles.volarr}>
          <i className={`fas fa-volume-up ${styles.volup}`} onClick={()=>Req("RPJ_volup")} />
          <i className={`fas fa-volume-down ${styles.voldown}`} onClick={()=>Req("RPJ_voldown")} />
        </div>
      </div>
    </Layout> 
  )
}
export default RPJ;