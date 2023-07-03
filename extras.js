let div = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');
div2.style.position = 'absolute';
div2.style.display = 'flex';
div2.style.justifyContent = 'center';
div2.style.alignItems = 'center';
div2.style.mixBlendMode = 'difference';
div2.style.left = '-100vw';
div2.style.top = '-100vw';
div.style.position = 'absolute';
div.style.width = '10vw';
div.style.height = '10vw';
div.style.background = 'white';
div.style.borderRadius = '100vw';
div.style.zIndex = '255';
div3.style.position = 'absolute';
div3.style.width = '0vw';
div3.style.height = '0vw';
div3.style.background = 'black';
div2.style.mixBlendMode = 'difference';
div3.style.borderRadius = '100vw';
div3.style.zIndex = '256';
div.id = 'follower';
div2.id = 'weeeee';
div3.id = 'wooooo';
div.style.pointerEvents = 'none';
div2.style.pointerEvents = 'none';
div3.style.pointerEvents = 'none';
div2.append(div);
div2.append(div3);

let timeout = 2000;
window.onload = function(){
    document.body.append(div2);
    document.body.addEventListener('mousemove', (e)=>{
        if(!document.querySelector('input#js').checked){
            document.querySelector('#weeeee').style.left = `-100vw`;
            document.querySelector('#weeeee').style.top = `-100vw`;
            return;
        };
        document.querySelector('#weeeee').style.left = `${e.pageX}px`;
        document.querySelector('#weeeee').style.top = `${e.pageY}px`;
    });
    document.body.addEventListener('click', (e)=>{
        if(!document.querySelector('input#js').checked) return;
        document.querySelector('#follower').style.animation = `zoomIn ${timeout}ms ease-in-out`;
        document.querySelector('#wooooo').style.animation = `zoomOut ${timeout}ms ease-in-out`;
        setTimeout(()=>{
            document.querySelector('#follower').style.animation = '';
            document.querySelector('#wooooo').style.animation = '';
        },timeout)
    });
}