import { Footer } from '../modules/Template';
import layouts from '../styles/Layouts/layouts.module.css';
import styles from '../styles/ac.module.css';
import { useState } from 'react';
import Select from 'react-select';

const AC=()=>{
    const [MsgState, setMsgState]=useState(true);
    const [selectedValue,setSelectedValue] = useState('');
    const options = [
        { value: 'Auto', label: 'Auto' },
        { value: 'Cooler', label: 'Cooler' },
        { value: 'Heater', label: 'Heater' },
        { value: 'Dry', label: 'Dry' },
      ]
    return(
        <div className={layouts.container} name="AC" >
            {MsgState &&
             <div className={styles.msgwrapper}  >
                <i className={`fas fa-times ${styles.close}`} onClick={()=>setMsgState(!MsgState)}></i>
                <h1 className={styles.msg}>Coming soon...</h1>
             </div>
            }          
            <input className={styles.cersius} type="number" min="18" max="30"  placeholder="88"></input>
            
            <div className={styles.control}>
                <div className={styles.menu}>
                    <Select options={options}
                        placeholder="運転切替" 
                        className={styles.MenuVal}
                        value={options.find(obj => obj.value === selectedValue)}
                        onChange={(e)=>setSelectedValue(e.value)}
                    />     
                </div>
                <button className={`${layouts.btn} ${layouts.icons}`} ><i className="fas fa-power-off" onClick={null}></i></button>
                <button className={`${styles.icons} ${layouts.btn}`} ><i className="fas fa-stop"  onClick={null}></i></button>
            </div>
            
            <Footer loc={"/ac"} /> 
            
        </div>
    )
}
export default AC;