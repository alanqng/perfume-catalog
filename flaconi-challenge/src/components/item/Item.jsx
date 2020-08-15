import React from 'react';
import { ItemDiv } from "./item.styles";

export const Item = () => {
    const itemTest =  {
            "id": "30150001",
            "name": "Lancôme La vie est belle Eau de Parfum",
            "slug": "parfum/lancome/la-vie-est-belle/lancome-la-vie-est-belle-eau-de-parfum.html",
            "brand": "Lancôme",
            "type": "Eau de Parfum",
            "image": "https://cdn.flaconi.de/media/catalog/215x/l/a/lancome-la-vie-est-belle-eau-de-parfum-30-ml.jpg",
            "price": 3895,
            "size": "30ML",
            "rating": 99
        };

    const getName = (name, brand, type) => {
        let newName = name.replace(brand, '');
        newName = newName.replace(type, '')
        return newName
    };

    const getPrice = (price) => {
        let newPrice = price / 100
        return newPrice.toString().replace('.', ',') + ' €'
    }
    return (
        <ItemDiv>
            <img src={itemTest.image}/>
            <div className={'item-info'}>
                <h4>{itemTest.brand}</h4>
                <h4>{getName(itemTest.name, itemTest.brand, itemTest.type)}</h4>
                <p>{itemTest.type}</p>
            </div>
            <div className={'price'}>
                <p>From {getPrice(itemTest.price)} / {itemTest.size}</p>
            </div>
        </ItemDiv>
    )
}
