const KB=(v)=>{
    const request = new XMLHttpRequest(),
     url="/api/ir?kb="+v;
    request.open('GET', url, true);
    request.onload = ()=>{
        console.log("bt input :"+v+" sent to rthome.")
    }
    request.send();
}
export default KB;