/**
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * L&T quote generator
 */

var things = ["Music", "Art", "Dance", "Theater", "Math", "Architecture"];
var programmers = ["musician", "artist", "choreographer", "director", "mathematician", "architect"]
var castles = ["museums", "bridges", "cities"]
var exertions = ["effort", "strain", "struggle", "toil", "endeavor", "hard work", "labor"];
var airs = ["sky", "atmosphere", "heavens", "ether", "wind"];

function choosei(lst){
    var i = Math.floor(Math.random() * lst.length);
    return i;
}

function choose(lst){
    return lst[choosei(lst)];
}

var pick = choosei(things);
var thing = things[pick];
var programmer = programmers[pick];
var castles = choose(castles);
var exertion = choose(exertions);
var air = choose(airs);

var t = document.getElementById("thing").innerHTML = thing;
var p = document.getElementById("person").innerHTML = programmer + "s";
var q = document.getElementById("quote").innerHTML =
    "\"The " + programmer + ", like the poet, works only slightly removed from pure thought-stuff. He builds his " + castles + " in the " + air + ", from " + air + ", creating by " + exertion + " of the imagination.\"" + "\u2014" +  "Fred Brooks, " + programmer;

