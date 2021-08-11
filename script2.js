// Establish a dictionary for the generator to pull from
const dictionary = {
    verbs : ['see', 'skip', 'run', 'fly'],
    adjectives : ['big', 'small', 'lazy', 'crazy'],
    nouns : ['tree', 'hotdog', 'mailbox', 'corn', 'yarn']
};

// Create a function to generate a random index for each array in the dictionary
const randomizer = (max) => {
    return Math.floor(Math.random() * max);
}

// push random indexes into the canned messages
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

//console.log(message);   

// Display the messages that were generated
message.forEach(element => console.log(element)) 
