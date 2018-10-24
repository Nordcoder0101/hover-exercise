$(document).ready(()=>{
  $('.hand').hover(
    function(){
    $(this).attr({src: "palm.jpeg"})
  },
    function(){
      $(this).attr({src: "tophand.jpeg"})
    }
  )
  $('.shoe').hover(
    function () {
      $(this).attr({ src: "tied.jpeg" })
    },
    function () {
      $(this).attr({ src: "untied.jpeg" })
    }
  )
  $('.rick').hover(
    function () {
      $(this).attr({ src: "burp.png" })
    },
    function () {
      $(this).attr({ src: "rick.png" })
    }
  )
  $('.catepillar').hover(
    function () {
      $(this).attr({ src: "butterfly.jpeg" })
    },
    function () {
      $(this).attr({ src: "catepillar.jpeg" })
    }
  )
})  