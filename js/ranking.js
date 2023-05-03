const btn=document.querySelector("#button");
const t1=document.querySelector("#text1");
const t2=document.querySelector("#text2");
const t3=document.querySelector("#text3");
const t4=document.querySelector("#text4");
const ref=document.querySelector("#ref");



btn.addEventListener("click",function(){
    let arr=[];
    let body={};
  
    fetch("http://localhost:8080/ranking",{
      method:"POST",
      headers: {
          "Content-Type":"application/json" //資料格式是json
      },
      body:JSON.stringify(body) //把js物件轉成json格式
  })
      .then(function (response) {
        //從json格式轉回js物件
        return response.json();
      })
      .then(function (data) {
        //我們在做事的地方
        console.log(data);
        arr = data;
       
        fn();
        
      })
      .catch(function (error) {
        //抓資料不成功 錯誤 就會進cath
        console.log(error);
      });
  
  
      function fn(){
        
        // for(let i=0;i<arr.length;i++){
            
                
        let text="";
        // }
        arr.forEach(function(i,ind){
            // console.log(i.name);
            // t1.append(`書名：${i.name}`+`，作者：${i.writer}`);
            // t1.append(document.createElement("br"))
            text += `書名：${i.name}`+`，作者：${i.writer}`+`<br>`
            let br=document.createElement("br");
        })
        t1.innerHTML = text;


    }
  
  
  })