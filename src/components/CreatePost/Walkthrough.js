import React, { Component } from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import './Walkthrough.css';

class Walkthrough extends Component {
    
    state = {
        title: '',
        game: '',
        platform: '',
        score: null,
        text: '',
        blog: false,
        review: false,
        walkthrough: true
    }

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ text: value })
    }

    render() {
        return (
            <div className="container Walkthrough">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input name="title" onChange={this.handleInput} type="title" className="form-control" id="postTitle" aria-describedby="postTitle" placeholder="Enter a title for your post" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="game">Game</label>
                                <input type="game" onChange={this.handleInput} className="form-control" id="postGame" placeholder="Enter the game's title" />
                            </div>                            
                            <div className="form-group">
                                <label htmlFor="game">Platform</label>
                                <input type="platform" onChange={this.handleInput} className="form-control" id="postPlatform" placeholder="What are you playing on?" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="game">Content</label>
                                <ReactQuill value={this.state.text} onChange={this.handleChange} />
                            </div>
                            <button type="submit" className="btn submitBtn">Create Post</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Walkthrough;