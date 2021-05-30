import styles from '../styles/tv.module.css';
import layouts from '../styles/Layouts/layouts.module.css';
import Chs from '../modules/Chs';
import Layout from '../layouts/layout';
import Req from '../modules/request';
import {useState} from 'react';

const TV=() => {
  const [ChsState, setChsState]=useState(false),
    ChsToggle=()=>{
        setChsState(!ChsState);
    }
  return (
    <Layout container={`${layouts.container} ${styles.container}`}
            powerbtn={styles.powerbtn}
            name="TV"
            val="TV_toggle">
      <div className={styles.selects}>
        <button className={`${styles.selectbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("TV_select")} >Select</button>
        <button className={`${styles.selectbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("TV_chlist")}>Ch-List</button>
        <button className={`${styles.selectbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("TV_back")}>Back</button>
        <button className={`${styles.selectbtn} ${layouts.btn} ${layouts.icons}`} onClick={ChsToggle} >Chs <br/> <i className={`fas fa-caret-${ChsState?"up":"down"} ${styles.open}`}></i></button>
      </div>
      
      <div className={styles.ch} style={{display:ChsState?"":"none"}} >
        <Chs btn={styles.chbtn} />
      </div>
      <div className={styles.arrowBox}>
        <div className={styles.arrows}>
          <button className={styles.up} >
            <i className={`fas fa-chevron-up ${styles.arrow} ${styles.btn}`} onClick={()=>Req("TV_up")} ></i>
          </button>
          <button className={styles.left} >
            <i className={`fas fa-chevron-left ${styles.arrow} ${styles.btn}`} onClick={()=>Req("TV_left")} ></i>
          </button>
          <button className={styles.enter} >
            <i className={`fas fa-dot-circle ${styles.arrow} ${styles.entbtn}`} onClick={()=>Req("TV_enter")} ></i>
          </button>
          <button className={styles.right} >
            <i className={`fas fa-chevron-right ${styles.arrow} ${styles.btn}`} onClick={()=>Req("TV_right")} ></i>
          </button>
          <button className={styles.down} >
            <i className={`fas fa-chevron-down ${styles.arrow} ${styles.btn}`} onClick={()=>Req("TV_down")} ></i>
          </button>
        </div>
        <div className={styles.volarr}>
          <i className={`fas fa-volume-up ${styles.volup}`} onClick={()=>Req("TV_volup")} />
          <i className={`fas fa-volume-down ${styles.voldown}`} onClick={()=>Req("TV_voldown")} />
        </div>
        <div className={styles.charr}>
          <i className={`fas fa-chevron-circle-up ${styles.chup}`} onClick={()=>Req("TV_chup")} />
          <i className={`fas fa-chevron-circle-down ${styles.chdown}`} onClick={()=>Req("TV_chdown")} />
        </div>
      </div>
      <div className={styles.brBox}>
        <div className={`${layouts.power} ${styles.brpower}`}>
          <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`}><i className="fas fa-power-off" onClick={()=>Req("BR_toggle")} /></button>
        </div>
        <div className={styles.brselect}>
          <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("BR_lang")} >Lang</button>
          <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("BR_list")} >List</button>
        </div>
      </div>
      
    </Layout>
  )
}
export default TV;
