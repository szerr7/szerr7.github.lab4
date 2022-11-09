


window.onload = function(){

          const register = document.getElementById("all") ;

          register.onsubmit = function(event){

                    event.preventDefault() ;

                    const emailId = document.getElementById("emailAdd") ;


                    const pass = document.getElementById("pass") ;

                    const urlLink= document.getElementById("url") ;

                    const markCheck= document.getElementById("check") ;


                    const mainEmial = emailId.value ;

                    const passMain = pass.value ;

                    const urlLinkMain = urlLink.value ;

                    const checkMain = markCheck.value ; 



                    console.log(`Email is  :${mainEmial}`)
                    console.log(`password is  :${passMain}`)
                    console.log(`URL website is   :${urlLinkMain}`)
                    console.log(`check Box checked   :${checkMain}`)





                    document.getElementById("emailId").innerText =`Email is  :${mainEmial}` ;

                    document.getElementById("thePass").innerText = `password is  :${passMain}` ;

                    document.getElementById("link").innerText = `URL website is   :${urlLinkMain}` ;

                    document.getElementById("checkbox").innerText =  `check Box checked   :${checkMain}` ;





                    emailId.value ="" ;

                    pass.value="" ;

                    urlLink.value ="";

                    markCheck.value="" ; 
                    







          }

                    
}















/**
 * function myfun(){
          var email = document.getElementById('emailAdd').value ;
          var pass = document.getElementById('pass').value ; 

          var mark = document.getElementById('check').value ;

          var myUrl  = document.getElementById('url').value ; 
          
          
          console.log('email : ' + email)  ;
          console.log('password  : ' + pass)  ;
          console.log('Your URL : ' + myUrl) ; 
          console.log('checkiedBox : ' + mark) ;
          
          alert("email : " +  email + '\n' + 'password : ' + pass+ '\n' + 'MyUrl : ' + myUrl
           + '\n' + 'checkedBox : ' +  mark 
          ) ;
}



 */
