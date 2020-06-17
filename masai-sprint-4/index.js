
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


function paymentPage(){
    location.href='payment.html'
}


    

function paymentLogs(){ 
    submitCredit();
    submitExpense();
    showBalance();
}


    // var total=[]
    // var totalexpense=[]

    function submitCredit()
    {
        var total=[]
    
        var sum1=0
        var credAmount=document.getElementById("credit").value
        var credType=document.getElementById("creditType").value
        var credDate=document.getElementById("creditDate").value
        var test = credDate.toString()
        var para1=document.createElement('li')
        var para2=document.createElement('li')
        para1.textContent=test+' ' +credType
        para2.textContent=credAmount
        total.push(para2.innerHTML)
        var credit1=document.getElementById("CreditHeadBox2")
        var credit2=document.getElementById("amountCredBox2")
        credit1.appendChild(para1)
        credit2.appendChild(para2)
        for(i=0;i<total.length;i++)
        {
            sum1+=parseInt(total[i])
        }
        
        document.getElementById("totalCreditBox2").innerHTML=sum1
    
    }
    function submitExpense()
    {
        
        var totalexpense=[] 
        var sum2=0
        var credAmount=document.getElementById("debit").value
        var credType=document.getElementById("expenseType").value
        var credDate=document.getElementById("expenseDate").value
        var test = credDate.toString()
        var para1=document.createElement('li')
        var para2=document.createElement('li')
        para1.textContent=test+' ' +credType
        para2.textContent=credAmount
        totalexpense.push(para2.innerHTML)
        var credit1=document.getElementById("DebitHeadBox2")
        var credit2=document.getElementById("amountDebitBox2")
        credit1.appendChild(para1)
        credit2.appendChild(para2)
        for(i=0;i<totalexpense.length;i++)
        {
            sum2+=parseInt(totalexpense[i])
        }
        
        document.getElementById("totalDebitBox2").innerHTML=sum2
    
    }
    function showBalance()
    {
        var total=[]
        var totalexpense=[]
        var sum1=0
        var sum2=0
        var totalBalance=0
        for(i=0;i<total.length;i++)
        {
            sum1+=parseInt(total[i])
        }
        for(j=0;j<totalexpense.length;j++)
        {
            sum2+=parseInt(totalexpense[j])
        }
    
        totalBalance=parseInt(sum1)-parseInt(sum2)
        document.getElementById("result").innerHTML=totalBalance
        if(totalBalance<2000)
        {
            document.querySelector(".balanceShow").style.backgroundColor="red"
        }
        
    
    
    }
    