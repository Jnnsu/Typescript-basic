"use strict";
const productTableKeys = ['name', 'price', 'salePrice', 'membersOnly'];
const product = {
    id: 'c001',
    name: '코드잇 블랙 후드 집업',
    price: 129000,
    salePrice: 98000,
    membersOnly: true,
};
console.log(typeof product);
for (let key of productTableKeys) {
    console.log(`${key} | ${product[key]}`);
}
