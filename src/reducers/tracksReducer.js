function tracksReducer(state = { topTracks: [], recentTracks: [] }, action) {
  switch (action.type) {
    case "ADD_TOP_TRACKS":
      const tracks = action.payload
      return 
    default:
      return state
  }
}

export default tracksReducer
