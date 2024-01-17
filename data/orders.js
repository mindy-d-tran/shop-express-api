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
        orderList: [{
            id: 2,
            listingName: 'hardcover notebook',
            price: 10,
            imgSrc: '',
            quantity: 5
        }],
        total: 50
    },
    {
        id: 2, 
        userId: 2,
        trackingNumber: 75913,
        orderDate: '04/20/2023',
        orderList: [
            {
                id: 4,
                listingName: 'pen (1 count)',
                price: 3,
                imgSrc: '',
                quantity: 6
            },
            {
                id: 3,
                listingName: 'sticker sheet',
                price: 6,
                imgSrc: '',
                quantity: 2
            },
        ],
        total: 30
    },
    {
        id: 3, 
        userId: 1,
        trackingNumber: 48659,
        orderDate: '07/08/2022',
        orderList: [
            {
                id: 3,
                listingName: 'sticker sheet',
                price: 6,
                imgSrc: '',
                quantity: 1
            },
            {
                id: 1,
                listingName: 'washi tape',
                price: 4,
                imgSrc: '',
                quantity: 1
            },
        ],
        total: 10
    },
    {
        id: 4, 
        userId: 3,
        trackingNumber: 57320,
        orderDate: '10/30/2023',
        orderList: [
            {
                id: 5,
                listingName: 'highlighter (5 count)',
                price: 10,
                imgSrc: '',
                quantity: 1
            },
            {
                id: 2,
                listingName: 'hardcover notebook',
                price: 10,
                imgSrc: '',
                quantity: 1
            },
            {
                id: 3,
                listingName: 'sticker sheet',
                price: 6,
                imgSrc: '',
                quantity: 5
            },
        ],
        total: 50
    },
    {
        id: 5, 
        userId: 4,
        trackingNumber: 22222,
        orderDate: '11/22/2022',
        orderList: [
            {
                id: 3,
                listingName: 'sticker sheet',
                price: 6,
                imgSrc: '',
                quantity: 3
            },
            {
                id: 1,
                listingName: 'washi tape',
                price: 4,
                imgSrc: '',
                quantity: 1
            },
        ],
        total: 22
    },
    {
        id: 6, 
        userId: 5,
        trackingNumber: 22534,
        orderDate: '04/15/2023',
        orderList: [{
            id: 1,
            listingName: 'washi tape',
            price: 4,
            imgSrc: '',
            quantity:25
        },],
        total: 100
    },
    {
        id: 7, 
        userId: 1,
        trackingNumber: 56732,
        orderDate: '07/30/2023',
        orderList: [
            {
                id: 1,
                listingName: 'washi tape',
                price: 4,
                imgSrc: '',
                quantity:5
            },
            {
                id: 3,
                listingName: 'sticker sheet',
                price: 6,
                imgSrc: '',
                quantity: 3
            },
            {
                id: 4,
                listingName: 'pen (1 count)',
                price: 3,
                imgSrc: '',
                quantity: 4
            },
        ],
        total: 50
    },
    {
        id: 8, 
        userId: 4,
        trackingNumber: 37516,
        orderDate: '01/10/2024',
        orderList: [
            {
                id: 2,
                listingName: 'hardcover notebook',
                price: 10,
                imgSrc: '',
                quantity: 1
            },
            {
                id: 5,
                listingName: 'highlighter (5 count)',
                price: 10,
                imgSrc: '',
                quantity: 1
            }
        ],
        total: 20
    }
];

module.exports = orders;