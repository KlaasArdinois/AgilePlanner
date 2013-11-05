function run(velocities, sprints) { 
    var resultSet = plan(velocities, sprints, 1000000);
    var frequency = createFrequencyMap(resultSet);
    return frequency;
}

function plan(velocities, sprints, cycles) {
    var resultSet = new Array();
    
    for(var i = 0; i < cycles; i++) {
    	var totalPoints = 0;
        for(var j = 0; j < sprints; j++) {
             var index = Math.floor(Math.random()*velocities.length);
             totalPoints += velocities[index];         
        }
        resultSet[i] = totalPoints;
    }
    
    return resultSet;
}

function mean(input) {
    var sum = 0;
    
    for(i = 0; i < input.length; i++) {
        sum += input[i] * i;
    }
    
    return sum/input.length;
}

function standardDev(input) {
    var m = mean(input);
    var squaredDifSum = 0;
    
    for(i = 0; i < input.length; i++) {
        squaredDifSum += Math.pow((input[i] - m), 2);
    }
    
    return Math.sqrt(squaredDifSum/input.length);
}

function createFrequencyMap(inputArray) {
    var resultSet = new Array();

    for(var i = 0; i < inputArray.length; i++) {
        if(typeof resultSet[inputArray[i]] === 'undefined') {
            resultSet[inputArray[i]] = 1;
        } else {
            resultSet[inputArray[i]]++;
        }
    }

    for(var i = 0; i < resultSet.length; i++) {
        if(typeof resultSet[i] === 'undefined') {
            resultSet[i] = 0;
        }
    }
    
    return resultSet;
}

function chopLeadingZeros(inputArray) {
    var offset = 0;
    leadingZero = true;
    if(inputArray[0] != 0) {
        leadingZero = false;
    }
    resultSet = new Array();

    var i = 0
    while(inputArray[i] == 0) {
        i++;
    }
    
    offset = i;
    for(i; i < inputArray.length; i++) {
        resultSet.push(inputArray[i]);
    }
    return { offset: offset, resultSet: resultSet};
}


