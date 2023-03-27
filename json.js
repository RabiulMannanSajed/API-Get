//javascript object notation
// JSON
const user = {
    name: 'sajed',
    job: 'we developer',
}
console.log(user);

const shop = {
    name: 'Sadia store',
    address: 'sajed road',
    product: ['laptop', 'mobile', 'heart'],
    owner: {
        name: 'sadia anjum',
        profession: 'actor'
    },
    inExpensive: false,
}
const shopStringified = JSON.stringify(shop); ///stringify() convert in string 
const converted = JSON.parse(shopStringified);
console.log(shopStringified);
console.log(converted);