import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/formsControls";

const MyPosts = React.memo((props) => {
  let state = props.profilePage;

  let postElement = [...state.postData]
    .reverse()
    .map((post) => <Post key={post.id} message={post.message} likeCount={post.likeCount} />);

  //let newPostText = state.newPostText;

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postBlock}>
      <h3> My posts </h3>{" "}
      <div className={s.MyPosts}>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>{" "}
      <div className={s.posts}> {postElement} </div>{" "}
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          validate={[required, maxLength10]}
        />
      </div>

      <div>
        <button> Add post </button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);

export default MyPosts;
