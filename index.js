const joinLobbyBtn = document.getElementById("joining-lobby-btn")
let joinLobbyAudio = new Audio ("Joining-Lobby.mp3")
const roleRevealBtn = document.getElementById("role-reveal-btn")
let roleRevealAudio = new Audio ("Role-Reveal.mp3")

const reportBodyBtn = document.getElementById("report-body-btn")
let reportBodyAudio = new Audio ("Report-Body.mp3")
const emergencyBtn = document.getElementById("emergency-btn")
let emergencyAudio = new Audio ("Emergency-Button.mp3")

const voteBtn = document.getElementById("vote-btn")
let voteAudio = new Audio ("Vote.mp3")
const votedOutBtn = document.getElementById("voted-out-btn")
let votedOutAudio = new Audio ("Voted-Out.mp3")

const crewmateWinBtn = document.getElementById("crewmate-win-btn")
let crewmateWinAudio = new Audio ("Crewmate-Win.mp3")
const imposterWinBtn = document.getElementById("imposter-win-btn")
let imposterWinAudio = new Audio ("Imposter-Win.mp3")

const crisisBtn = document.getElementById("crisis-btn")
let crisisAudio = new Audio ("Crisis.mp3")
const twoHoursLaterBtn = document.getElementById("two-hours-later-btn")
let twoHoursLaterAudio = new Audio ("Spongebob-Two-Hours-Later.mp3")
// console.log(votedOutBtn)

joinLobbyBtn.addEventListener("click", function(){
    joinLobbyAudio.play()
})

roleRevealBtn.addEventListener("click", function(){
    roleRevealAudio.play()
})

reportBodyBtn.addEventListener("click", function(){
    reportBodyAudio.play()
})

emergencyBtn.addEventListener("click", function(){
    emergencyAudio.play()
})

voteBtn.addEventListener("click", function(){
    voteAudio.play()
})

votedOutBtn.addEventListener("click", function(){
    votedOutAudio.play()
})

crewmateWinBtn.addEventListener("click", function(){
    crewmateWinAudio.play()
})

imposterWinBtn.addEventListener("click", function(){
    imposterWinAudio.play()
})


crisisBtn.addEventListener("click", function(){
    crisisAudio.play()
})


twoHoursLaterBtn.addEventListener("click", function(){
    twoHoursLaterAudio.play()
})
