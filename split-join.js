const lyrics = 'Pagol mon , mon re , mon keno atto kotha bole, ami bake amr monta bake, aaj o parlam na amar mon ke bujhaite'

const sentences = lyrics.split(' ');
const chars = lyrics.split('');
// console.log(chars);

const partial = lyrics.slice(5, 10);
const partial2 = lyrics.substring(5, 10);
// console.log(partial);
// console.log(partial2);

const greeting = ' Hello World! ';
const trimLine = greeting.trim();
// console.log(trimLine);


const lines = [
    'Pagol mon , mon re , mon keno atto kotha bole, ami bake amr monta bake, aaj o parlam na amar mon ke bujhaite'
];

const newSong = lines.join('. ')
console.log(newSong);