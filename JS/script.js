console.table('JS OK')


/*
 *SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto. 
*/

// Lista di invitati 
let guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
console.table(guests)

//Funzione per creare il segnaposto
const createPlaceCard = (guest, i) => placeCard.push({ tableName: 'Tavolo Vip', guetsName: guest, place: i + 1 })


//Creo un array vuoto per il segnaposto di ciaascun invitato
const placeCard = []
//per ognuno dei inivitati creo un assegnaposto
guests.forEach(createPlaceCard)

//stampo in console la ista dei segna posti
console.table(placeCard)



/* ************************************************* */



/* 
*SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84
 */

//lista dati degli studenti 

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78

    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
];
console.table(students)

/* Creo una nuova lista basata su quella precedente, 
prendendo soltanto i nomi degli studenti e li metto in maiuscolo */
const upperCaseName = students.map(student => student.name);

//stampo in console la lista dei nomi
console.table(upperCaseName)

//creo una lista di studenti filtrando i loro voti, i quali sono maggiori di 70
const over70Grades = students.filter(student => student.grades > 70);

//stampo in console la lista degli studenti con voto superiore ai 70
console.table(over70Grades)

//creo una lista di studenti filtrando i loro voti, i quali sono maggiori di 70 e id superiore ai 70
const otherStudentData = over70Grades.filter(student => student.id > 120);

//stampo in console la lista degli studenti con voto superiore ai 70 e id superiore ai 120
console.table(otherStudentData)



/******************************************** */


/* 

*SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

*/

//*creo un array oggetti con le propeirta richieste 
const bikes = [
    {
        name: 'Santa Cruz Stigmata',
        weight: `${17} Kg`
    },
    {
        name: 'Cervélo R5-CX',
        weight: `${11} Kg`
    },
    {
        name: 'Specialized Crux',
        weight: `${23} Kg`
    },
    {
        name: 'Trek Boone 6',
        weight: `${8} Kg`
    },
    {
        name: 'Giant TCX Advanced',
        weight: `${14} Kg`
    }
]



/********************************************************** */



/* 

*SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/
//* Creo una funzione che generera dei nr ramdon
const getRandomNum = (min, max) => result = Math.floor(Math.random() * (max + 1 - min)) + min;

//* Creo un array di una lista con i nomi delle squadre di calcio

const footballClubs = ['Bayern Munich', 'Barcelona', 'Real Madrid', 'Manchester City', 'Paris-Saint-Germain'];

//* creo un array di oggetti bassandomi sulla lista  di nomi delle squadre di calcio e aggiungo le propietà richieste
const footballTable = footballClubs.map(team => ({ teamName: team, points: getRandomNum('', 10), fouls: getRandomNum('', 20) }));
//*stampo in console
console.table(footballTable)

//* creo un array di oggetti bassandomi sulla lista footballClubs prendendo soltanto le propietà: teamNames e fouls
const footballClubsFouls = footballTable.map(({ teamName, fouls }) => ({ teamName, fouls }))
//*stampo in console
console.table(footballClubsFouls)


