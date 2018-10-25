import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import AllUserPosts from "../../components/Home/AllUserPosts";


class Home extends Component {

    state = {
        searchTerm: "",
        searchParam: "",
        sortBy: "",
    }

    handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value }, () => { console.log(name, value) });
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
                                    <div className="searchBarWrapper">
                                        <div className="row justify-content-center">
                                            <div className="col-5">
                                                <input type="platform" name="searchTerm" onChange={this.handleInput} className="form-control" id="searchBar" placeholder="Search" />
                                            </div>
                                            <div className="col-4">
                                                <select className="form-control" name="searchParam" id="searchParam" onChange={this.handleInput}>
                                                    <option>game</option>
                                                    <option>author</option>
                                                    <option>platform</option>
                                                </select>
                                            </div>
                                            <div className="col-2">
                                                <button id="searchBtn">
                                                    <i className="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-8">
                            <form id="selectForm">
                                <div className="form-group">
                                    <label htmlFor="selectSort">Sort by</label>
                                    <select className="form-control" name="sortBy" id="selectSort" onChange={this.handleInput}>
                                        <option>Most Recent</option>
                                        <option>Most Popular</option>
                                    </select>
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