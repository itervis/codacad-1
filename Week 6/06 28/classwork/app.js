// Sukurkite objektą su raktais Mantas, Paulius, Mindaugas ir reikšmėm 200, 300, 300.

let obj = {
    Mantas: 200,
    Paulius: 300,
    Mindaugas: 300
};
// Parodykite eilutes tokiu formatu: Mantas - 200 EU atlyginimas.
for( const [key, value] of Object.entries(obj)){
    console.log(`${key}- ${value} EU atlyginimas`)
}
