//Create an object to store possible outputs for each category of the fortune
const messageComponents = {
    occupations: ['nurse', 'engineer', 'teacher', 'architect', 'accountant', 'mechanic', 'pharmacist', 'aerospace engineer', 'electrician', 'firefighter', 'police officer', 'bartender', 'waiter', 'cashier', 'technician', 'agricultural engineer', 'farmer', 'barber', 'software engineer', 'doctor', 'lawyer', 'CEO of a major company', 'carpenter'],
    city: ['Boston, MA', 'New York, NY', 'Los Angeles, CA', 'Washington, D.C.', 'San Francisco, CA', 'Chicago, IL', 'Austin, TX', 'Seattle, WA', 'Houston, TX', 'San Jose, CA', 'San Antonio, TX', 'Denver, CO', 'Philadelphia, PA', 'San Diego, CA', 'Atlanta, GA', 'Phoenix, AZ', 'Dallas, TX', 'Detroit, MI', 'Nashville, TN', 'Baltimore, MD', 'Portland, OR'],
    residenceType: ['apartment', 'condo', 'house', 'mansion', 'duplex', 'mobile home', 'cottage', 'hotel'],
    cars: ['Honda Civic', 'Chevy Impala', 'Ford Mustang', 'Ford Fusion', 'Chevy Malibu', 'Subaru Forester', 'Subaru Outback', 'Ford F-150', 'Honda Accord', 'Tesla Model S', 'Lexus sedan', 'Mercedes sedan', 'BMW sedan', 'Range Rover', 'Dodge Challenger'],
    dogs: ['Samoyed', 'Golden Retriever', 'German Shephard', 'Chow Chow', 'French Bulldog', 'Pug', 'Australian Shephard', 'Shitzu', 'Corgi', 'rescue puppy']
}

//Function to generate a random number between 0 and "num"
//Input will be length of array
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

//Returns an array that contains the selected strings from messageComponents
function pickMessageComponents() {
    let randVals = [];
    for (const [subj, array] of Object.entries(messageComponents)) {
        randVals.push(array[generateRandomNumber(array.length)]);
    }
    return randVals;
}

//Returns a random fortune for the user in paragraph form
function fortuneGenerator() {
    const messagePieces = pickMessageComponents();
    const s1 = `In 10 years, you will be living in a ${messagePieces[2]} in ${messagePieces[1]} as a ${messagePieces[0]}. `;
    const s2 = `A few years prior, you decided to treat yourself and upgrade to a brand new ${messagePieces[3]}. `;
    const s3 = `Little did you know, the best part of your life would come the following year when you added a ${messagePieces[4]} to the family. `;
    const s4 = 'Seems like you\'re going to turn out ok!';
    return s1 + s2 + s3 + s4;
}

console.log(fortuneGenerator());