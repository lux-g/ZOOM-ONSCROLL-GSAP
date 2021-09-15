import { gsap, ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger); 

const images = gsap.utils.toArray('.section-two img');
const imageWrappers = gsap.utils.toArray('.img-wrapper');

images.forEach(item => {
    gsap.to(item, { duration: 1.8, scale: 1, ease: "power4.out", scrollTrigger: {
        trigger: ".img-wrapper"
    }})
});
imageWrappers.forEach(item => {
    gsap.from(item, { duration: 1.8, y: 150, ease: "power4.out", scrollTrigger: {
        trigger: ".img-wrapper"
    }})
})
gsap.to(".section-three img", {  duration: 1.8, scale: 1, ease: "power4.easeIn-out", scrollTrigger: {
    trigger: ".section-three"
}})

