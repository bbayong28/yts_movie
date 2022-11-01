import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Load from './Load';

const List = ({ genre, limit}) => {
    //데이터 가져오기
    //useState([]);에 처음 []설정을 안해주면 map 뿌릴때 에러남
    const [movie, getMovie] = useState([]);
    const [load, setLoad] = useState(true);
    console.log(genre, limit);
    const movieData = async () => {
         setLoad(true)
        const movieItem = await axios.get(`https://yts.mx/api/v2/list_movies.json?limit=${limit}&genre=${genre}`);
        //console.log(movieItem.data.data.movies);        
        getMovie(movieItem.data.data.movies);
        setLoad(false)
    }
    useEffect(() => {
        movieData();
    }, [genre])
    
    return (
        <div>
            {
                load
                    ? <Load />
                    :
                    <ul className='List'>
                        {
                            //console.log(movie)
                            movie.map(it => { 
                                return (
                                    <li key={it.id}>
                                        <figure>
                                            <img src={it.medium_cover_image} alt={it.title} />
                                        </figure>
                                        <div>{it.title}</div>{/* 
                                        <div>{it.genres}</div>
                                        <div>{it.rating}</div>
                                        <div>{it.runtime}</div> */}
                                    </li>
                                )
                            })
                        }
                    </ul>
            }
            
        </div>
    )
}

export default List