// question 42 // continue with question 41

let magician: string[] = ["Harry potter","Hermione Granger","Ron weasley","Albus Dumbledore"];

function make_great(magicianArry:string[]){
    for(let i=0; i<magicianArry.length; i++){

     magician[i] =  "the great " + magicianArry[i]
    }
}



function show_magician(magician: string[]){
 
    magician.forEach(element => { 
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);