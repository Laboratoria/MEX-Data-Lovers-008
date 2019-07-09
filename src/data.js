const filterData = (key, value, data) => { //2 parámetros. Value del index tiene 2 palabras (valor.propiedad)
    let items = data.filter(element => element[key].indexOf(value) > -1); //Varaible vacia donde se guardara c/elemento que cumpla con la condición. -1 = index inexistente = false

    return items;
};

const orderData = (data) => {
    data.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return data;
};

const orderDataZA = (data) => {
    data.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
    return data.reverse();
};

window.orderData = orderData;
window.orderDataZA = orderDataZA;
window.filterData = filterData; //Guarda la función en el global para poder ser invocada de donde sea