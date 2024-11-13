function starting_animation() {
    var h4count = document.querySelector("#counter h4");

//DOM//
var count = 0
setInterval(function(){
    if(count<100){
       h4count.innerHTML = count++
    }
    else{
        h4count.innerHTML = count
    }
    
},25) 
//gsap//
var tl = gsap.timeline()

tl.from(".line h1",{
    y:150,
    stagger:0.2,
    opacity:0,
    duration:0.6,
    delay:0.2,
}) 
tl.from(".line h2",{
    opacity:0,
    duration:0.5, 
})

tl.to('#loader',{
    opacity:0,
    duration:0.2,
    delay:2,
})  
tl.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:0,
    duration:0.1,
})
tl.to("#loader",{
    display: "none",
})
tl.from("#page1 .hero h1, .hero h2",{
    y:150,
    opacity:0,
    stagger:0.2,
})

}

starting_animation();
function cursor_animation() {
    document.addEventListener("mousemove",function (dets) {
        gsap.to("#cursor",{
         left:dets.x,
         top:dets.y,
        })
         
     })
     
     Shery.makeMagnet("#main_nav h4");
}
cursor_animation()
