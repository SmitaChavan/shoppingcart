import React,{Component} from 'react'
import Search from './Search'
import Products from './Products'

const data=[
    {
        imgLink:'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg',
        description:'Test 1'
    },
    {
        imgLink:'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg',
        description:'Test 2'
    }
]


class Main extends Component
{
    render()
    {
        return <div>My first App
        <Search />
        <Products productData={data} />
        </div>
    }
}

export default Main
