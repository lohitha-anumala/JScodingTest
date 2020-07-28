// 'use strict';
let btn = document.getElementById('btnsubmit')
let email = document.getElementById('email').value
let emaiformat = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$;
if(email!=null)
{
    if(email.value.match(emailformat)){
        return true;
    }else{
        div.innerHTML = 'Email is not valid'
    }
}
function validateform(){  
    var name=document.form-group.name.value;  
    var password=document.form-group.password.value;  
    var confirmpassword=document.form-group.password.value
    
      
    let pass = document.getElementById('pass').value
    let cpass = document.getElementById('cpass').value
     if(pass==null || pass.length<7){
        
        document.getElementById('e-pass').innerHTML='Password must be atleast 6 characters';
    }
    if(cpass!=pass || cpass==null){
        document.getElementById('e_c').innerHTML='confrimed password  is required';
    }
    else if (cpass!=pass)
        {
            document.getElementById('e_c').innerHTML='Password not matched with confirmed password';          
         }