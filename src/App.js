import React,{Component} from 'react';
import AdviceCard from './AdviceCard';
import Searchbox from './Searchbox';

class App extends Component{
    constructor(){
        super();
        this.state = {
            searchbox: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({searchbox: event.target.value});
    }

    onClickButton = (event) => {
        event.preventDefault();
        console.log(this.state.searchbox);
    }

    render (){ 
        return (
        <div>
        <header>
        <img className='logo' src="" alt='Aleksandra Chrapkowska'></img>
        <Searchbox searchChange={this.onSearchChange} clickButton={this.onClickButton}/>
        </header>
        <AdviceCard advice='Shitty halibut advice.'/>
        </div>
        );
    }
}

export default App;