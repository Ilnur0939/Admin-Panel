let token = [
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrOTk4OTc3MTY5Njg2IiwiaWF0IjoxNjcxMDMyNTY3LCJleHAiOjE2NzYyMTY1NjcsInJvbGVzIjpbeyJpZCI6MSwibmFtZSI6IlJPTEVfQURNSU4iLCJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dfQ.s8cLMAWRumuvPxO8n3UursST5qRWRWrjVeQjeKnmmT4",
];
let swager = ["http://185.217.131.168:8080/swagger-ui.html#/"];
localStorage.setItem("tokenKey", token);
localStorage.setItem("swagerLink", swager);




let dataArr = []
// let arr = 

async function getData(data){
  const fetchData = await fetch(`http://185.217.131.168:8080/${data}`, {
    method: "GET",
    headers: new Headers({
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrOTk4OTc3MTY5Njg2IiwiaWF0IjoxNjcxMDMyNTY3LCJleHAiOjE2NzYyMTY1NjcsInJvbGVzIjpbeyJpZCI6MSwibmFtZSI6IlJPTEVfQURNSU4iLCJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dfQ.s8cLMAWRumuvPxO8n3UursST5qRWRWrjVeQjeKnmmT4",
    }),
  });
  const response = await fetchData.json();
  response.map((item) => {
    dataArr.push(item)
  });
  return await response;
};
getData("category");
// function reqTime(timeRequest){
  
  console.log(dataArr);
  // setTimeout(() => {
    
  // }, 200);
// } 


// reqTime(dataArr)

// getData("category");
// reqTime(dataArr)