export default (req, res) => {
  const child=require('child_process');
  let val,cmd='';
  if(req.query.scr){
     val=req.query.scr;
     cmd="/ir/run.sh";
  }else if(req.query.kb){
     val=req.query.kb;
     cmd="/src/btkb/keyboard/send_string.py";
  }

     console.log("command : "+val);
    child.execFile(cmd,[val],(err,stdout,stderr)=>{
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