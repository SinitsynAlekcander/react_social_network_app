import React from "react";
import objectMypostsModuleCss from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My Posts
            <div>
                <textarea> </textarea>
                <button> Add Post </button>
                <button> Remove </button>
                <button> Test </button>
                <button> Test2 </button>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
export default MyPosts;