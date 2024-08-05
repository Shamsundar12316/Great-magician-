// question 42 // continue with question 41
var magician = ["Harry potter", "Hermione Granger", "Ron weasley", "Albus Dumbledore"];
function make_great(magicianArry) {
    for (var i = 0; i < magicianArry.length; i++) {
        magician[i] = "the great " + magicianArry[i];
    }
}
function show_magician(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);
