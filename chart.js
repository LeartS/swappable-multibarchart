angular.module('chart', ['nvd3'])
    .controller('chartController', function($scope) {

        /* Transform the data in a format handy for d3 */
        $scope.rawData = _.reduce(
            _.map(d, function(series) {
                return {
                    key: series.key,
                    values: _.zip.apply(_, series.values),
                };
            }),
            function(memo, series) {
                return memo.concat(
                    _.map(
                        series.values,
                        function(value) {
                            return {
                                'timestamp': value[0],
                                'impressions': value[1],
                                'entity': series.key
                            };
                        }
                    )
                );
        }, []);

        /* Chart options */
        $scope.options = {
            "chart": {
                "type": "multiBarChart",
                "height": 450,
                "width": 1200,
                "margin": {
                    "top": 20,
                    "right": 20,
                    "bottom": 80,
                    "left": 80,
                },
                "clipEdge": true,
                "transitionDuration": 200,
                "stacked": false,
                "y": function(d) { return d.impressions; },
                "xAxis": {
                    "axisLabel": "Time (ms)",
                    "orient": "bottom",
                    "tickFormat": function(d) { return dateFormatter(d); },
                    "rotateLabels": -45,
                    "staggerLabels": false,
                },
                "yAxis": {
                    "axisLabel": "Impressions",
                    "orient": "left",
                    "tickFormat": function(d) { return numberFormatter(d); },
                },
                "delay": 100,
                "groupSpacing": 0.3,
                "showControls": false,
                "showLegend": true,
                "reduceXTicks": true,
                "tooltips": true,
                "state": {
                    "stacked": false,
                    "disabled": [false, false, false]
                },
                "noData": "No Data Available."
            },
        };

        var numberFormatter = d3.format(',.2s');
        var dateFormatter = d3.time.format('%e %b');
        xAccessorEntity = function(d) { return d.entity; };
        xAccessorDate = function(d) { return new Date(d.timestamp); };

        this.state = 'entity-as-series';

        this.swapSeriesAndXAxis = function() {
            if (this.state === 'entity-as-series') {
                this.state = 'date-as-series';
                $scope.options.chart.x = xAccessorEntity;
                $scope.options.chart.xAxis.axisLabel = "Entity";
                $scope.options.chart.xAxis.tickFormat = null;
                $scope.options.chart.xAxis.rotateLabels = 0;
                $scope.data = d3.nest()
                    .key(function(d) {
                        return dateFormatter(new Date(d.timestamp));
                    }).entries($scope.rawData);
            } else {
                this.state = 'entity-as-series';
                $scope.options.chart.x = xAccessorDate;
                $scope.options.chart.xAxis.axisLabel = "Date";
                $scope.options.chart.xAxis.tickFormat = function(d) {
                    return dateFormatter(d);
                };
                $scope.options.chart.xAxis.rotateLabels = -45;
                $scope.data = d3.nest()
                    .key(function(d) {
                        return d.entity;
                    }).entries($scope.rawData);
            }
            console.log($scope.options);

        };
        this.swapSeriesAndXAxis();

        console.log($scope.options);

    })
