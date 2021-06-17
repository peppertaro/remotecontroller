const Send2Api=(k,msg,v)=>{
    const request = new XMLHttpRequest(),
     url=`/api/ir?${k}=${v}`;
    request.open('GET', url, true);
    request.onload = ()=>{
        console.log(`${msg} : ${v} sent to rthome.`)
    }
    request.send();
}
const KB=(v)=>Send2Api("kb","bt input",v);
const Req=(v)=>Send2Api("scr","ir Request",v);

export {KB,Req};