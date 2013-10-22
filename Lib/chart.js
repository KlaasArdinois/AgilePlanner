function getChart(frequency) { 
        return {
            title: {
            text: 'Frequency of velocity'
        },
        xAxis: {
            title: {
                text: 'Frequency'
            }
        },
        yAxis: {
            title: {
                text: 'Velocity'
            }
        },
        series:[{
            name:'Frequency of Velocity',
            data: frequency
        }],
    };
}
