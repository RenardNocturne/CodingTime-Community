let data;

function pickRandomAvatar () {
    return `${data.members[Math.floor(Math.random() * data.members.length)].avatar_url}`;
}

fetch("https://canary.discord.com/api/guilds/825760704241991752/widget.json")
.then(resp => resp.json())
.then(r => {
    data = r
    document.getElementById("devs").innerHTML = `<strong>${r.members.filter(member => member.status === "dnd" || member.status === "online").length}</strong> développeurs & graphistes en ligne !`
    const avatars = [document.getElementById("avatar0"),  document.getElementById("avatar1"),  document.getElementById("avatar2"),  document.getElementById("avatar3")]
        
    for (i in avatars) {
        avatars[i].setAttribute("src", pickRandomAvatar());
    }
})

document.onanimationend = (e) => {
    const target = document.getElementById(e.target.id);
    target.style.animation = null
    setTimeout(() => {
        target.style.animation = `${e.animationName} 10s ease`;
    }, 10)
    target.setAttribute("src", pickRandomAvatar());
};