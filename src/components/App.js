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

    searchBarSubmitHandler = () => 
    this.setState({
        advice: 'changed'
      });
    
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