interface Product {
    id: string;
    name: string;
    price: number;
    salePrice: number;
    membersOnly?: boolean;
}

const productTableKeys: (keyof Product)[] = ['name', 'price', 'salePrice', 'membersOnly'];

const product: Product = {
    id: 'c001',
    name: '코드잇 블랙 후드 집업',
    price: 129000,
    salePrice: 98000,
    membersOnly: true,
};

let product2: typeof product;

console.log(typeof product);

for (let key of productTableKeys) {
    console.log(`${key} | ${product[key]}`);
}
