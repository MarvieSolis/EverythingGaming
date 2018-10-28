import React, { Component } from 'react';
import Navbar from "../../components/Navbar";
import placeholder_user from "../../static/images/placeholder_user.jpg";
import UserPosts from "../../components/UserProfile/UserPosts";


class UserProfile extends Component {

    state = {
        userposts: true
    }

    render() {
        return (
            <div>
                <Navbar />

                <div className="container userProfile">
                    <div className="row justify-content-center">
                        <div className="col-sm-auto">
                            <div className="container">
                                <div className="row justify-content-center userInfo">
                                    <div className="col-sm-auto">
                                        <img id="userImage" src={placeholder_user} alt="user"></img>
                                        <h6 id="userName">User Name</h6>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-sm-auto">
                                    <h6 id="userPostsHeader">Posts</h6>
                                        {this.state.userposts === true ? 
                                        <UserPosts/>
                                         : 
                                        <h6 id="userPostsNone">No Activity ):</h6>
                                         }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;