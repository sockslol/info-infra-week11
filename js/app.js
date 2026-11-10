const typeChart = {
  fire: { strongAgainst: ["grass"], weakAgainst: ["water"] },
  water: { strongAgainst: ["fire"], weakAgainst: ["electric"] },
  electric: { strongAgainst: ["water"], weakAgainst: ["grass"] },
  grass: { strongAgainst: ["electric"], weakAgainst: ["fire"] }
};

const attackEle = document.getElementById("attackingSelect")
const defendEle = document.getElementById("defendingSelect")
const text = document.getElementById("effectText")

loadTypes()

function loadTypes(){
    for(const key in typeChart){
       const ele = document.createElement("option")
        ele.setAttribute("value", key)
        ele.innerHTML = key
        attackEle.appendChild(ele)
    }

    for(const key in typeChart){
        const ele = document.createElement("option")
        ele.setAttribute("value", key)
        ele.innerHTML = key
        defendEle.appendChild(ele)
    }
}

document.getElementById("checkTypes").addEventListener("click", function(event){
    checkTypes(attackEle.value, defendEle.value)
})


function checkTypes(a, d){
    if (typeChart[a].strongAgainst.includes(d)) {
        text.innerHTML = "Super Effective!";
    } 
    else if (typeChart[a].weakAgainst.includes(d)) {
        text.innerHTML = "Not Very Effective...";
    } 
    else {
        text.innerHTML = "Effective";
    }
}

