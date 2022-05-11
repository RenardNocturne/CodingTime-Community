console.log("Script loaded !");

function randomNumberBetweenInts (min, max) {
    return Math.random() * (max - min + 1) + min;
}

window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
    
    console.log(accessToken);
    if (!accessToken) {
        return document.getElementById('userAccountBox').style.display = "none";
    } else {
        document.getElementById("loginContainer").style.display = "none"
    }

    fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`,
        },
    })
    .then(result => result.json())
    .then(response => {
        const { username, discriminator, id, avatar } = response;
        document.getElementById('title').style.transform = "translateX(125px)"; 
        document.getElementById("userAccountImg").setAttribute("src", `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`)       
    })
    .catch(console.error);
};

let button = document.getElementById("loginBox");

button.addEventListener('mousemove', (e) => {
    x = e.offsetX;
    y = e.offsetY;
    button.style.setProperty('--mouse-x', x + "px");
    button.style.setProperty('--mouse-y', y + "px");
});

const progress = document.getElementById('progressBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressWidth = (window.pageYOffset / totalHeight) * 100;
    progress.style.width = progressWidth + '%';
}