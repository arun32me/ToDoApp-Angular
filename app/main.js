const app = angular.module('ToDoApp', []);

app.controller('ToDoController', function($scope) {
	$scope.f = '';
	$scope.bg = true;
	let save = function() {
		localStorage.setItem('todoApp-angular', JSON.stringify($scope.toDoList));
	}
	if(localStorage.getItem('todoApp-angular') != null) {
		$scope.toDoList = JSON.parse(localStorage.getItem('todoApp-angular'));
	} else {
		$scope.toDoList = [];
	}
	$scope.addToDoItem = function() {
		if($scope.toDoItem != '') {
			$scope.toDoList.push({
				value: $scope.toDoItem,
				status: false
			});
			$scope.toDoItem = '';
			save();
		} else {
			alert('Empty Item!');
		}
	}
	$scope.complete = function(id) {
		$scope.toDoList[id].status = !$scope.toDoList[id].status;
		save();
	}
	$scope.remove = function(id) {
		$scope.toDoList.splice(id, 1);
		save();
	}
	$scope.toggleFilter = function(stat) {
		$scope.f = stat;
	}
	$scope.toggleBg = function() {
		$scope.bg = !$scope.bg;
		if($scope.bg) {
			document.body.className = 'bg';
		} else {
			document.body.className = '';
		}
	}
});
