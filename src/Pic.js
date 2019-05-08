import React from 'react'

const Pic = (imgData) =>
{
    const data = imgData.picData
    const dataE = JSON.stringify(data)
    console.log('array' + dataE)
    return <div><img src={data.imgLink} alt={data.description} /></div>
}

export default Pic