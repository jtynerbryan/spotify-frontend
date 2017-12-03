import React from 'react'
import PlaylistForm from './PlaylistForm'
import PlaylistGrid from './PlaylistGrid'

class Playlists extends React.Component {

  render() {
    return (
      <div>
        <LoggedInNavBar />
        <h1>Playlists</h1>
        <PlaylistForm/>
        <PlaylistGrid/>
      </div>
    )
  }

}

export default Playlists