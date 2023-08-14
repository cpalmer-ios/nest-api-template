import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController /properties endpoint', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
  
  
  describe('testing the GET /properties method', () => {
    const response = {"data": [{"address": "26985 Brighton Lane, Brighton, BN1 1AA", "id": 1, "img": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800", "price": "495000.00"}, {"address": "Sevenoaks Town Council Offices, Bradbourne Vale Road, Sevenoaks, Kent, TN13 3QG", "id": 2, "img": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800", "price": "895000.00"}, {"address": "61 Carlton Road, Westcliff On Sea, Essex, United Kingdom, SS0 6QN", "id": 3, "img": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800", "price": "555000.00"}, {"address": "22 Maple St, Kent, Kn1 2EG", "id": 4, "img": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800", "price": "395000.00"}, {"address": "31 Matchett St, Brighton, BN3 3DK", "id": 5, "img": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800", "price": "7495000.00"}, {"address": "4th Floor, Nova South, 160 Victoria Street, London, SW1E 5LB", "id": 6, "img": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800", "price": "295000.00"}, {"address": "1307 S 900 W Salt Lake City, UT 84104", "id": 7, "img": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800", "price": "1495000.00"}]}
    it('should return properties', () => {
      expect(appController.getProperties()).toStrictEqual(response);
    });

    it('should return match snapshot', () => {
      expect(appController.getProperties()).toStrictEqual(response);
      expect(appController.getProperties()).toMatchSnapshot();
    });
  });

  describe('testing the POST /properties method', () => {

    it('should create a property', () => {

      const body = {
        id: 0,
        img:'https://url.com/img',
        address: "string address",
        price: "390000"
      }

      const response = { "id": 8, "message": "property created" }

      expect(appController.createProperty(body)).toStrictEqual(response);
    });

    it('should return match snapshot', () => {

      const body = {
        id: 0,
        img:'https://url.com/img',
        address: "string address",
        price: "390000"
      }
      
      expect(appController.createProperty(body)).toMatchSnapshot();
    });
  });
});

