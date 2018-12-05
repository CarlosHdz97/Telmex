function checkPasswordMatch() {
    var password = $("#txtNewPassword").val();
    var inputPassword = document.getElementById("txtConfirmPassword");
    var confirmPassword = $("#txtConfirmPassword").val();

    if(confirmPassword.length>=8){
      if (password != confirmPassword){
        $("#divCheckPasswordMatch").html("Las contraseñas no coinciden");
        inputPassword.setCustomValidity("Las contraseñas no coinciden");
      }
      else{
        $("#divCheckPasswordMatch").html("ok");
        inputPassword.setCustomValidity("");
      }
    }else{
      $("#divCheckPasswordMatch").html("Las contraseña debe tener 8 caracteres como mínimo");
      inputPassword.setCustomValidity("8 caracteres como mínimo");
    }
}
