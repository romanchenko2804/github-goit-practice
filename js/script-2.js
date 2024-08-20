// console.log('Hello World!')


const card = {
    items: [],
    getItems() {
       return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product, 
            quantity: 1,
        }

        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this;
        
        for (let i = 0; i < items.length; i+=1) {
            const { name } = items[i];

            if (name === productName) { 
                items.splice(i, 1);
            }
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        const { items } = this;
        let total = 0;

        for (const {price, quantity} of items) {
            total += price*quantity;
        } 
        return `Загальна сума товарів становить - ${total} грн.`;
    },
    increaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.quantity += 1;
            }
        }
    },
    decreaseQuantity(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.quantity -= 1;
            }
        }
    },
};


// card.add({name: 'lime', price: 30});
// card.add({name: 'pinapple', price: 100});
// card.add({name: 'pinapple', price: 100});
card.add({name: 'lime', price: 30});
card.add({name: 'mango', price: 50});
card.add({name: 'tomato', price: 40});
card.add({name: 'pinapple', price: 100});


// console.log(card.getItems());
// console.table(card.getItems());


// card.remove('pinapple');
// console.table(card.getItems());

// console.log(card.clear())
// console.table(card.getItems());

// console.table(card.getItems());

// console.log(card.increaseQuantity('pinapple'));
// console.log(card.increaseQuantity('mango'));
console.log(card.increaseQuantity('tomato'));
console.log(card.increaseQuantity('lime'));


console.log(card.decreaseQuantity('lime'));


console.table(card.getItems());

console.log(card.countTotalPrice());