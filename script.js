console.log('JS OK');

/*
Data una lista della spesa, 
stampare in pagina gli elementi della lista individualmente con un ciclo while.
*/

/*
1 - Prendo l'elemento dal DOM;
2 - Creo un array con la lista della spesa;
3 - Creo il ciclo while;
4 - Stampo in pagina i nomi dei prodotti della lista;
*/

// 1 - Prendo l'elemento dal DOM;
const products = document.getElementById('products');
////console.log(products);

// 2 - Creo un array con la lista della spesa;
const shoppingList = [
'pane', 'uova', 'formaggio', 'latte', 'acqua'
];
////console.log(shoppingList.length);

let i = 0;
const myList = document.createElement('ul');
// 3 - Creo il ciclo while;
while (i < shoppingList.length) {
    ////console.log(shoppingList[i]);
    const myListItems = document.createElement('li');
    myListItems.append(shoppingList[i]);
    myList.appendChild(myListItems);
    // Incremento dell'indice
    i++;
}

// 4 - Stampo in pagina i nomi dei prodotti della lista;
products.appendChild(myList);




