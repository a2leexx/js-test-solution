"use strict";

let product = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}

// возвращает наименование товара
data.product_name = function() {
    return this.displayedName.displayedName.value[0];
}

// возвращает список номеров магазинов, где товар в наличии
data.available_in = function() {
    let list_of_shop_ids = [];
    let stocks = this.stock.stocks;

    for (let region_id in stocks)
        for (let stock_id in stocks[region_id])
            if (stocks[region_id][stock_id] > 0) 
                list_of_shop_ids.push(stock_id);

    return list_of_shop_ids;
}

// возвращает магазин с наибольшим числом товаров в регионе
data.store_with_the_most_items_in_stock = function(region_id) {
    let stocks = this.stock.stocks[region_id];
    let shop_with_most_items = null;

    for (let shop in stocks)
        if (shop_with_most_items === null || stocks[shop] > Number(stocks[shop_with_most_items]))
            shop_with_most_items = shop;

    return { shop : shop_with_most_items, amount : stocks[shop_with_most_items] };
}

console.log(product.product_name());
console.log(product.available_in());
console.log(product.store_with_the_most_items_in_stock("34"));

