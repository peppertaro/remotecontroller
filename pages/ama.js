import styles from '../styles/ama.module.css';
import Layout from '../layouts/layout';
import layouts from '../styles/Layouts/layouts.module.css';
import Arrows from '../modules/Arrows';
import { KB,Req } from '../modules/Send2Api';
import {useState} from 'react';


const Ama=()=> {
  const [text] = useState(''),
   [isFocused, setFocused]=useState(false),
   [ArrState, setArrState]=useState(false);
  const sendKey=(e)=>{
    if(e.target.value.match(/^[^\x01-\x7E\xA1-\xDF]+$/)){
      return alert('直接日本語入力することはできません！\n英字で入力してください！');
    }
    let val=e.target.value;
    switch(e.target.value){
      case " ":
       val="👽";
        break;
      default:
        break; 
    }
    KB(val);
  };

  return (
    <Layout container={styles.container} 
            powerbtn={styles.powerbtn}
            name="FireTVstick"
            val="FIRE_pw"
            focus={isFocused}
            loc="/ama"
            >
      <button className={`${styles.amabtn} ${layouts.btn}`} onClick={()=>Req("TV_back")}>Back</button>
      <button className={`${ArrState?styles.TVbtn:styles.amabtn} ${layouts.btn}`} onClick={()=>setArrState(!ArrState)}>{ArrState?"TV":"AMA"}</button>
      {ArrState
      ?<Arrows up={()=>Req('TV_up')}
              left={()=>Req('TV_left')}
              enter={()=>Req('TV_enter')}
              right={()=>Req('TV_right')}
              down={()=>Req('TV_down')} 
              arrow={styles.TVcl}
      />
      :<><Arrows up={()=>KB('↑')}
              left={()=>KB('←')}
              enter={()=>KB('〆')}
              right={()=>KB('→')}
              down={()=>KB('↓')} 
              arrow={styles.Amacl}             
              />
        <div className={styles.search} >
          <input id={styles.searchbox} type="email" onChange={sendKey} value={text} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} placeholder="Check screen for your input" autoComplete="off" />
          <div className={styles.inputbtn}>
            <button className={`${styles.amabtn} ${layouts.btn}`} onClick={()=>KB('〆')}>Enter</button>
            <button className={`${styles.amabtn} ${layouts.btn}`} onClick={()=>KB('✂')}>Del</button>
            <button className={`${styles.amabtn} ${layouts.btn}`} onClick={()=>KB('椨')}>Tab</button>
          </div>
        </div>
      </>
      }
      
    </Layout>
  )
}
export default Ama;