import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import AllUserPosts from "../../components/Home/AllUserPosts";


class Home extends Component {

    state = {
        searchTerm: "",
        searchParam: "Game",
        sortBy: "Most Recent",
    }

    handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value }, () => { console.log(name, value) });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="container Home">

                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <form>
                                <div className="row justify-content-center">
                                    <label id="searchHeader" htmlFor="searchBar">Search</label>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="searchPage">
                                        <select name="searchParam" id="searchParam" onChange={this.handleInput}>
                                            <option>game</option>
                                            <option>author</option>
                                            <option>platform</option>
                                        </select>
                                        <input type="platform" name="searchTerm" onChange={this.handleInput} id="searchBar" placeholder="Search" />
                                        <button id="searchBtn">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <form id="selectForm">
                                <div className="row justify-content-center">
                                    <label htmlFor="selectSort">Sort by</label>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <select name="sortBy" id="selectSort" onChange={this.handleInput}>
                                                <option>Most Recent</option>
                                                <option>Most Popular</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                < AllUserPosts />

            </div>
        );
    }
}

export default Home;