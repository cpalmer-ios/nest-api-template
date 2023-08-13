import { Injectable } from '@nestjs/common';
import { CreatePropertyModel } from './models/property.model';


// Mock Database. (didn't want to add a db for versions and local installation reasons. but would choose SQL with
// some kind of ORM if need be)

let properties = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: "26985 Brighton Lane, Brighton, BN1 1AA",
    price: "495000.00",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: "Sevenoaks Town Council Offices, Bradbourne Vale Road, Sevenoaks, Kent, TN13 3QG",
    price: "895000.00",  
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: "61 Carlton Road, Westcliff On Sea, Essex, United Kingdom, SS0 6QN",
    price: "555000.00",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: "22 Maple St, Kent, Kn1 2EG",
    price: "395000.00",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: "31 Matchett St, Brighton, BN3 3DK",
    price: "7495000.00",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: "4th Floor, Nova South, 160 Victoria Street, London, SW1E 5LB",
    price: "295000.00", 
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    address: "1307 S 900 W Salt Lake City, UT 84104",
    price: "1495000.00",
  },
]

@Injectable()
export class AppService {
  getProperties(): {} {
    return { data: properties};
  }

  createProperty(property: CreatePropertyModel): {} {

    let data = {}
    let message = ""
     
      property.id = properties.length +1;
      data = properties.push(property)
      message = "property created"

    return { mesage: message, id: property.id  }
  }
}
