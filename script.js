//var MainSection = document.getElementById("MainSection")

function WingOpenFunc(){
    var element=document.getElementById("Wing-Open-ID");
    element.classList.toggle("wing-open");

    console.log ("Rodou: WingOpenFunc")
}

function WingOpenFunc2(){
    var element=document.getElementById("Wing-Open-Friends-ID");
    element.classList.toggle("wing-open-friends");

    console.log ("Rodou: WingOpenFunc2")
}

function GoToJoinFriends(){
    MainSection.classList.add("friends-main");
    MainSection.classList.remove("download-main");

    console.log ("Rodou: GoToJoinFriends()")
}

function GoToDownloads(){
    var element = document.getElementById("MainSection")
    element.classList.toggle("friends-main");
    element.classList.toggle("download-main");

    console.log ("Rodou: GoToDownloads()")
}


