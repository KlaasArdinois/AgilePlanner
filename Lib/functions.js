function showHide(show, hide) {
    $('#'+hide).css({'visiblity' : 'hidden', 'position':'absolute', 'top':'-100000000','left':'-100000000'});
    $('#'+show).css({'visibility' : 'visible', 'position':'relative', 'top':'0','left':'0'});
    return show;
}

function checkRunChart() {
    var input = false;
    if(input = checkInput()) {
        var sprints = input.sprints;
        var velocities = input.velocities;

        var frequency = run(velocities, sprints);
        var resultSet = chopLeadingZeros(frequency);
        var chart = getChart(resultSet.resultSet, resultSet.offset); 
        $('#chartResult').highcharts(chart);
        var seriesMean = mean(frequency);
        var seriesSD = standardDev(frequency);



        $('#mean').html('<h2 class="resultNumber">'+ seriesMean.toFixed(2) +'</h2><p class="resultNumber">50%</p>');
        $('#-3sigmaResult').html('<h2 class="resultNumber">'+ (seriesMean - 3 * seriesSD).toFixed(2)+'</h2><p class="resultNumber">99.87%</p>');
        $('#-2sigmaResult').html('<h2 class="resultNumber">'+ (seriesMean - 2 * seriesSD).toFixed(2)+'</h2><p class="resultNumber">97.72%</p>');
        $('#-1sigmaResult').html('<h2 class="resultNumber">'+ (seriesMean - seriesSD).toFixed(2)+'</h2><p class="resultNumber">84.14</p>');
        $('#1sigmaResult').html('<h2 class="resultNumber">'+ (seriesMean + seriesSD).toFixed(2)+'</h2><p class="resultNumber">15.87%</p>');
        $('#2sigmaResult').html('<h2 class="resultNumber">'+ (seriesMean + 2 * seriesSD).toFixed(2)+'</h2><p class="resultNumber">2.28%</p>');
        $('#3sigmaResult').html('<h2 class="resultNumber">'+ (seriesMean + 3 * seriesSD).toFixed(2)+'</h2><p class="resultNumber">0.13%</p>');
    }
}

function checkInput() {
    resultObj = false;
    allgood = true;
    
    if($('#sprintsAhead').val() == "" || $('#inputVelocities').val() == "") {
        allgood = false;
        $('#validform').html('Please fill both fields ...');
    }

    if(allgood) {
        $('#validform').html('');
        resultObj = {
            sprints:  parseInt($('#sprintsAhead').val()),
            velocities: $('#inputVelocities').val().split(',').map(function(x){return parseFloat(x);}),
            passed : allgood

        }
    }
    return resultObj;
}

