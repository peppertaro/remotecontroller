export default (req, res) => { 
  console.log("command : "+req.query.scr)
  const child=require('child_process');
  child.execFile("/ir/run.sh",[req.query.scr],(err,stderr,stdout)=>{
    if(err){
      console.log(err);
      res.status(404).send({err})
      res.status(404).end();
      return 1
    }else if(stderr){
      res.status(200).send({stderr})
      res.status(200).end();
      return 1
    }
    res.status(200).send({stdout}) 
    res.status(200).end();
    return 0;
  })
}