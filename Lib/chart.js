function getChart(frequency, offset) { 
        return {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Frequency of velocity'
            },
            xAxis: {
                title: {
                    text: 'Frequency'
                },
                labels: {
                    formatter: function() { return this.value;}
                }
            },
            yAxis: {
                title: {
                    text: 'Velocity'
                }
            },
            plotOptions: {
                line: {
                    pointStart: offset
                }
            
            },      
            series:[{
                name:'Frequency of Velocity',
                data: frequency
            }]
        };
}
