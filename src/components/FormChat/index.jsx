import React  from 'react';

//componets Form 
import ListUser from './ListUser'
import ChatTextArea from './ChatTextArea'
const FormChat = ()=>{
    return (
    
        <form>
            <div className="list_user_online">
                list
                <ListUser/>
            </div>
            <div className="chat-message">
                chat area
                <ChatTextArea/>
            </div>
            <div className="messager">
                mess
                <input placeholder="input message"/>
                <button> push message</button>
            </div>
        </form>
    );
};

export default FormChat;