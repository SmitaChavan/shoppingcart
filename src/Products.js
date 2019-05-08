import React from "react";
import Pic from './Pic'

const Product=(propData)=>
{
    let prodData = propData.productData
    let simple = JSON.stringify(prodData);
    console.log(simple);
    return <div>
    {prodData.map((prodData, index)=><Pic key={index} picData={prodData} />)}
    </div>
}

export default Product