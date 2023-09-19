const KEY = "users";

function saveUser(user){
    let userList = readUsers();
    userLists.push(user);
    let val = JSON.stringify(userList);//parse obj into string
    localStorage.setItem(KEY,val);//send the string to the Local Storage
}


function readUsers(){
    let users = localStorage.getItem(KEY);
    if(!users){
        return [];
    }else{
        let data = JSON.parse(users);// parse the string back into obj
        console.log(data);
        return data;
    }
}