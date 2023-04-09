// Icon feater
feather.replace();

// Nav Scroll ga berfungsi 
window.addEventListener('scroll', function() {
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('bg-white/80', window.scrollY > 0);
})

// Hamburger Toggle
// const hamburger = document.querySelector('#hamburger');

// hamburger.addEventListener('click', function () {
//     hamburger.classList.toggle('hamburger-active');
// });

// Auto typed
var typed = new Typed('.auto-type', {
    // strings : ['UI/UX Design', 'Front End', 'Product Management'],
    strings : ['UI/UX Design', 'Product Management'],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
});
