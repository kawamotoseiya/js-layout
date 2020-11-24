document.addEventListener('DOMContentLoaded', function () {
    const ta = new TextAnimation('.animate-title');
    ta.animate();
});

const els = document.querySelectorAll('.animate-title')
const cb = (entries, observer)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const ta = new TextAnimation(entry.target);
            ta.animate();
            observer.unobserve(entry.target)
        }else{

        }
    });

}
const options = {
    root: null,
    rootMargin: "0px",
};
const io = new IntersectionObserver(cb, options);
els.forEach(el => io.observe(el));
