var app = angular.module('googleApp')

app.controller('mapControl', ['$scope', function($scope) {

  $scope.map = {
    center: {
      latitude: 51.219053,
      longitude: 4.404418
    },
    zoom: 14
  };
  $scope.options = {
    scrollwheel: false
  };

  $scope.myMarkers = [];

  $scope.addMarker = function($event, $params) {
    $scope.myMarkers.push(new google.maps.Marker({
      map: $scope.myMap,
      position: $params[0].latLng
    }));
  };

  $scope.openMarkerInfo = function(marker) {
    $scope.currentMarker = marker;
    $scope.currentMarkerLat = marker.getPosition().lat();
    $scope.currentMarkerLng = marker.getPosition().lng();
    $scope.myInfoWindow.open($scope.myMap, marker);
  };

  $scope.setMarkerPosition = function(marker, lat, lng) {
    marker.setPosition(new google.maps.LatLng(lat, lng));
  };

}]);
