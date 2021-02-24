const registerSubmit= document.getElementById("register");
const signinSubmit= document.getElementById("signin");
const registerEmail=document.getElementById("signupInputEmail");
const registerName=document.getElementById("signupInputName");
const registerPassword=document.getElementById("signupInputPassword");
const signinEmail=document.getElementById("signinInputEmail");
const signinPassword=document.getElementById("signinInputPassword");
const auth= new Request();


// eventListeners();

// function eventListeners(){

//     registerSubmit.addEventListener("click",register)
//     signinSubmit.addEventListener("click",signin)
// }



registerSubmit.addEventListener("click",register);
signinSubmit.addEventListener("click",signin);




function register(e){
    let email= registerEmail.value.trim();
    let username= registerName.value.trim();
    let password =registerPassword.value.trim();
    // console.log(email, username,password);

if(email!="" && username!="" &&password!=""){
    const data =[email, username,password]
    auth.register(data)
    .then(res=> console.log(res.data))
    .catch(err=>console.log(err))
}else{
    alert("Lütfen eksik alanları doldurunuz")
}
    e.preventDefault();
}

function signin(e){
let email= signinEmail.value.trim();
let password=signinPassword.value.trim();
    // console.log(email,password)
    if(email!="" && password!=""){
        const data =[email,password]
        auth.signin(data)
        .then(res=> console.log(res.data))
        .catch(err=>console.log(err))
    }else{
        alert("Lütfen eksik alanları doldurunuz")
    }

    e.preventDefault();
       } 

