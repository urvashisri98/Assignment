import dog from "../images/dog.jpg";
import cat from "../images/cat.jpg";
import mouse from "../images/mouse.jpg";
import Pedigree from "../images/pedigree.jpg";
import Andis from "../images/andis.jpg";
import { Dashboard, People, Pets } from "@mui/icons-material";

export const animalImage=[
    {
      id:1,
      image:dog,
      name:"Dog",
    },
    {
        id:2,
        image:cat,
        name:"cat",
    },
    {
        id:3,
        image:mouse,
        name:"Mouse",
    },
    {
        id:3,
        image:mouse,
        name:"Mouse",
    },
]

export const serviceProvider=[{
    id:4,
    image:Pedigree,
    name:"Pedigree",
    price:85,
    review:23
},{
    id:5,
    image:Andis,
    price:"7650",
    name:"Nail Grinder for Dogs & Cats",
    review:13
},{
    id:6,
    image:Pedigree,
    name:"Pedigree",
    price:"85",
    review:33
},{
    id:7,
    image:Andis,
    price:"7650",
    name:"Nail Grinder for Dogs & Cats",
    review:20
},{
    id:8,
    image:Pedigree,
    price:"85",
    name:"Pedigree",
    review:10
},{
    id:9,
    image:Andis,
    price:"7650",
    name:"Nail Grinder for Dogs & Cats",
    review:25
}]

export const dashboardData=[
    {
      section: "Sales",
      value: 15000, 
      icon:  <Dashboard />, 
    },
    {
      section: "Customers",
      value: 120, 
      icon: <People/>, 
    },
    {
      section: "Pets",
      value: 250, 
      icon: <Pets/>, 
    },
  ];

  export const dataArray = [
    {
      sNo: 1,
      customerName: 'John Doe',
      contact: '123-456-7890',
      emailId: 'john@example.com',
      date: '2023-07-30',
      timeSlot: '09:00 AM - 10:00 AM',
      status: 'Confirmed'
    },
    {
      sNo: 2,
      customerName: 'Jane Smith',
      contact: '987-654-3210',
      emailId: 'jane@example.com',
      date: '2023-07-31',
      timeSlot: '11:00 AM - 12:00 PM',
      status: 'Pending'
    },
    {
      sNo: 3,
      customerName: 'Robert Johnson',
      contact: '555-555-5555',
      emailId: 'robert@example.com',
      date: '2023-08-01',
      timeSlot: '02:00 PM - 03:00 PM',
      status: 'Confirmed'
    },
    {
      sNo: 4,
      customerName: 'Emily Davis',
      contact: '222-333-4444',
      emailId: 'emily@example.com',
      date: '2023-08-02',
      timeSlot: '04:00 PM - 05:00 PM',
      status: 'Canceled'
    },
    {
      sNo: 5,
      customerName: 'Michael Brown',
      contact: '777-888-9999',
      emailId: 'michael@example.com',
      date: '2023-08-03',
      timeSlot: '10:00 AM - 11:00 AM',
      status: 'Confirmed'
    }
  ];
  

  