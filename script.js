let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax(); //chain together multiple animations

/* first param is the element,duration,action */
// timeline.to(".text", 2, {x: 100})                 /*inorder to chain events add another .to()*/
// .to(".content-images",3,{opacity:0}, "-=2")      /* the fourth parameter is if you wan the events to happen at the same time */

timeline.to('.rock', 2.8, {y: -300})
.to('.girl', 3, {y: -200} ,'-=3')
.fromTo('.bg1', {y: -50}, {y: 0 , duration: 3}, '-=3')
.to('.content', 6 , {top: 0} , '-=3')
.fromTo('.content-images',{opacity: 0}, {opacity: 1, duration: 1}, '-=4')


let scene = new ScrollMagic.Scene({
    /* when to trigger animation */
    triggerElement: 'Section', 
    duration : '200%',
    /* at what section an the selected element 0= start and 1 = end */
    triggerHook: 0, 
})
    .setTween(timeline)
    .setPin('section')
    .addTo(controller);