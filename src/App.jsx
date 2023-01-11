
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {loadPosts} from "./action";

import './App.css';

function App(){
  const posts = useSelector(state => state.posts);
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])
  return(
    <div className="App">
      {
      loading ? 
      <div>
        <div>
        Идет загрузка!!!
        </div> 
        {posts.map(item => {
        return(
          <div key={item.id}>
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
          <div key={item.id}>
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