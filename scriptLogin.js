window.addEventListener("DOMContentLoaded", function(e){
    const form1 = document.getElementById("myform");
    const form2 = document.getElementById("myform1");

    if(form1){
        form1.addEventListener("submit" , function(e){
            e.preventDefault()
            let hasError = false

            let Fname = form1.elements["Fname"].value.trim();
            const errorFname = document.getElementById("errorFname");
            errorFname.textContent ="";

            let Lname = form1.elements["Lname"].value.trim();
            const errorLname = document.getElementById("errorLname");
            errorLname.textContent ="";

            let email = form1.elements["email"].value.trim();
            const errorEmail = document.getElementById("errorEmail");
            errorEmail.textContent ="";

            let number = form1.elements["number"].value.trim();
            const errorNumber = document.getElementById("errorNumber");
            errorNumber.textContent ="";

            let gender = form1.elements["gender"].value.trim();
            const errorGender = document.getElementById("errorGender");
            errorGender.textContent ="";

            let date = form1.elements["date"].value.trim();
            const errorDate = document.getElementById("errorDate");
            errorDate.textContent ="";


            if(Lname ===""){
               errorLname.textContent  = "نام خانوادگی را وارد کنید" ;
               hasError = true ;
            }
            if(Fname ===""){
               errorFname.textContent  = "نام را وارد کنید" ;
               hasError = true ;
            }
            if(email ===""){
               errorEmail.textContent  = "ادرس ایمیل را وارد کنید" ;
               hasError = true ;
            }
            if(number ===""){
               errorNumber.textContent  = "شماره تلفن را وارد کنید" ;
               hasError = true ;
            }
            if(gender===""){
               errorGender.textContent  = "جنسیت خود را وارد کنید" ;
               hasError = true ;
            }
            if(date ===""){
               errorDate.textContent  = "تاریخ تولد خود را وارد کنید" ;
               hasError = true ;
            }
            if (!hasError) {
                window.open("index2.html", "_blank");
                localStorage.setItem("formSubmitted", "true");
                form1.reset();
            }
            let user={
                "نام" : Fname ,
                "نام خانوداگی" : Lname ,
                "ادرس ایمیل" : email ,
                "شماره تلفن" : number ,
                "جنسیت" : gender ,
                "تاریخ تولد" : date ,
            };
            localStorage.setItem("اطلاعات کاربر" , JSON.stringify(user))
        });
    } 
    if(form2){
        form2.addEventListener("submit" , function(e){
            e.preventDefault();

            const Choose = document.querySelector('input[name="game"]:checked');
            let errorGame = document.getElementById("errorGame");
            errorGame.textContent = "";

            if(!Choose){
                errorGame.textContent = "لطفا یک بازی را انتخاب کنید";
                return;
            }
            if (Choose.value === "بازی جداسازی توپها") {
                window.open("Ball2 project/indexBall.html", "_blank");
            } 
            else if (Choose.value === "بازی مار") {
                window.open("snakeGame/indexSnake.html", "_blank");
            } 
        });
    }
});