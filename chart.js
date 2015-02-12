angular.module('chart', ['nvd3'])
    .controller('chartController', function($scope) {

        /* Chart data */
        $scope.data = _.map(d, function(series) {
            return {
                key: series.key,
                values: _.map(
                    _.zip.apply(_, series.values),
                    function(point) {
                        return {x: new Date(point[0]), y: point[1]};
                    }
                )
            };
        });

        this.swapSeriesAndXAxis = function() {
            
        };
        var numberFormatter = d3.format(',.2s');
        console.log($scope.data);
        /* Chart options */
        $scope.options = {
            "chart": {
                "type": "multiBarChart",
                "height": 450,
                "width": 1000,
                "margin": {
                    "top": 20,
                    "right": 20,
                    "bottom": 60,
                    "left": 60
                },
                "clipEdge": true,
                "staggerLabels": true,
                "transitionDuration": 300,
                "stacked": false,
                "valueFormat": function(d) { return d.dasdsad.fasf89(); },
                "xAxis": {
                    "axisLabel": "Time (ms)",
                    // "showMaxMin": false,
                    "orient": "bottom",
                    "tickFormat": function(d) { return d.getDay(); },
                    // "tickValues": null,
                    // "tickSubdivide": 0,
                    // "tickSize": 6,
                    // "tickPadding": 7,
                    // "domain": d3.extent($scope.data[2].values, function(d) { return d[0]; }),
                    // "range": d3.extent($scope.data[2].values, function(d) { return d[0]; }),
                    // "margin": {
                    //     "top": 0,
                    //     "right": 0,
                    //     "bottom": 0,
                    //     "left": 0
                    // },
                    // "width": 75,
                    // "ticks": null,
                    // "height": 60,
                    // "highlightZero": true,
                    // "rotateYLabel": true,
                    "rotateLabels": -45,
                    "staggerLabels": true,
                    // "axisLabelDistance": 12
                },
                "yAxis": {
                    "axisLabel": "Impressions",
                    "axisLabelDistance": 40,
                    "orient": "left",
                    "tickFormat": function(d) { return numberFormatter(d); },
                    // "tickValues": null,
                    // "tickSubdivide": 0,
                    // "tickSize": 6,
                    // "tickPadding": 3,
                    "domain": [0, 1],
                    "range": [0, 1],
                    // "margin": {
                    //     "top": 0,
                    //     "right": 0,
                    //     "bottom": 0,
                    //     "left": 2000
                    // },
                    // "width": 705,
                    // "ticks": null,
                    // "height": 60,
                    // "showMaxMin": true,
                    // "highlightZero": true,
                    // "rotateYLabel": true,
                    // "rotateLabels": 0,
                    // "staggerLabels": false
                },
                // "dispatch": {},
                // "multibar": {
                //     "dispatch": {},
                //     "margin": {
                //         "top": 0,
                //         "right": 0,
                //         "bottom": 0,
                //         "left": 0
                //     },
                //     "width": 960,
                //     "height": 500,
                //     "forceY": [
                //         0
                //     ],
                //     "stacked": false,
                //     "stackOffset": "zero",
                //     "clipEdge": true,
                //     "barColor": null,
                //     "id": 4896,
                //     "hideable": false,
                //     "delay": 1200,
                //     "groupSpacing": 0.1
                // },
                // "legend": {
                //     "dispatch": {},
                //     "margin": {
                //         "top": 5,
                //         "right": 0,
                //         "bottom": 5,
                //         "left": 0
                //     },
                //     "width": 400,
                //     "height": 20,
                //     "align": true,
                //     "rightAlign": true,
                //     "updateState": true,
                //     "radioButtonMode": false
                // },
                "forceY": [0],
                "id": 4896,
                "stackOffset": "zero",
                "delay": 200,
                "barColor": null,
                "groupSpacing": 0.3,
                "showControls": false,
                "showLegend": true,
                "showXAxis": true,
                "showYAxis": true,
                "rightAlignYAxis": false,
                "reduceXTicks": true,
                "rotateLabels": 0,
                "tooltips": true,
                "state": {
                    "stacked": false,
                    "disabled": [false, false, false]
                },
                "defaultState": null,
                "noData": "No Data Available."
            },
            // "title": {
            //     "enable": false,
            //     "text": "Write Your Title",
            //     "class": "h4",
            //     "css": {
            //         "width": "nullpx",
            //         "textAlign": "center"
            //     }
            // },
            // "subtitle": {
            //     "enable": false,
            //     "text": "Write Your Subtitle",
            //     "css": {
            //         "width": "nullpx",
            //         "textAlign": "center"
            //     }
            // },
            // "caption": {
            //     "enable": false,
            //     "text": "Figure 1. Write Your Caption text.",
            //     "css": {
            //         "width": "nullpx",
            //         "textAlign": "center"
            //     }
            // },
            // "styles": {
            //     "classes": {
            //         "with-3d-shadow": true,
            //         "with-transitions": true,
            //         "gallery": false
            //     },
            //     "css": {}
            // }
        };

        console.log($scope.options);

    })
