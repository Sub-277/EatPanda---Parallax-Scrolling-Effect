let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.food',3,{y:-300})
.fromTo('.bg1',3,{y:-50},{y:0,duration:3},'-=3')
.to('.content',3,{top:'0%'},'-=3')


let scene =  new ScrollMagic.Scene({
    triggerElment: "section",
    duration: "150%",
    triggerHook: 1,
})

.setTween(timeline)
.setPin("section")
.addTo(controller);