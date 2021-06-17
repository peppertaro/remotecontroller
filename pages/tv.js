import styles from '../styles/tv.module.css';
import layouts from '../styles/Layouts/layouts.module.css';
import Arrows from '../modules/Arrows';
import Layout from '../layouts/layout';
import { Req } from '../modules/Send2Api';
import { useState } from 'react';

const TV=() => {
  const [ChsState, setChsState]=useState(false); 
  const [CtrlState, setCtrlState]=useState(false); 
  const Nums=[...Array(12).keys(12)].map(i=>++i);
  return (
    <Layout container={`${layouts.container} ${styles.container}`}
            powerbtn={styles.powerbtn}
            name="TV"
            val="TV_toggle"
            loc="/tv" >
      <div className={styles.selects}>
        <button className={`${styles.selectbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("TV_select")} >Select</button>
        <button className={`${styles.selectbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("TV_chlist")}>Ch-List</button>
        <button className={`${styles.selectbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("TV_back")}>Back</button>
        <button className={`${styles.selectbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>setChsState(!ChsState)} >Chs<i className={`fas fa-caret-${ChsState?"up":"down"} ${styles.open}`}></i></button>
      </div>
      <div className={styles.ch} >
        {ChsState && 
         Nums.map((i,k)=><button className={`${styles.chbtn} ${layouts.btn}`} key={k} onClick={()=>Req(`TV_${i}`)}>{i}</button>)
         }        
      </div>
      <div className={styles.arrowBox}>
      <Arrows up={()=>Req('TV_up')}
              left={()=>Req('TV_left')}
              enter={()=>Req('TV_enter')}
              right={()=>Req('TV_right')}
              down={()=>Req('TV_down')} 
              arrow={layouts.arrow} />
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
          <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>setCtrlState(!CtrlState)} >Ctrl<i className={`fas fa-caret-${CtrlState?"up":"down"} ${styles.open}`}></i></button>
          {CtrlState &&
            <div className={styles.brplay}>              
              <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("BR_skipb")} > <i className="fas fa-fast-backward"></i> </button>
              <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("BR_lang")} ><i className="fas fa-pause"></i></button>            
              <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("BR_skipf")} ><i className="fas fa-fast-forward"></i></button>
              <br/>
              <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("BR_rew")} ><i className="fas fa-backward"></i></button>
              <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("BR_play")} ><i className="fas fa-play"></i></button>
              <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("BR_ff")} ><i className="fas fa-forward"></i></button>
              <br/>
              <button className={`${styles.brbtn} ${layouts.btn} ${layouts.icons}`} onClick={()=>Req("BR_stop")} ><i className="fas fa-stop"></i></button>
            </div>
          }          
        </div>
      </div>
      
    </Layout>
  )
}
export default TV;
