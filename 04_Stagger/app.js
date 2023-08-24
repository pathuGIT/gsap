gsap.to(".box", {
    duration: 1,
    rotation: 360,
    opacity: 1, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "sine.out", 
    force3D: true
  });

  let boxArr = document.querySelectorAll(".box")
  boxArr.forEach(function(box){
    box.addEventListener("click",
    function(){
        gsap.to(".box", {
            duration: 0.5, 
            opacity: 0, 
            y: -100, 
            stagger: 0.1,
            ease: "back.in"
            }); 
    });
  });
