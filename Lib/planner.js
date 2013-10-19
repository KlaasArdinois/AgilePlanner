function plan(velocities, sprints, cycles) {
    var resultSet = new Array();
    for(i = 0; i < cycles; i++) {

    	var totalPoints = 0;
        for(j = 0; j < sprints; j++) {
             var index = math.randomInt(0,velocities.length-1);
             totalPoints += velocities[index];         
        }
   
        if(typeof resultSet[totalPoints] === 'undefined') {
            resultSet[totalPoints] = 0;
        }
        resultSet[totalPoints]++;
	}

    for(i = 0; i < resultSet.length; i++) {
        if(typeof resultSet[i] === 'undefined') {
            resultSet[i] = 0;
        }
    }
    return resultSet;
}


