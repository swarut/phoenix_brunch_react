import React from "react"
import ReactDom from "react-dom"
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

class Hello extends React.Component {
  render() {
    return (
      <div>
        <RaisedButton label="Default" />
      </div>
    )
  }
}

export default Hello
