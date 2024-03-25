console.log('js-snacks-objects')


// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// Crea un nuovo array con la lista dei mammiferi.
// [
//   { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
//   { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
//   { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
// ]


// creo Array di animali
console.log('JSNACK 3')
const animals = [
    {
        nome:       'leone',
        famiglia:   'felini',
        classe:     'mammiferi',
    },
    {
        nome:       'coniglio',
        famiglia:   'roditore',
        classe:     'mammiferi',
    },
    {
        nome:       'gallina',
        famiglia:   'uccelli',
        classe:     'ovipari',
    },
    {
        nome:       'volpe',
        famiglia:   'canidi',
        classe:     'mammiferi',
    },
]

console.log(animals)
console.log('JSNACK 4') 

// Crea un array di oggetti che rappresentano delle persone.
const persone = [

    // Ogni persona ha un nome, un cognome e un’età.
    {
        nome:       'giulio',
        cognome:    'rossi',
        eta:        '33'
    },
    {
        nome:       'maria',
        cognome:    'pia',
        eta:        '50'
    },
    {
        nome:       'enrico',
        cognome:    'papini',
        eta:        '16'
    },
    {
        nome:       'marika',
        cognome:    'paoli',
        eta:        '12'
    },
]
console.log(persone)

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
// nome e cognome e l’indicazione se può guidare, in base all’età.

//Creo array vuoto
const canDrive = []
console.log(canDrive)

//Creo un ciclo for per il controllo
for (let i = 0; i < persone.length; i++) {
    const persona = persone[i];
    console.log(persona);
    
    // SE età >= a 18 anni
    if (persona.eta >= 18) {
        // ALLORA Può guidare
        canDrive.push(persona.nome + ' ' + persona.cognome + ' può guidare');

    // ALTRIMENTI
    } else {
        // NON può guidare
        canDrive.push(persona.nome + ' ' + persona.cognome + ' non può guidare');
    }
  }