export function authorize(code){
  const body = {
    method: 'POST',
    mode: 'cors'
  }
  return (dispatch) => {
    return fetch(`//better-sounds-api.herokuapp.com/api/v1/users/create?code=${code}`, body)
    .then(res => res.json())
    .then(res => {
      dispatch({type:"AUTHORIZE", payload: res})
    })
  }
}

export function logoutUser() {
  return (dispatch) => {
    dispatch({type: 'LOGOUT_USER'})
  }
}
