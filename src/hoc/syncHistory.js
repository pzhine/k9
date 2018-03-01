import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'

export default function syncHistory({
  store,
  locationChangedAction,
  dispatchOnMount = true,
}) {
  return Wrapped => {
    class SyncHistory extends PureComponent {
      componentWillMount() {
        if (dispatchOnMount) {
          store.dispatch(locationChangedAction(this.props.location.pathname))
        }
      }
      componentWillReceiveProps(nextProps) {
        console.log(this.props.location, nextProps.location)
        if (this.props.location.pathname !== nextProps.location.pathname) {
          store.dispatch(locationChangedAction(nextProps.location.pathname))
        }
      }
      render() {
        return <Wrapped />
      }
    }
    return withRouter(SyncHistory)
  }
}
