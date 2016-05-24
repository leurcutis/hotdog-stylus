angular
  .module('HotDogStylusApp')
  .controller('GarmentsController', GarmentsController);

DoubleDoubleController.$inject = ['$http'];

function GarmentsController($http){
 var self = this;
 self.all = [];
 self.addGarment = addGarment;
 self.newGarment = {};
 self.deleteGarment = deleteGarment;

  function getGarments() {
    $http
      .get('http://localhost:3000/api/garments')
      .then(function(response) {
        console.log(response);
        self.all = response.data;
      });
  }

  getGarments();

  // show one garment

  // function showGarment() {
  //   $http
  //     .get('http://localhost:3000/api/garments/' + garment._id)
  //     .then(function(response) {
  //       console.log(response);
  //       self.all = response.data;
  //     });
  // }

  function addGarment() {
    $http
      .post('http://localhost:3000/api/garments', self.newGarment)
      .then(function(response) {
        console.log('add garment running');
        getGarments();
      });
  }

  // add code for update garment here

  function deleteGarment(garment) {
    $http
      .delete('http://localhost:3000/api/garments/' + garment._id)
      .then(function(response) {
        console.log(response);
        var index = self.all.indexOf(garment);
        self.all.splice(index, 1);
      });
  }

}
