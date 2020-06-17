var users=[ 
    {
        name: "Ram Singh",
        username:"ram",
        password:"ram@123"
    },
    {
        name: "Shyam Singh",
        username:"shyam",
        password:"shyam@123"
    },
    {
        name: "Tom Cruise",
        username:"tom",
        password:"tom@123"
    },
]

var sessionTime = 5000   // 1 minute

function check_passwords(event){
    event.preventDefault()
    data = window.localStorage.getItem("logs")
    parseData = JSON.parse(data)
    var username=document.getElementById('username').value
    var password=document.getElementById('password').value
    var flag=false
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var arr = []
    console.log(name,password)
    for(var i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            var obj={}
            obj["username"] = users[i].username
            obj["login_time"] = time
            obj["name"] = users[i].name
            arr.push(obj)
            if(parseData){
                parseData.push(arr)
                window.localStorage.setItem("logs",JSON.stringify(parseData)) 
            }
            else{
                window.localStorage.setItem("logs",JSON.stringify(arr))    
            }
            
            flag=true;
            break;
        }
    }
    if(flag){
        location.href='dash.html' 
    }else{
        alert('incorrect user details')
    }
   
}
  
    var btn=document.getElementById('submit')
    btn.addEventListener('click',check_passwords)


function logout(){
    location.href='index.html' 
}

// function sessionLogout(){
//     var countDownTime = new Date().getTime() + sessionTime;
//     var x = setInterval(function() {
//     var now = new Date().getTime();    
//     var remainingTime = countDownTime - now;
//     var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
//     document.getElementById("demo").innerHTML =  minutes + "m " + seconds + "s ";
    
//   if (remainingTime < 0) {
//     clearInterval(x);
//     logout()
//   }
// }, 1000);
    
// }

function adminPage(){
    location.href='admin.html' 
}

function userLogs(){
    var data = window.localStorage.getItem("logs")
    var parseData = JSON.parse(data)
    if(parseData.length > 1){
        var bodyElem = document.querySelector('body');
        for ( var i = 1; i < parseData.length; i++){
            var div1 = document.createElement('div');
            div1.textContent = parseData[i][0].name;
            var div2 = document.createElement('div');
            div2.textContent = parseData[i][0].login_time;
            var div3 = document.createElement('div');
            div3.appendChild(div1)
            div3.appendChild(div2)
            bodyElem.appendChild(div3);
        }
    }
    
}