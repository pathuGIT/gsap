gsap.to(".box",{
    scale:0.2,
    x:2,
    duration:2,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    delay: 1,
    stagger: {
        amount: 2, 
        grid: "auto",
        from: "center"
    }
});