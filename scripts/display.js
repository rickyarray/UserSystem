function displayUsers(userArray){
    console.log(userArray);
    const TBODY = $("#usersTable tbody"); // Add the "#" symbol to select by ID
    for(let i=0;i<userArray.length;i++){
    let user = userArray[i];
    let tr = `
    <tr> 
        <td>${user.email}</td>
        <td>${user.fName + " " + user.lName}</td> 
        <td>${user.age}</td>
        <td>${user.g1}</td>
        <td>${user.g2}</td>
        <td>${user.g3}</td>
        <td>${user.getGPA}</td> 
    </tr>
    `;
    TBODY.append(tr);
    }
}

function init() {
    let userList = readUsers();
    displayUsers(userList);
}

window.onload = init;
