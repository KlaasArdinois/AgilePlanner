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
        sum += input[i];
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
