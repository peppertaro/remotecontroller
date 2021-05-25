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
          <button className={styles.volup}><i className="fas fa-volume-up"></i></button>
          <button className={styles.voldown}><i className="fas fa-volume-down"></i></button>
        </div>
        <div className={styles.charr}>
          <button className={styles.chup}><i className="fas fa-chevron-circle-up"></i></button>
          <button className={styles.chdown}><i className="fas fa-chevron-circle-down"></i></button>
        </div>
      </div>
      <div className={layouts.power}>
        <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`}><i className="fas fa-power-off"></i></button>
      </div>
    </Layout>
  )
}
export default TV;
/*

export async function getStaticProps(context) {
  const req=require('child_process');
  const res=req.execFile("ls",(err,stdout,stderr)=>{
    if(err){
      console.err(err);
    }
    console.log(stdout);
    console.log(stderr)
  })

  return {
    props: {res}
  }
}

*/