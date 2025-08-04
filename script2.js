const passbox = document.getElementById("pass")
const length =12;
const uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowercase = "QWERTYUIOPASDFGHJKLZXCVBNM".toLowerCase()
const nums = "0123456789"
const spic = "~!@#$%^&*()_+=-/<>[]{}"
const allchr = uppercase + lowercase +spic +nums;
function createpassword(){
    let password ="";
    password += uppercase[Math.floor(Math.random()*uppercase.length)]
    password += lowercase[Math.floor(Math.random()*lowercase.length)]
    password += nums[Math.floor(Math.random()*nums.length)]
    password += spic[Math.floor(Math.random()*spic.length)]
    while(password.length < length){
    password += allchr[Math.floor(Math.random()*allchr.length)]
    }
    passbox.value = password;
    savepass()
}

//
// let =document.getElementById("")
function copypass(){
    passbox.select();
    document.execCommand("copy")//search
}
function savepass(){
    localStorage.setItem("data",passbox.value)
}
function showpass(){
    passbox.value = localStorage.getItem("data")
}
showpass()
