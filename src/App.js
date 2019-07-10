import React,{Component} from 'react';
import AdviceCard from './AdviceCard';
import Searchbox from './Searchbox';

class App extends Component{
    constructor(){
        super();
        this.state = {
            searchbox: '',
            advice: `Enlightened halibut will give you the advice you don't need nor deserve.`,
        };
    }

    onSearchChange = (event) => {
        this.setState({searchbox: event.target.value.toLowerCase()});
    }

    onClickButtonSearch = (event) => {
        event.preventDefault();

        fetch(`https://api.adviceslip.com/advice/search/${this.state.searchbox}`)
        .then(response=>response.json())
        .then(adviceslip => {
            const rand = Math.floor(Math.random() * adviceslip.total_results);
            this.setState({advice:adviceslip.slips[rand].advice})
        })
        .catch(error => this.setState({advice:'Enlightened halibut has no advice for you.'}));
        
    }

    onClickButtonRandom = (event) => {
        event.preventDefault();
 
        fetch('	https://api.adviceslip.com/advice')
        .then(response=>response.json())
        .then(adviceslip => this.setState({advice:adviceslip.slip.advice}));
    }

    render (){ 
        return (
        <div>
        <header>
        <img className='logo' src="" alt='Aleksandra Chrapkowska'></img>
        <Searchbox searchChange={this.onSearchChange} clickButtonSearch={this.onClickButtonSearch}/>
        </header>
        <AdviceCard advice={this.state.advice} clickButtonRandom={this.onClickButtonRandom}/>
        </div>
        );
    }
}

export default App;