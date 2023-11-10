
let hisob =document.getElementById("hisoblash")

 hisob.onclick = function or35(){
    let son = document.getElementById("son").value;
    let par = document.getElementById("parag");
    if(son%3==0 || son%5==0){
      return par.innerHTML=true;
    }
    else{
      return par.innerHTML=false;
    }
}