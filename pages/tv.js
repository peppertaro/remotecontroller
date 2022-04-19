import styles from '../styles/tv.module.css';
import layouts from '../styles/Layouts/layouts.module.css';
import Arrows from '../modules/Arrows';
import Layout from '../layouts/layout';
import { Req } from '../modules/Send2Api';
import { useState } from 'react';

const TV=() => {
  const [ChsState, setChsState]=useState(false),
  [CtrlState, setCtrlState]=useState(false),
  Nums=[...Array(12).keys(12)].map(i=>++i),
  Btns=(s,o,i)=>(<button className={`${styles[s]} ${layouts.btn} ${layouts.icons}`} onClick={o} >{i}</button>),
  Fa=(d,s,o)=>(<i className={`fas fa-${d} ${s}`} onClick={o} />),
  Chs=<>Chs<i className={`fas fa-caret-${ChsState?"up":"down"} ${styles.open}`} /></>,
  BRs=<>Ctrl<i className={`fas fa-caret-${CtrlState?"up":"down"} ${styles.open}`} /></>;
  return (
    <Layout container={`${layouts.container} ${styles.container}`}
            powerbtn={styles.powerbtn}
            name="TV"
            val="TV_toggle"
            loc="/tv" >
      <div className={styles.selects}>
        {Btns("selectbtn",()=>Req("TV_select"),"Select")}
        {Btns("selectbtn",()=>Req("TV_chlist"),"Chlist")}
        {Btns("selectbtn",()=>Req("TV_back"),"Back")}
        {Btns("selectbtn",()=>setChsState(!ChsState),Chs)}
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
          {Fa("volume-up",styles.volup,()=>Req("TV_volup"))}         
          {Fa("volume-down",styles.voldown,()=>Req("TV_voldown"))}                   
        </div>
        <div className={styles.charr}>
          {Fa("chevron-circle-up",styles.chup,()=>Req("TV_chup"))}        
          {Fa("chevron-circle-down",styles.chdown,()=>Req("TV_chdown"))}
        </div>
      </div>
      <div className={styles.brBox}>
        <div className={`${layouts.power} ${styles.brpower}`}>
          {Btns("brbtn",null,Fa("power-off",null,()=>Req("BR_toggle")))}          
        </div>
        <div className={styles.brselect}>
          {Btns("brbtn",()=>Req("BR_lang"),"Lang")}
          {Btns("brbtn",()=>Req("BR_list"),"List")}
          {Btns("brbtn",()=>setCtrlState(!CtrlState),BRs)}
          {CtrlState &&
            <div className={styles.brplay}>
              {Btns("brbtn",()=>Req("BR_skipb"),Fa("fast-backward"))}
              {Btns("brbtn",()=>Req("BR_pause"),Fa("pause"))}
              {Btns("brbtn",()=>Req("BR_skipf"),Fa("fast-forward"))}
              <br/>
              {Btns("brbtn",()=>Req("BR_rew"),Fa("backward"))}
              {Btns("brbtn",()=>Req("BR_play"),Fa("play"))}
              {Btns("brbtn",()=>Req("BR_ff"),Fa("forward"))}
              <br/>
              {Btns("brbtn",()=>Req("BR_stop"),Fa("stop"))}
            </div>
          }          
        </div>
      </div>
      
    </Layout>
  )
}
export default TV;
