export const loadPosts = () => {
  return (dispatch) => {
    dispatch({ type: 'loading'})
  
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
          dispatch({
            type: 'loadPosts',
            payload: json
          })
        })
  }
}