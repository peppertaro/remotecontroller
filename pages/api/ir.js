export default (req, res) => {
    //scr = "/ir/run.sh TV:toggle";
  require('child_process').execFile("/ir/run.sh",[req],(err,stdout,stderr)=>{
      if(err){
        console.err(err);
        console.log("stderr:"+stderr);
        res=stderr;
      }
      console.log("stdout:"+stdout);      
      res=stdout;
    })
    return JSON.stringify({res})
  }
