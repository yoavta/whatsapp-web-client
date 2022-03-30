function Chat(props) {
    return (
      <div className="Chat">
        <p>Chat page</p>
          <p>{props.currentUser} is connected.</p>
      </div>
    );
  }
  
  export default Chat;