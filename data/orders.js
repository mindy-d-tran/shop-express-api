// dummy data for user orders
// import products from "./products";
// const orderTotal = orderList =>{
//     let total = 0;
//     orderList.forEach(item => total += item.price*item.quantity);
//     return total
// }
const orders = [
    {
        id: 1, 
        userId: 1,
        trackingNumber: 12345,
        orderDate: '04/15/2023',
        orderList: [],
        total: 50
    },
    {
        id: 2, 
        userId: 2,
        trackingNumber: 75913,
        orderDate: '04/20/2023',
        orderList: [],
        total: 30
    },
    {
        id: 3, 
        userId: 1,
        trackingNumber: 48659,
        orderDate: '07/08/2022',
        orderList: [],
        total: 10
    },
    {
        id: 4, 
        userId: 3,
        trackingNumber: 57320,
        orderDate: '10/30/2023',
        orderList: [],
        total: 50
    },
    {
        id: 5, 
        userId: 4,
        trackingNumber: 22222,
        orderDate: '11/22/2022',
        orderList: [],
        total: 22
    },
    {
        id: 6, 
        userId: 5,
        trackingNumber: 22534,
        orderDate: '04/15/2023',
        orderList: [],
        total: 100
    },
    {
        id: 7, 
        userId: 1,
        trackingNumber: 56732,
        orderDate: '07/30/2023',
        orderList: [],
        total: 50
    },
    {
        id: 8, 
        userId: 4,
        trackingNumber: 37516,
        orderDate: '01/10/2024',
        orderList: [],
        total: 20
    }
];

module.exports = orders;