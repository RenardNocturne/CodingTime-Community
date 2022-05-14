let data;

function pickRandomAvatar () {
    return `${data.members[Math.floor(Math.random() * data.members.length)].avatar_url}`;
}

fetch("https://canary.discord.com/api/guilds/825760704241991752/widget.json")
.then(resp => resp.json())
.then(r => {
    data = r
    document.getElementById("devs").innerHTML = `<strong>${r.members.filter(member => member.status === "dnd" || member.status === "online").length}</strong> développeurs & graphistes en ligne !`
    const avatars = [document.getElementById("avatar0"),  document.getElementById("avatar1"),  document.getElementById("avatar2"),  document.getElementById("avatar3"), document.getElementById("avatar4"), document.getElementById("avatar5"), document.getElementById("avatar6"), document.getElementById("avatar7")]
        
    for (i in avatars) {
        avatars[i].setAttribute("src", pickRandomAvatar());
    }
})

document.onanimationend = (e) => {
    if (!e.animationName === "bubbleUp" || e.target.id !== "trigger") return;
    const targets = document.getElementsByClassName("devs__avatars__container__avatars")
    const target = document.getElementById(e.target.id)
    const untrigger = document.getElementById("untrigger")
    const container = document.getElementById("container");
    
    //On reverse pour avoir l'impression de continuité
    container.classList.toggle("devs__avatars__container--reversed")

    // On change l'image des avatars qui sont cachés
    if (container.classList.contains("devs__avatars__container--reversed")) {
        for (let i = 0; i < target.children.length; i++) {
            if (target.children[i].children[0]?.id) {
                target.children[i].children[0].setAttribute("src", pickRandomAvatar()); 
                document.getElementById(target.children[i].children[0].id).style.width = randomNumberBetweenInts(35, 100) + "%";
            }
        }
    }  else {
        for (let i = 0; i < untrigger.children.length; i++) {
            if (untrigger.children[i].children[0]?.id){
                untrigger.children[i].children[0].setAttribute("src", pickRandomAvatar());
                document.getElementById(untrigger.children[i].children[0].id).style.width = randomNumberBetweenInts(35, 100) + "%";
            }  
        }
    }

    for (let i = 0; i < targets.length; i++) {
        targets[i].style.animation = null;
        setTimeout(() => {
            targets[i].style.animation = "bubbleUp 15s linear";
        }, 1)
    }
};