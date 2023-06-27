import React, { Component } from "react";
import "./chatList.css";

export default class ChatList extends Component{
    render() {
        return <div className="main_chatlist">
            <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        </div>;
    }
}