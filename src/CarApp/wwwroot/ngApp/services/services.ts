namespace CarApp.Services {

    export class CarService {
        public carResource;

        public getCars() {
            return this.carResource.query();
        }
       
        public findCar(id) {
            return this.carResource.get({id:id});
        }
        constructor($resource: ng.resource.IResourceService) {
            this.carResource = $resource('/api/cars/:id');
        }

    }
    angular.module('CarApp').service('carService', CarService);


    export class MakeService {
        public makeResource;

        public getMake() {
            return this.makeResource.query();
        }
        constructor($resource: ng.resource.IResourceService) {
            this.makeResource = $resource('/api/makes/:name');
        }
    }
    angular.module('CarApp').service('makeService', MakeService);

    
    export class MyService {

    }
    angular.module('CarApp').service('myService', MyService);
    }
