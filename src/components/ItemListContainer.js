import React from 'react'
import Product from '../components/Products/Product'
function ItemListContainer({greeting}) {
    return (
        <div>
            <h2>{greeting}</h2>
            <Product />
        </div>
    )
}

export default ItemListContainer