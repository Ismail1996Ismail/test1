
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {loadPosts, deletePosts} from "./action";
import Header from './Header'
import './App.css';

function App(){
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])
  const handleClick = (id) => {
    dispatch(deletePosts(id))
  }
  return(
    <div className="App">
      <Header/>
      {
      loading ? 
      <div>
        <h1 className="loading">Идет загрузка!!!</h1> 
        {posts.map(item => {
        return(
          <div className="block" key={item.id}>
            <div className="delete">x</div>
            <p className="title">
              {item.id}){item.title}:        
            </p>
            <p className="subTitle">
              {item.body}!
            </p>  
          </div>
        )
      })}
      </div>
      :
      posts.map(item => {
        return(
          <div className="block" key={item.id}>
            <div 
            className="delete"
            onClick={() => handleClick(item.id)} >
              <span>x</span>
            </div>
            <p className="title">
            {item.id}){item.title}:        
            </p>
            <p className="subTitle">
              {item.body}!
            </p>  
          </div>
        )
      })
      }
    </div>
  )
}
export default App