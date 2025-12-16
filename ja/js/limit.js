function canSendAmount(a){
  if(a<1||a>100000)return false;
  let t=0,now=Date.now();
  getHistory().forEach(x=>{
    if(x.type==="Debit" && now-new Date(x.date).getTime()<86400000)
      t+=x.amount;
  });
  return (t+a)<=100000;
}
