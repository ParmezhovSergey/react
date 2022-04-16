// import s from './Dialogs.module.css';
// import DialogItem from './DialogItem/DialogItem';
// import Message from './Message/Message';
// import React from 'react';
// import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';

// const Dialogs = (props) => {

//    let state = props.store.getState().dialogsPage;

//    let dialogsElement = state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

//    let messageElement = state.messageData.map((message) => <Message message={message.message} />)
//    let newMessageBody = state.newMessageBody;

//    let onSendMessageClick = () => {
//       props.dispatch(sendMessageCreator());
//    }

//    let onNewMessageChange = (event) => {
//       let body = event.target.value;
//       props.dispatch(updateNewMessageBodyCreator(body));
//    }

//    return (
//       <div className={s.dialogs}>
//          <div className={s.dialogsItem}>
//             {dialogsElement}
//          </div>
//          <div className={s.messages}>
//             <div> {messageElement} </div>
//             <div>
//                <div>
//                   <textarea
//                      value={newMessageBody}
//                      onChange={onNewMessageChange}
//                      placeholder='введите сообщение'></textarea>
//                </div>
//                <div>
//                   <button onClick={onSendMessageClick}> отправить</button>
//                </div>
//             </div>
//          </div>
//       </div>
//    )
// }

// export default Dialogs;
