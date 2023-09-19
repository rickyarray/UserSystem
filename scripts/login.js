function login(){
    console.log("login");
    let usersArray= readUsers();

    //1) get the values from the inputs on HTML
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let flag;
    //2) travel the array *** for loop
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];
    }
    //3) compare if the email == email on LS AND password --- password on the LS
    if(inputEmail===user.email && inputPassword ===user.password){
         // redirect the user to the users.html
        console.log("I found it");
        window.location="users.html";
        flag=true;
    }
    else{
        console.log("Invalid credentials");
        flag=false;
        //else display invalid credentials
    }

    if(flag==false){
        alert("Invalid credentials");
    }
}

function init(){
    //hook event
    $("#btnLogin").click(login);
}

window.onload=init;