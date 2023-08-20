gsap.to('.circle',{
    keyframes:{
        "0%": {yPercent: 0, scaleX:1, scaleY:1},
        "7%": {yPercent: 5, scaleX:1.1, scaleY:1.18, ease: "sine.in"},
        "25%": {yPercent: 100, ease: "sine.in"},
        "50%": {yPercent: 600, ease: "sine.in"},
        "80%": {yPercent: 600, ease: "sine.in"},
        "85%": {scaleX:1.2, scaleY:0.6, ease: "none"},
        "95%": {yPercent: 600, scaleX:1, scaleY:1,},
        "100%": {yPercent:0, scaleX:1, scaleY:1,},
        easeEach: "sine.out"
    },
    duration: 1,
    repeat: -1,
    transformOrigin: "center bottom"
});