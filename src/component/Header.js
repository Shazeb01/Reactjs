import React,{Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(props){
        super()

        this.state={
            title: 'Style Store',
            keyword: 'Search'
        }
    }

    inputChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value? event.target.value:"Search"})
    }


    render(){

        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input type='text' onChange={this.inputChange}/>
                    <div style={{color:'white'}}>{this.state.keyword}</div>
                <h2>
                    Fashion Store
                </h2>
            </center>
            <hr/>
            </header>
        )
    }
}


export default Header;