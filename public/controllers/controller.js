function AppCtrl ($scope,) {
	console.log('Hello From Controller');

	
	person1 = {
			name: 'Faruk',
			email: 'any@any.com',
			number: '01786600678'
	};
		person2 = {
			name: 'Ahmed',
			email: 'any@asd.com',
			number: '01786das600678'
	};
		person3 = {
			name: 'Any',
			email: 'any@dasd.com',
			number: '01786asd600678'
	};
	var contactlist = [person1, person2, person3];
	$scope.contactlist = contactlist;
}
