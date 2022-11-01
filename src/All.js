import axios from 'axios'
import React, { useEffect, useState } from 'react'

const All = () => {
  const [allItem, setAllItem] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [snum, setSnum] = useState(1);
  const allMovie = async () => { 
    const res = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${page}&limit=50`);
    console.log(res.data, res.data.data.movie_count)
    setAllItem(res.data.data.movies)
    setTotal(res.data.data.movie_count)
  }
  useEffect(() => { 
    allMovie();
  }, [page])
  

  //console.log(listNum);
  const cnum = 20; 
  const pnum = 50; 
  
  const listNum = Array.from({ length: total / pnum })

  return (
    <>
      {
        snum === 1 ? null : <button onClick={()=>setSnum(snum - cnum)}>Prev</button>
      }
      
      <ul>
        {
          listNum.slice(snum, snum + cnum).map((it, idx) => <button onClick={() => setPage(snum + idx )}
          >{snum + idx }</button>)
        }
      </ul>
      {
        snum > total / pnum - cnum ? null : <button onClick={() => setSnum(snum + cnum)}>Next</button>
      }
      
      <div>
        {
          allItem.map(it => <li>{it.title}</li>)
        }
      </div>      
    </>
    
  )
}

export default All