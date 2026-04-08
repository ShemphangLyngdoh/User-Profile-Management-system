// AUTO LOGIN
let savedUser = JSON.parse(localStorage.getItem("user"));
if(savedUser){
    showDash(savedUser);
}

// REGISTER
function register(){
    let name = document.getElementById("rName").value.trim();
    let email = document.getElementById("rEmail").value.trim();
    let pass = document.getElementById("rPass").value.trim();

    if(name === "" || email === "" || pass === ""){
        document.getElementById("msg").innerText = "Fill all fields";
        return;
    }

    let user = {name, email, pass};
    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("msg").innerText = "Registered Successfully";

    showDash(user); // 🔥 FIX
}

// LOGIN
function login(){
    let email = document.getElementById("lEmail").value.trim();
    let pass = document.getElementById("lPass").value.trim();

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if(savedUser && savedUser.email === email && savedUser.pass === pass){
        document.getElementById("msg").innerText = "Login Successful";
        showDash(savedUser);
    } else {
        document.getElementById("msg").innerText = "Invalid Email or Password";
    }
}

// SHOW DASHBOARD
function showDash(user){
    document.getElementById("auth").style.display = "none";
    document.getElementById("dash").style.display = "block";

    document.getElementById("welcome").innerText = "Welcome " + user.name;
    document.getElementById("data").innerText = user.email;
}

// UPDATE
function update(){
    let newName = document.getElementById("newName").value.trim();
    let savedUser = JSON.parse(localStorage.getItem("user"));

    if(newName === ""){
        document.getElementById("msg").innerText = "Enter new name";
        return;
    }

    savedUser.name = newName;
    localStorage.setItem("user", JSON.stringify(savedUser));

    document.getElementById("msg").innerText = "Profile Updated";
    showDash(savedUser);
}

// DELETE
function deleteUser(){
    if(confirm("Delete account?")){
        localStorage.removeItem("user");
        location.reload();
    }
}

// LOGOUT
function logout(){
    localStorage.removeItem("user");
    location.reload();
}