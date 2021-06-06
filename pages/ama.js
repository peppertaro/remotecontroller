import styles from '../styles/ama.module.css';
import Layout from '../layouts/layout';
import layouts from '../styles/Layouts/layouts.module.css';
import KB from "../modules/btkb";
import Req from '../modules/request';
import {useState} from 'react';


const Ama=()=> {
  const [text] = useState('');
  const [isFocused, setFocused]=useState(false);
  const sendKey=(e)=>{
    if(e.target.value.match(/^[^\x01-\x7E\xA1-\xDF]+$/)){
      return alert('直接日本語入力することはできません！\n英字で入力してください！');
    }
    let val=e.target.value;
    switch(e.target.value){
      case " ":
       val="👽";
        break;
      case "!":
        val="！"
        break;
      default:
        break; 
    }
    KB(val);
  };  
  return (
    <Layout container={styles.container} 
            powerbtn={styles.powerbtn}
            name="FIRE"
            val="FIRE_pw"
            focus={isFocused} >
      <button className={`${styles.searchbtn} ${layouts.btn}`} onClick={()=>Req("TV_back")}>Back</button>
      <div className={layouts.arrows}>
        <button className={layouts.up} >
          <i className={`fas fa-chevron-up ${layouts.arrow} ${layouts.arrbtn}`} onClick={()=>KB("↑")} ></i>
        </button>
        <button className={layouts.left} >
          <i className={`fas fa-chevron-left ${layouts.arrow} ${layouts.arrbtn}`} onClick={()=>KB("←")} ></i>
        </button>
        <button className={layouts.enter} >
          <i className={`fas fa-dot-circle ${layouts.arrow} ${layouts.entbtn}`} onClick={()=>KB("〆")} ></i>
        </button>
        <button className={layouts.right} >
          <i className={`fas fa-chevron-right ${layouts.arrow} ${layouts.arrbtn}`} onClick={()=>KB("→")} ></i>
        </button>
        <button className={layouts.down} >
          <i className={`fas fa-chevron-down ${layouts.arrow} ${layouts.arrbtn}`} onClick={()=>KB("↓")} ></i>
        </button>
      </div>      
      <div className={styles.search}>
        <input id={styles.searchbox} type="email" onChange={sendKey} value={text} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)} placeholder="Check screen for your input" autoComplete="off" />
        <div className={styles.inputbtn}>
          <button className={`${styles.searchbtn} ${layouts.btn}`} onClick={()=>KB('〆')}>Enter</button>
          <button className={`${styles.searchbtn} ${layouts.btn}`} onClick={()=>KB('✂')}>Del</button>
          <button className={`${styles.searchbtn} ${layouts.btn}`} onClick={()=>KB('椨')}>Tab</button>
        </div>
      </div>
    </Layout>
  )
}
export default Ama;