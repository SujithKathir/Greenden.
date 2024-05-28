var menuicon = document.getElementById("menuicon")
var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("close-nav")


menuicon.addEventListener("click", function () {
  sidenav.style.right = 0
})


closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%"
})



//search functionality

var productcontainer = document.getElementById(" productcontainer")
var search = document.getElementById("search")





search.addEventListener("keyup", function () {

  var enteredValue = event.target.value.toUpperCase()


  for (count = 0; count < productlist.length; count = count + 1) {
    var productname = productlist[count].querySelectorAll("h1").textContent
    var productlist = productcontainer.querySelector("div") 
    
    if (productname.toUpperCase().indexOf(enteredValue) < 0) 
      {
      productlist[count].style.display = "none"
        }

    else {
      productlist[count].style.display = "block"
      console.log("hello")

          }
  }
})

