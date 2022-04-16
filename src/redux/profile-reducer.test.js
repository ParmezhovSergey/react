import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";
import React from "react";

let state = {
  postData: [
    { id: 1, message: "Hi, how are you?", likeCount: 15 },
    { id: 2, message: "I'ts my first post", likeCount: 20 },
    { id: 3, message: "Yo", likeCount: 20 },
    { id: 4, message: "Good", likeCount: 20 },
  ],
};

it("length of posts should be incremented", () => {
  let action = addPostActionCreator("it-kamasutra");
  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(5);
});

it("message of new posts should be correct", () => {
  let action = addPostActionCreator("it-kamasutra");
  let newState = profileReducer(state, action);
  expect(newState.postData[4].message).toBe("it-kamasutra");
});

it("delete post", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(3);
});

it("not delete post incorrect", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(4);
});
