const progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressWidth = (window.pageYOffset / totalHeight) * 100;
    progress.style.width = progressWidth + '%';
}