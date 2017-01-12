(function () {
    'use strict';

    angular.module('angularColorPicker', [])
        .directive('colorPicker', ['$compile', '$timeout', '$http', function ($compile, $timeout, $http) {
            return {
                restrict: 'A',
                replace: true,
                require: 'ngModel',
                scope: {color: '@', dropup: '@'},
                templateUrl: '/static/bower_components/angular-color-picker/src/templates/color-picker.html',
                link: function ($scope, element, attrs, ngModel) {
                    $scope.init = function () {
                        $scope.color = ngModel.$viewValue;

                        $scope.$watch('color', function () {
                            ngModel.$setViewValue($scope.color);
                        });
                    };

                    element.bind('hidden.bs.dropdown', function () {
                        if (!/#[a-f0-9]{6}/i.test($scope.color)) {
                            $scope.color = '#FFFFFF';
                        }
                    });

                    ngModel.$render = $scope.init;
                },
                controller: function ($scope, $element) {
                    $scope.colors = ["000000", "993300", "333300", "000080", "333399", "333333", "800000", "FF6600", "808000", "008000", "008080", "0000FF", "666699", "808080", "FF0000", "FF9900", "99CC00", "339966", "33CCCC", "3366FF", "800080", "999999", "FF00FF", "FFCC00", "FFFF00", "00FF00", "00FFFF", "00CCFF", "993366", "C0C0C0", "FF99CC", "FFCC99", "FFFF99", "CCFFFF", "99CCFF", "FFFFFF"];

                    $scope.setColor = function (c) {
                        $scope.color = '#' + c;
                    };
                }
            };
        }]);
})();