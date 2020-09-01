import React,{Fragment,Component} from 'react';

class Header extends Component {

    constructor(props){
        super()

        this.state={
            title: 'React First App',
            keyword: 'User Text Here'
        }
    }


    render(){
        return(
            <Fragment>
                <div>{this.state.title}</div>
                <center>
                    <input type='text' />
                    <p>{this.state.keyword}</p>
                <h2>
                    React app
                </h2>
            </center>
            <hr/>
            </Fragment>
        )
    }
}

/*const Header = () => {
    return(
        <Fragment>
            <center>
                <h2>
                    React app
                </h2>
            </center>
            <hr/>
        </Fragment>
    )
}
*/
export default Header;