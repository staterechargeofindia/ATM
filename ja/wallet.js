function getBalance(){return Number(localStorage.getItem("BAL")||0);}
function setBalance(b){localStorage.setItem("BAL",b);}
function debit(a,to){
  let b=getBalance();if(b<a)return alert("No balance");
  setBalance(b-a);
  saveTxn("Debit",a,to);
}
function adminAdd(a){setBalance(getBalance()+Number(a));}
function saveTxn(t,a,p){
  let h=JSON.parse(localStorage.getItem("H")||"[]");
  h.unshift({date:new Date().toLocaleString(),type:t,amount:a,party:p});
  localStorage.setItem("H",JSON.stringify(h));
  localStorage.setItem("LAST_AMOUNT",a);
  localStorage.setItem("LAST_TO",p);
}
function getHistory(){return JSON.parse(localStorage.getItem("H")||"[]");}
