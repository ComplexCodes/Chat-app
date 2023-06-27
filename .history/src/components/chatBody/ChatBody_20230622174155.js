import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";

export default class chatBody extends Component {
    render() {
        return <div className="main_chatbody">
            <ChatList />
            <ChatContent />
            <UserProfile />
        </div>;
    }
}