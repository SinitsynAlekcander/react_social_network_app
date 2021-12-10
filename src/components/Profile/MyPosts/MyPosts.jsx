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
                <button> Test3 </button>
                <Post messege='Hello, My first Post' like='10 like'/>
                <Post messege='Hello, My second Post' like='15 like'/>
                <Post />
            </div>
        </div>
    )
}
export default MyPosts;