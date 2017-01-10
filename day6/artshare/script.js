document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: 'http://art-share.herokuapp.com/api/v1/users/',
    data: {
      user: {
        fname: "Hey there, how are you?",
        lname: "I'm fine",
        password: "1234",
        email: "biebs@bieber.com"
      }
    },
    success: function (response) {

      console.log(response)
    }
  })


})
