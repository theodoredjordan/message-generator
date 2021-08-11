const dictionary = {
    verbs : ['see', 'skip', 'run', 'fly'],
    adjectives : ['big', 'small', 'lazy', 'crazy'],
    nouns : ['tree', 'hotdog', 'mailbox', 'corn', 'yarn']
};

const randomizer = (max) => {
    return Math.floor(Math.random() * max);
}

let message = [];

for (prop in dictionary) {
    let indexLength = dictionary[prop].length;

    // switch to each prop and capture a string into an array
    switch (prop) {
        case 'verbs':
            message.push(`I believe I can "${dictionary[prop][randomizer(indexLength)]}".`)
            console.log(dictionary[prop][randomizer(4)])
            break

        case 'adjectives':
            message.push(`But, i am just too "${dictionary[prop][randomizer(indexLength)]}".`)
            break

        case 'nouns':
            message.push(`Because I am a  "${dictionary[prop][randomizer(indexLength)]}" .`)
            break
    }
};
console.log(message);   
message.forEach(element => console.log(element)) 