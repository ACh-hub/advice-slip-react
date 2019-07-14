import React,{Component} from 'react';
import AdviceCard from './AdviceCard';
import NavBar from './NavBar';
import SearchBox from './SearchBox';


class App extends Component{

    constructor(){
        super();
        this.state = {
            searchBoxValue: '',
            advice: 'The Halibut has no advice for you'
        }
    }

    searchBoxChangeHandler = data =>
        this.setState({
            searchBoxValue: data
          });

    searchBarSubmitHandler = () => {
    fetch(`https://api.adviceslip.com/advice/search/${this.state.searchBoxValue}`)
    .then(response=>response.json())
    .then(adviceslip => {
        const rand = Math.floor(Math.random() * adviceslip.total_results);
        this.setState({advice:adviceslip.slips[rand].advice})
    })
    .catch(error => this.setState({advice:'Enlightened halibut has no advice for you.'}));
}
    render (){
        return (
        <div>
            <NavBar/>
            <AdviceCard advice={this.state.advice}/>
            <SearchBox searchBoxValue={this.state.searchBoxValue} 
            searchBarHandler={this.searchBoxChangeHandler} 
            searchBarSubmitHandler ={this.searchBarSubmitHandler}
            />
        </div>
        );
    }
}

export default App;