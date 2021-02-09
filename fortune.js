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
        randVals.push(generateRandomNumber(array.length));
    }
    return randVals;
}