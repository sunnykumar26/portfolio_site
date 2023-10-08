
const toggle = document.getElementById("toggleDark");
const r = document.querySelector(":root");
const section = document.querySelectorAll("section");
const header = document.getElementById("split");

// toggle.addEventListener("click",function() {
//     this.classList.toggle("bi-lightbulb-off");
//     if(this.classList.toggle("bi-lightbulb-fill")) {

//         r.style.setProperty("--background", "white");
//         r.style.setProperty("--textColor", "black");
//         section.forEach((s)=> {
//             s.style.transition = "2s";
//         })
//         this.innerText = "Dark Mode"

//     }
//     else {

//         r.style.setProperty("--background", "black");
//         r.style.setProperty("--textColor", "white");
//         section.forEach((s)=> {
//             s.style.transition = "2s";
//         })

//         this.innerText = "Light Mode"
//     }
// })


gsap.registerPlugin(ScrollTrigger);

let myText = new SplitType("#split");
gsap.set(".char", {
    // x:"100vw",
    y:"100vh",
})

gsap.to(".char", {
    x:"0vw",
    y:"0vh",
    stagger: 0.03,
    delay: 0.1,
    duration: 1,
    ease: "power",

})


gsap.set(".p", {
    // y:"40vh",    
    x:"20vw",
    duration: 0.5,
})

gsap.to(".p", {
    // y:"0vh",
    x:"0vw",
    stagger: 0.05,
    delay: 0.1,
    duration: 1,
    ease: "power",

        scrollTrigger:{
        trigger: ".p",
        start:"top 80%",
        end:"top 50%",
        scrub: 2,
        toggleActions: "restart none none none",   
        
    }
})


gsap.set(".c", {
    y:"20vh",
    // x:"-20vw",
    duration: 0.5,
})

gsap.to(".c", {
    y:"0vh",
    // x:"0vw",
    stagger: 0.5,
    delay: 0.1,
    duration: 1,
    ease: "power",

        scrollTrigger:{
        trigger: ".c",
        start:"top 80%",
        end:"top 20%",
        scrub: 2,
        toggleActions: "restart none none none",
        
    }
})


gsap.set(".s", {
    y:"20vh",
    x:"-20vw",
    opacity:0,
    duration: 1.5,
})

gsap.to(".s", {
    y:"0vh",
    x:"0vw",
    opacity:1,
    duration: 0.5,
    ease: "power",

        scrollTrigger:{
        trigger: ".s",
        start:"top 90%",
        end:"top 50%",
        scrub: 2,
        toggleActions: "restart none none none",   
    }
})


gsap.set("#images", {
    y:"0vh",
    x:"-50vw",
    opacity:0,
    duration: 1.5,
})

gsap.to("#images", {
    y:"0vh",
    x:"0vw",
    opacity:1,
    // stagger: 0.2,
    duration: 0.5,
    ease: "power",

        scrollTrigger:{
        trigger: "#images",
        start:"top 90%",
        end:"top 50%",
        scrub: 2,
        toggleActions: "restart none none none",   
    }
})



