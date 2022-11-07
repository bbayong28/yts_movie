import React from 'react'
import List from './List';
import './common.scss'
import { Link, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import Glist from './Genre_li';
import All from './All';
import Detail from './Detail';

const App = () => {
    const genreList = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Romance",
        "Thriller",
        "Western"
    ]
  

  return (
    <div>
      <Header>
        {/* Header의 children이다 권장하는 방법 아님 */}
        <ul className='flex'>
          {
            genreList.map((it, idx) => { 
              return (
                <li key={idx}>
                  <Link to={it}>{it}</Link>
                </li>
              )
            })
          }
        </ul>
      </Header>

      <Routes>
        <Route path="/" element={<Main limit={50} />}>
            <Route path="/detail/:id" element={<Detail />} />
        </Route>
        {
           /* <Route path="/Action"/> => <Route path={genreList[0]}/> => 일일히 열개다 못적으니까 map으로 돌리자!! 하고 useEffect에 [genre]를 적어줘야 바뀜. 새로 바뀌는걸 한번 가져오는거라서!*/ 
            genreList.map((it, idx) => {
                return (
                    <Route path={it} element={<Glist genre={it} limit={20} />} key={idx}>
                        <Route path={`/${it}/:id`} element={<Detail limit={50} />} />
                    </Route>
                )
            })
        }
      </Routes>
    
      {/* <All/> */}

      {/* 
      List 하나 만들어놓고 다양한 장르 뿌릴 수 있음 
      <List genre='Drama' limit={20} />
      <List genre='Action' limit={20} />
      <List genre='Horror' limit={20} />
      */}
    </div>
  )
}

export default App