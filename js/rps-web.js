var app = angular.module('myApp', [])
app.controller('myCtrl', ['$scope', function($scope) {
// -----------------------
     var symbole = [
        {
            name: "Schere",
            image: "https://pixabay.com/static/uploads/photo/2012/04/01/19/28/icon-24188_960_720.png",
            beats: [ "Papier "],
            loses: [ "Stein" ]
        },
        {
            name: "Stein",
            image: "https://www.overclockers.at/files/stein-sw_98247.gif",
            beats: [ "Schere "],
            loses: [ "Papier" ]
        },
        {
            name: "Papier",
            image: "http://cdn.idealo.com/folder/Product/2710/8/2710889/s1_produktbild_mid/sigel-dp235-motiv-papier-a4-90g-qm-50-blatt-motiv-pergament.jpg",
            beats: [ "Stein "],
            loses: [ "Schere" ]
        }
     ];

    $scope.drueckerli = function(choosen) {
        $scope.meldung = ""
        $scope.symbol = symbole[Math.floor(Math.random() * symbole.length)];
        if ($scope.symbol.name ==choosen){
                $scope.meldung = "Unentschieden!"
        } else if ($scope.symbol.loses.indexOf(choosen) < 0) {
            $scope.meldung = "Verloren!";
        } else if ($scope.symbol.loses.indexOf(choosen) >= 0) {
            $scope.meldung = "Gewonnen!";
         }

    }

// -----------------------
}]);
