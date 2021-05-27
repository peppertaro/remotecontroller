import styles from '../styles/tv.module.css';
import layouts from '../styles/Layouts/layouts.module.css';
import Chs from '../modules/Chs';
import Layout from '../layouts/layout';

const TV=()=> {
  return (
    <Layout container={`${layouts.container} ${styles.container}`}
            powerbtn={styles.powerbtn} >
      <div className={styles.ch}>
        <Chs btn={styles.chbtn} />
      </div>
      <div className={styles.arrows}>
        <div className={styles.volarr}>
          <i className={`fas fa-volume-up ${styles.volup}`} />
          <i className={`fas fa-volume-down ${styles.voldown}`} />
        </div>
        <div className={styles.charr}>
          <i className={`fas fa-chevron-circle-up ${styles.chup}`} />
          <i className={`fas fa-chevron-circle-down ${styles.chdown}`} />
        </div>
      </div>
      <div className={layouts.power}>
        <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`}><i className="fas fa-power-off" /></button>
      </div>
    </Layout>
  )
}
export default TV;


export async function getStaticProps(context) {
  const child=require('child_process');
    const list=child.execFile("ls",["-al","/ir/"],(err,stdout,stderr)=>{
      if(err){
        console.err(err);
      }
      console.log("stdout:"+stdout);
      console.log("stderr:"+stderr)
    })
  return {
    props: {test:"hoge"}
  }
}
