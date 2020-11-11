import React from 'react';

import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';

import "./FieldSendMessage.scss";

const FieldSendMessage = () => {
    return(
        <div className="FieldSendMessage">
            <AttachFileIcon className="clip"/>
            <input placeholder="Write a message..."/>
            <SentimentSatisfiedIcon className="smile"/>    
            <SendIcon className="send"/>
        </div>
    )
}

export default FieldSendMessage;
