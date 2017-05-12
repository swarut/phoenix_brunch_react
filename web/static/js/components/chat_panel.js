import React from "react"
import ReactDOM from "react-dom"
import ChatWindow from "./chat_window"
import Userlist from "./user_list"
import ChatInput from "./chat_input"

class ChatPanel extends React.Component {

  render() {
    return (
      <div className='chat-panel'>
        <ChatWindow></ChatWindow>
        <Userlist></Userlist>
        <ChatInput></ChatInput>
      </div>
    )
  }
}

export default ChatPanel
