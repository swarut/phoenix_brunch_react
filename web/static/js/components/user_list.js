import React from "react"
import Avatar from 'material-ui/Avatar'
import createStore from 'redux'

class Userlist extends React.Component {

  render() {
    return (
      <div className='user-list'>
        <div className='user'>
          <Avatar src='https://sdl-stickershop.line.naver.jp/products/0/0/2/2583/android/stickers/153839.png' />
        </div>
      </div>
    )
  }
}

export default Userlist
