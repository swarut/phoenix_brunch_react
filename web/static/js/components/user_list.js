import React from "react"
import Avatar from 'material-ui/Avatar'

class Userlist extends React.Component {

  render() {
    return (
      <div className='user-list'>
        <div className='user'>
          <Avatar src='http://www.material-ui.com/images/uxceo-128.jpg' />
        </div>
      </div>
    )
  }
}

export default Userlist
