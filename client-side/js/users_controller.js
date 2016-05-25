angular
  .module('HotDogStylusApp')
  .controller('UsersController', UsersController);

UsersController.$inject = ['$http'];

function UsersController($http){
 var self = this;
 self.all = [];
 self.addUser = addUser;
 self.newUser = {};
 self.deleteUser = deleteUser;
 self.showUser = showUser;

  function getUsers() {
    $http
      .get('http://localhost:3000/api/users')
      .then(function(response) {
        console.log(response);
        self.all = response.data;
    });
  }

  getUsers();

  function showUser() {
    $http
      .get('http://localhost:3000/api/users/' + user._id)
      .then(function(response) {
        console.log(response);
        self.all = response.data;
    });
  }

  function addUser() {
    $http
      .post('http://localhost:3000/api/users', self.newUser)
      .then(function(response) {
        console.log('add user running');
        getUsers();
    });
  }

  // add code for update user here

  function deleteUser(user) {
    $http
      .delete('http://localhost:3000/api/users/' + user._id)
      .then(function(response) {
        console.log(response);
        var index = self.all.indexOf(user);
        self.all.splice(index, 1);
    });
  }
}
