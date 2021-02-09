//Create an object to store possible outputs for each category of the fortune
const messageComponents = {
    occupations: ['nurse', 'engineer', 'teacher'],
    city: ['Boston, MA', 'New York, NY', 'Los Angeles, CA'],
    residenceType: ['apartment', 'condo', 'house'],
    cars: ['Honda', 'Chevy', 'Ford'],
    dogs: ['Samoyed', 'Golden Retriever', 'German Shepard']
}

//Function to generate a random number between 0 and "num"
//Input will be length of array
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

function pickMessageComponents() {
    let randVals = [];
    for (const [subj, array] of Object.entries(messageComponents)) {
        randVals.push(array[generateRandomNumber(array.length)]);
    }
    return randVals;
}

function fortuneGenerator() {
    const messagePieces = pickMessageComponents();
    const s1 = `In 10 years, you will be living in a ${messagePieces[2]} in ${messagePieces[1]} as a ${messagePieces[0]}. `;
    const s2 = `A few years prior, you decided to treat yourself and upgrade to a brand new ${messagePieces[3]}. `;
    const s3 = `Little did you know, the best part of your life would come the following year when you added a ${messagePieces[4]} to the family. `;
    const s4 = 'Seems like you\'re going to turn out ok!';
    return s1 + s2 + s3 + s4;
}

console.log(fortuneGenerator());