import React,{Component} from 'react';
import Header from './Header'
import Footer from './Footer'

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }
    render(){
        console.log(this.state.news)
        return (
            <React.Fragment>
                <Header/>
                <h1>Styles</h1>
                <h2>Nareshit</h2>
                <Footer year='2020'/>
            </React.Fragment>
        )
    }

}

export default Home