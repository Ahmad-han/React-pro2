import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./action";


export const App = () => {
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

   useEffect(() => {
   dispatch(loadPosts())
  }, [])

  return (
    <div className="App">
      <h1>Список Дел</h1>
      <ul>
      {
        loading ? "Идет загрузка" : (
          posts.map((item) => {
            return (
              <li>
                {item.title}
              </li>
            )
          })
        )
      }
      </ul>
    </div>
  );
}


