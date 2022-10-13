// use local storage to manage cart data
const addToDb = id => {

    let shoppingCard = {};

    // get the shoping card 
    const storedCard = localStorage.getItem('shoping-card');
    if (storedCard) {
        shoppingCard = JSON.parse(storedCard);
    }
    /*  else {
         shoppingCard = {}
     } */




    // add quantity
    const quantity = shoppingCard[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCard[id] = newQuantity;

        // localStorage.setItem(id ,newQuantity)
        // localStorage.getItem(id);
    }
    else {
        shoppingCard[id] = 1;
        // localStorage.setItem(id, 1)
    }
    localStorage.setItem('shoping-card', JSON.stringify(shoppingCard));
}

const removeToDB = id => {
    const storedCard = localStorage.getItem('shoping-card');
    if (storedCard) {
        const shoppingCard = JSON.parse(storedCard);
        if (id in shoppingCard) {
            delete shoppingCard[id];
            localStorage.setItem('shoping-card', JSON.stringify(shoppingCard));
        }
    }
}


export { addToDb, removeToDB }