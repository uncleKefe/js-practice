console.log('init')



 function popup() {

    
    let email = document.getElementById("mail").value;
    let passWord = document.getElementById("pass").value;

    
     let infoMail = ["kefe@gmail.com", "halimah@gmail.com", "maryann@gmail.com"];
     let infoPass = "123456"
    
 
    if (infoMail.includes(email)) {
       if (passWord === infoPass) {
          alert('Login Successful')
       }    else {
           alert('Wrong Password')
       }
        
    }else{
        alert("wrong email")
    }
}
