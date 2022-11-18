export function roll(numSides, numDice, numRolled) {

    // Store the results
    var output = [];

    // Roll the die
    for(let r = 0; r < numRolled; r++) {
        var sum = 0
        for (let n = 0; n < numDice; n++) {
            // Equation to roll the dice
            var roll = 1 + Math.floor(Math.random() * numSides);
            sum += roll;
        }
        // Put output in array
        output.push(sum)
    }

    // Create object to output results
    const rollOutput = {
        sides: numSides,
        dice: numDice,
        rolls: numRolled,
        results: output
    }

    return rollOutput
}