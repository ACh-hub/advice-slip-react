import React,{Component} from 'react';
import AdviceCard from './AdviceCard';
import Searchbox from './Searchbox';

class App extends Component{
    constructor(){
        super();
        this.state = {
            searchbox: '',
            advice: 'Shitty advice',
        };
    }

    onSearchChange = (event) => {
        this.setState({searchbox: event.target.value.toLowerCase()});
    }

    onClickButton = (event) => {
        event.preventDefault();
        // Add the api call here then the result should change the state of advice
    }

    render (){ 
        return (
        <div>
        <header>
        <img className='logo' src="" alt='Aleksandra Chrapkowska'></img>
        <Searchbox searchChange={this.onSearchChange} clickButton={this.onClickButton}/>
        </header>
        <AdviceCard advice={this.state.advice}/>
        </div>
        );
    }
}

export default App;