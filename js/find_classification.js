const btn=document.querySelector("#button");
const t1=document.querySelector("#text1");
const windows=document.querySelector("#windows");




btn.addEventListener("click",function(){
  let arr=[]
  let woeds=t1.value.split(',');
  

  
  let body={
    "findclassification": woeds
  };

  fetch("http://localhost:8080/find_classification",{
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
       console.log(arr);
       fn()
       t1.value=null;
       
    })
    .catch(function (error) {
      console.log(error);
    });

    function fn(){
        let right=arr.responselist;
        let error=arr.errobooklistResponse;
        for(let i=0;i<right.length;i++){
          windows.append(`ID:${right[i].isbn}`)
          windows.append(document.createElement("br"))
          windows.append(`書名:${right[i].name}`)
          windows.append(document.createElement("br"))
          windows.append(`作者:${right[i].writer}`)
          windows.append(document.createElement("br"))
          windows.append(`價格:${right[i].price}`) 
          windows.append(document.createElement("br"))         
            windows.append(`銷售量:${right[i].stock}`)
            windows.append(document.createElement("br"))
            windows.append(document.createElement("hr"))
            console.log(windows);
           
        }
        for(let i=0;i<error.length;i++){
          windows.append(`查無結果:${error[i].classification}`)
          windows.append(document.createElement("br"))
          windows.append(`類別:${error[i].message}`)
          windows.append(document.createElement("br"))
          
          windows.append(document.createElement("br"))
          windows.append(document.createElement("hr"))
          console.log(windows);
         
      }

        
        
        
       
       
    }


})