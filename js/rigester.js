$(".icon_search").click(function () { 
    $(".div_search").show();
     });
     $(".icon_close").click(function () { 
        $(".div_search").hide();
      });
      
      var $fullname = $("#fullname");
      var $email = $("#email");
      var $phone = $("#phone");

      function checkfullname(){ 
        if ($fullname.val().length > 2) {
          $("#fullname_alert").hide();
        }else{
          $("#fullname_alert").show();
        }
      }
      $fullname.focus(checkfullname).keyup(checkfullname);


      function checkphone() {
        if($phone.val().length >= 11 && $phone.val().length <= 11){
          $("#phone_alert").hide();
        }else{
          $("#phone_alert").show();
        }
      }
      $phone.focus(checkphone).keyup(checkphone);

      function checkemail(){
        if($email.val().includes("@gmail.com")){
          $("#email_alert").hide()
        }else{
          $("#email_alert").show()
        }
      }
      $email.focus(checkemail).keyup(checkemail);

      $(".input_rigester").click(function(e){
        e.preventDefault();

        if($fullname.val().length > 2 && $phone.val().length >= 11 && $phone.val().length <= 11 && $email.val().includes("@gmail.com") ){
          alert(" shoma sabt nam shodid"+"     "+"esm shoma :"+$fullname.val()+"     "+"shomare:"+$phone.val()+"     "+"email:"+$email.val());



          
        }else{
          $(".div_alert").fadeIn(200);

          setTimeout(function() {
            $(".div_alert").fadeOut(600);
          }, 3000);
      }
      });
