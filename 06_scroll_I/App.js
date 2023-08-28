gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".b",
        toggleActions: "restart pause reverse none",
        start: "top center",
        markers: true,
        scrub:true,
        // pin:".ghost"
        pin: true
    }
})

tl.to(".b",{
    x:400,
    rotation:360,
    duration:3,
    ease: "none",
    backgroundColor: "purple",
})


// .to(".b",{
//     duration: 1,
// })

// .to(".b",{
//     x:0,
//     duration: 3,
// })