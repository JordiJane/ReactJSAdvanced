//Funció que sempre dona el mateix resultat no canvia variables externes
function sumaPura(a, b){
    return a +b;
}

//El resultat es diferent i canvia una variable externa
function sumaImpura(a, b){
    return a + b + Math.random();
}

let b = 2
function sumaImpura2 (a) {
    b = a + b;
    return b;
}


