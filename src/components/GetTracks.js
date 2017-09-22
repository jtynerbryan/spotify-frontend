import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTopTracks } from '../actions/tracks'
import { addRecentTracks } from '../actions/tracks'

class GetTracks extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Fetching Tracks...</h1>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTopTracks, addRecentTracks}, dispatch)
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    topTracks: state.tracks.topTracks,
    recentTracks: state.tracks.recentTracks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTracks)
