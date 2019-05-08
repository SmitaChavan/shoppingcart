import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import cors from 'cors'  
import express from 'express'

class Search extends Component
{
    constructor() {
        super()

        this.state = {
            data:''
        }


        this.myfunction = this.myfunction.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    myfunction(event) {
        this.setState({
            data:event.target.value
        })

        console.log(this.state.data)

        const app= express();

        app.get('/', (req,res)=>{
            res.send('hello world');
        });

        app.listen(1337, ()=>{console.log('in consolee');});
        const url = 'http://localhost:1337/product'
        let response = fetch(url);
        console.log(response.json)


        
    }

    clearInput(e) {
        e.preventDefult(); 
        alert(this.form.elements['searchText'].value);
        //1ReactDOM.findDOMNode()
    }
    render() {
        return <div>
        <form>
            <input type='text' value={this.state.value} name='searchText' onKeyPress={this.myfunction} />
            <button onClick={this.clearInput} value='Clear'>Clear</button>       
            
        </form>
        </div>
    }
    
}



// const Search = () =>
// {
    
// }



export default Search