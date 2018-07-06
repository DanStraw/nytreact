import React, { Component } from 'react';
import Header from '../../components/Header/Header.js';
import { Input } from '../../components/Form/Input.js';
import "./search.css";
import { Button } from '../../components/Form/Button.js';
import { Link } from 'react-router-dom';



class Search extends Component {
    state = {
        searchTerm: '',
        bDate: '',
        eDate: '',
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return(
            <div>
                <Header headerText="Search the New York Times API for Articles" />
                    <div className="navBar">
                        <Link to="/"><div>Home</div></Link>
                        <Link to="/saved">Saved</Link>
                    </div>
                <form>
                    <Input value={this.state.searchTerm}
                        onChange={this.handleInputChange}
                        name="searchTerm" 
                        label="Search Term:"
                        placeholder="  enter a search term (required)" />
                    <Input value={this.state.bDate}
                        onChange={this.handleInputChange}
                        name="bDate" 
                        label="Begin Date:"
                        placeholder="  yyyymmdd" />
                    <Input value={this.state.eDate}
                        onChange={this.handleInputChange}
                        name="eDate" 
                        label="End Date:"
                        placeholder="  yyyymmdd" />
                    <Link to={"/results/" + this.state.searchTerm + "&" + this.state.bDate + "&" + this.state.eDate }>
                        <Button>Get Results</Button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Search;