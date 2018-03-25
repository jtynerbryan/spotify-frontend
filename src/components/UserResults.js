import React from 'react'
import AudioFeaturesChart from './AudioFeaturesChart'
import TopTracksList from './TopTracksList'
import LoggedInNavBar from './LoggedInNavBar'
import PlaylistForm from './PlaylistForm'
import PlaylistGrid from './PlaylistGrid'
import { bindActionCreators } from 'redux'
import { addRelatedArtistsTopTracks } from '../actions/relatedArtists'
import { addRelatedArtistsAudioFeatures } from '../actions/relatedArtists'
import { mapRelatedArtistsFeaturesToTracks } from '../actions/relatedArtists'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/auth'
import { Button, Grid, Popup } from 'semantic-ui-react'

class UserResults extends React.Component {

  logout = () => {
    this.props.logoutUser()
    this.props.history.push('/')
  }

  componentWillMount() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/')
    }
  }

  componentDidMount() {
    if (this.props.relatedArtistsTopTracks.length === 0 && this.props.relatedArtistsAudioFeatures.length === 0) {
      const topEightRelatedArtists = this.props.relatedArtists.slice(0, 8)
      topEightRelatedArtists.map(artist => this.props.addRelatedArtistsTopTracks(this.props.user.id, artist.id))
    }
  }

  componentDidUpdate() {
    if (this.props.relatedArtistsTopTracks.length === 80 && this.props.relatedArtistsAudioFeatures.length === 0) {
      this.props.addRelatedArtistsAudioFeatures(this.props.user.id, this.props.relatedArtistsTopTracks)
    }

    if (this.props.relatedArtistsAudioFeatures.length > 0 && this.props.relatedArtistsTracksWithFeatures.length === 0) {
      this.props.mapRelatedArtistsFeaturesToTracks(this.props.relatedArtistsTopTracks, this.props.relatedArtistsAudioFeatures)
    }
  }

  render() {
    return (
      <div>
        <div>
          <LoggedInNavBar />
          <h2 className='header'>Aggregate Audio Features from Top Tracks</h2>
          <AudioFeaturesChart classname='big-chart' chartData={Object.values(this.props.aggregateFeaturesOfTopTracks).map(val => val * 2)} />
        </div>
        <div className="tracks">
          <h1 className="top-tracks-header">Top Tracks</h1>
          <TopTracksList />
        </div>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logoutUser,
      addRelatedArtistsTopTracks,
      addRelatedArtistsAudioFeatures,
      mapRelatedArtistsFeaturesToTracks
    }, dispatch)
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
    topTracks: state.tracks.topTracks,
    topTracksAudioFeatures: state.audioFeatures.topTracksAudioFeatures,
    aggregateFeaturesOfTopTracks: state.audioFeatures.aggregateFeaturesOfTopTracks,
    relatedArtists: state.relatedArtists.relatedArtists,
    relatedArtistsAudioFeatures: state.relatedArtists.relatedArtistsAudioFeatures,
    topArtists: state.topArtists.topArtists,
    relatedArtistsTopTracks: state.relatedArtists.relatedArtistsTopTracks,
    relatedArtistsTracksWithFeatures: state.relatedArtists.tracksWithFeatures,
    playlists: state.playlists.playlists
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserResults)
