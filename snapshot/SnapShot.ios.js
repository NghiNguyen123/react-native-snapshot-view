import React from 'react'
import PropTypes from 'prop-types'
import { View, requireNativeComponent, NativeAppEventEmitter } from 'react-native'

class SnapShotView extends React.Component {

  render() {
    return <RCTSnapShot {...this.props}/>
  }
}

SnapShotView.propTypes = {
  ...View.propTypes,
  shotNumber: PropTypes.number,
  fileName: PropTypes.string,
  onShoted: PropTypes.func
}

const RCTSnapShot = requireNativeComponent('RCTSnapShotView', SnapShotView)

export default SnapShotView
