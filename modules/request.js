const Req=(v)=>{
    const request = new XMLHttpRequest(),
     url="/api/ir?scr="+v;
    request.open('GET', url, true);
    request.onload = ()=>{
        console.log("ir request :"+v+" sent to rthome.")
    }
    request.send();
}
export default Req;