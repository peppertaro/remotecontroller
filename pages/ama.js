import styles from '../styles/ama.module.css';
import Layout from '../layouts/layout';
import Arrows from '../modules/Arrows';
import KB from "../modules/btkb";

const sendKey=()=>{
  KB(document.getElementById(styles.searchbox).value);
  document.getElementById(styles.searchbox).value=""
}

const Ama=()=> {
  return (
    <Layout container={styles.container} 
            powerbtn={styles.powerbtn}
            name="FIRE"
            val="FIRE_pw" >
      <Arrows val={"FIRE"} />
      <div className={styles.search}>
        <input id={styles.searchbox} />
        <button className={styles.searchbtn} onClick={()=>sendKey()}>Send Key</button>
        <div className={styles.inputbtn}>
          <button className={styles.searchbtn} onClick={()=>KB(" ")}>Space</button>
          <button className={styles.searchbtn} onClick={()=>null}>Enter</button>
          <button className={styles.searchbtn} onClick={()=>null}>Del</button>          
        </div>
      </div>
    </Layout>
  )
}
export default Ama;