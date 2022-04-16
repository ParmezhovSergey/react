import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControl/formsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElement = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messageElement = state.messageData.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.messages}>
        <div> {messageElement} </div>
        <AddMesssageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
const maxLength50 = maxLengthCreator(50);

const AddMesssageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="введите сообщение"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button> отправить</button>
      </div>
    </form>
  );
};
const AddMesssageFormRedux = reduxForm({
  form: "dialogAddMesssageForm",
})(AddMesssageForm);

export default Dialogs;
