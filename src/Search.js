import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

const Search = () => {
    const getMovie = async () => { 
        const res = await axios.get('https://yts.mx/api/v2/list_movies.json?query_term=godfather');
        console.log(res.data.data.movies);
    }

    useEffect(() => {
        getMovie()
    }, []);

    const searchHandler = (e) => { 
        console.log(e.target.value);


    }
    return (
        <div className='Search'>
            <form>
                <input type="text" onChange={searchHandler}/>
                <button>
                    <i className='xi-search'></i>
                </button>
            </form>
        </div>
    )
}

//https://yts.mx/api/v2/list_movies.json?query_term=godfather
export default Search;