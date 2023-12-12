$(".icon_search").click(function () { 
    $(".div_search").show();
     });
     $(".icon_close").click(function () { 
        $(".div_search").hide();
      });

      var $email = $("#email");
      var $password = $("#password");
      
   function email() { 
    if($email.val().includes("@gmail.com")){
        $("#email_alert").hide();
    }else{
      $("#email_alert").show();
    }
    }
    $email.focus(email).keyup(email);
    function password() { 
      if($password.val().length>6){
          $("#password_alert").hide();
      }else{
        $("#password_alert").show();
      }
      }
      $password.focus(password).keyup(password);

      
      $(".input_submit").click(function(e){
        e.preventDefault();
        
        if($email.val().includes("@gmail.com") && $password.val().length>6){
          alert("شما با موفقیت وارد اکانت خود شدید");
        }else{
          $("#all_alert").show();
        }
      });
      