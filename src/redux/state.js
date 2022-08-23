import { rerenderEntireTree } from '../render';

let state = {
    profilePage: {
        postsData: [
            { id: 1, message: "First post", likeCount: 10 },
            { id: 2, message: "Second post", likeCount: 12 }
        ],
        newPostText: "Hello"
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Damian" },
            { id: 2, name: "Alisa" },
            { id: 3, name: "Sasha" },
            { id: 4, name: "Tanya" },
        ],
        messagesData: [
            { id: 1, message: "Hello" },
            { id: 2, message: "World" },
            { id: 3, message: ")))" },
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;