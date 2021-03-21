function toggleNavbar(collapseID) {
      document.getElementById(collapseID).classList.toggle("hidden");
      document.getElementById(collapseID).classList.toggle("block");
    }
   
 AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
 })
    
// //  Email  input typewrite
// new TypeIt("#fn-element", {
//   strings: "Gautam Jain",
//   waitUntilVisible: true
// })
//     .go();

// document.querySelector("#fn-element").addEventListener("keypress", function () {
//     document.querySelector("#fn-element").innerHTML = ""
// })

// // e-mail typewrite
// new TypeIt("#em-element", {
//   strings: "astrogeeek77@gmail.com",
//   waitUntilVisible: true
// })
//     .go();

// // text-area typewrite
// new TypeIt("#msg-element", {
//   strings: "Its Nice to hear from you!",
//   waitUntilVisible: true
// })
//     .go();

