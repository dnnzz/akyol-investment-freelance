$(document).ready(function () {
  (function(){
    // language detection
    //console.log(navigator.languages)
    if(window.location.href.includes('utm')){
      window.sessionStorage.setItem('utm',window.location.href.split("?")[1].split("&").join(","));
    }
    emailjs.init("oSJriUzaRK6SyLi-7");
  })();

  $(".form-btn").off("click");
  $(".form-btn").on("click", function (e) {
	 e.preventDefault();
    e.stopPropagation();
    $("#form-page").fadeIn(700);
    $(".hidden").removeClass("hidden");
  });

  $(".close-button").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#form-page").fadeOut(700);
    $(".form-page").addClass("hidden");
  });

  $("#modal-close").on("click",function(){
    $.magnificPopup.close();
    return false;
  })

  $("#page-form-cta").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#form-page").fadeIn(700);
    $(".hidden").removeClass("hidden");
  });

  $(".page-submit-btn").on("mousedown touchstart", function (e) {
    const formParams = {
      from_name: $("#quick-contact-form-name").val(),
      name: $("#quick-contact-form-name").val(),
      surname: $("#quick-contact-form-surname").val(),
      email: $("#quick-contact-form-email").val(),
      phone: `${$('#quick-contact-form-phone').val()} , UTM :  ${window.sessionStorage.getItem('utm') ? window.sessionStorage.getItem('utm') : 'no-utm'}`,
      reply_to: "info@akyolinvestment.com",
    };
    emailjs.send("service_1cjewgc","template_68teftd",formParams)
    .then(function(response) {
      console.log(response);
   }, function(error) {
      alert("Error !",error);
   });
   setTimeout(() => {
    $(".trigger").trigger("click");
    }, 1000);
  });

  $(".submit-btn").on('click',() => {
    const formParams = {
      from_name: $("#firstName").val(),
      name: $("#firstName").val(),
      surname: $("#lastName").val(),
      email: $("#email").val(),
      phone: `${$('#phone').val()} , UTM :  ${window.sessionStorage.getItem('utm') ? window.sessionStorage.getItem('utm') : 'no-utm'}`,
      reply_to: "info@akyolinvestment.com",
    };
    emailjs.send("service_1cjewgc","template_68teftd",formParams)
    .then(function(response) {
      $(".close-button").trigger('click');
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      alert("Error !");
      console.log('FAILED...', error);
   });
   setTimeout(() => {
    $(".trigger").trigger("click");
    }, 1000);
  })
});
