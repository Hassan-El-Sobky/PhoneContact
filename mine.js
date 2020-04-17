
var emailAlert=document.getElementById("emailAlert")
var phoneAlert=document.getElementById("phoneAlert")


var users;

if(localStorage.getItem("data")==null)
{
    users =[];
}
else
{
    users=JSON.parse(localStorage.getItem("data"));
    displayUsers();
}

function addUser()
{

    var userName=document.getElementById("userName").value;
    var userEmail=document.getElementById("userEmail").value;
    var userPhone=document.getElementById("userPhone").value;
    var user=
    {    name:userName,
        email:userEmail,
        phone:userPhone
    };
  
   users.push(user);
   
 localStorage.setItem("data",JSON.stringify(users));
 displayUsers();
       
}


function displayUsers()
{
    temp=''
    for(var i=0;i<users.length;i++)
    {
        temp +=`
        <tr>
         <td>`+users[i].name+`</td>
         <td>`+users[i].email+`</td>
         <td>`+users[i].phone+`</td>
         <td><button onclick="removeData(`+i+`)"><i class="fas fa-trash-alt"></i></button><td>
        </tr>
        `
    }
    document.getElementById("bodyData").innerHTML=temp
}


function removeData(index)
{
  var no=users.splice(index,1);
  localStorage.setItem("data",JSON.stringify(users))
  console.log(no);
  displayUsers();
}


function search(term)
{ 
    var temp=''
    for(var i=0 ;i<users.length;i++)
    {
           if(users[i].name.toLowerCase().includes(term.toLowerCase()))
           {
            temp +=`
            <tr>
             <td>`+users[i].name+`</td>
             <td>`+users[i].email+`</td>
             <td>`+users[i].phone+`</td>
             <td><button onclick="removeData(`+i+`)"><i class="fas fa-trash-alt"></i></button><td>
            </tr>
            `
           }
    }document.getElementById("bodyData").innerHTML=temp
}