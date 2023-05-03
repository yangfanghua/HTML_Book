const btn=document.querySelector("#button");
const t1=document.querySelector("#text1");
const t2=document.querySelector("#text2");
const t3=document.querySelector("#text3");
const r1=document.querySelector("#radio1");
const r2=document.querySelector("#radio2");
const form=document.querySelector("#form1");
const windows=document.querySelector("#windows");




btn.addEventListener("click",function(){
  
  let body={
    "booklist": [
        {
            "person":form.value,
            "isbn": t1.value,
            "name": t2.value,
            "writer": t3.value
        }
    ]
};

  fetch("http://localhost:8080/book_Search",{
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
      //抓資料不成功 錯誤 就會進cath
      console.log(error);
    });

    function fn(){
       
      }

        
        
        
       
       
    


})