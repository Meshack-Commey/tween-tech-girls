
function clubs() {
    var club;

    club.document.getElementById('club-icon');
    club.innerHTML="&clubs;";

    setTimeout(function() {
        club.innerHTML="&hearts;";
    }, 500);

    setTimeout(function() {
        club.innerHTML="&spades;";
    }, 1000);

    setTimeout(function() {
        club.innerHTML="&diams;";
    }, 1500);
}

clubs()
setInterval(clubs, 2000);