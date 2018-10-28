import React, { Component } from 'react';


class AllUserPosts extends Component {

    render() {
        return (
            <div className="container userPostsPreviewHome">
                <div className="row justify-content-center ">
                    <div className="col-sm-12">
                        <span id="previewLeft">
                            <h6 id="postPreviewTitleHome">Title of Post</h6>
                            <h6 id="postPreviewGameHome">Game Title</h6>
                            <h6 id="postPreviewAuthorHome">Author Name</h6>
                        </span>
                        <span id="previewRight">
                            <h6 id="postPreviewCategoryHome">Category</h6>
                            <h6 id="postPreviewPlatformHome">Platform</h6>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default AllUserPosts;