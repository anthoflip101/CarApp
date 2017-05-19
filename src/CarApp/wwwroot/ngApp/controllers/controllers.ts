namespace CarApp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public carList;
        public makeList;
        public id;

        public seeModal(id: string) {
            this.$uibModal.open({
                templateUrl: '/ngApp/views/modal.html',
                controller: 'ModalController',
                controllerAs: 'modal',
                resolve: {
                    CarId: () => id
                },
                size: 'sm'
            });
        }


        constructor(carService: CarApp.Services.CarService,
            makeService: CarApp.Services.MakeService,
            private $uibModal: ng.ui.bootstrap.IModalService) {

            this.carList = carService.getCars();
            this.makeList = makeService.getMake();
        }
    }
    export class MakeController {
        public carDetail;

        public ok() {
            this.$uibModalInstance.close();
        }

        constructor(private CarId: string, private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, carService: CarApp.Services.CarService) {
            this.carDetail = carService.findCar(CarId);
        }
    }
    angular.module('CarApp').controller('MakeController', MakeController);


    export class AboutController {
        public message = 'Hello from the about page!';
    }
    export class ModalController {
        public car;
        public ok() {
            this.$uibModalInstance.close();
        }
        constructor(private CarId: number, private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, carService: CarApp.Services.CarService) {
            this.car = carService.findCar(CarId);
        }
    }
    angular.module("CarApp").controller("ModalController", ModalController);
}