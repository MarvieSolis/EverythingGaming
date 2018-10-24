import React, { Component } from 'react';


class UserPosts extends Component {

    render() {
        return (
            <div className="container userPostsPreview">
                <div className="row justify-content-center ">
                    <div className="col-sm-auto">
                        <span id="previewLeft">
                            <h6 id="postPreviewTitle">Title of Post</h6>
                            <h6 id="postPreviewGame">Game Title</h6>
                        </span>
                        <span id="previewRight">
                            <h6 id="postPreviewCategory">Category</h6>
                            <h6 id="postPreviewPlatform">Platform</h6>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPosts;