var express = require("express")
var app = express()

app.set('view engine', 'ejs')
app.set('views','./views')

var data = {
   groceries: [{
    store: 'Acme',
    list: [
        'strawberries',
        'blueberries',
        'yogurt'
    ]
   }, {
    store: 'Corner Market',
    list: [
        'baguette',
        'basil',
        'tomatoes'
    ]
   }]
}
app.get('/', function(request, response){
  response.render("list", {
     groceries: [{
      store: 'Acme',
      list: [
          'strawberries',
          'blueberries',
          'yogurt'
      ]
     }, {
      store: 'Corner Market',
      list: [
          'baguette',
          'basil',
          'tomatoes'
      ]
     }]
  })
})




app.listen(3000, function(){
  console.log("Your app is live on port 3000")
})
