import React, { useEffect, useState } from "react";
import Movie from './Movie';



let API_key = "&api_key=4913407cf8779743004ecf4de56a631e";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular" , "Trending" , "TV series" ];
const Home = () => {
    const [movieData , setData] = useState([]);
    const [url_setUp , setUrl] = useState(url);

    useEffect(() => {
      fetch(url_setUp).then(res => res.json()).then(data =>{
        setData(data.results);
        console.log(data.results);
      })
    }, [url_setUp]);

    const getData = (movieType) => {
        if(movieType == "Popular")
        {
            url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
        }

        if(movieType == "Trending") 
        {
            url = base_url + '/trending/all/day?language=en-US' + API_key;
        }

        if(movieType == "Tv series")  
        {
            url = base_url + '/tv/top_rated?language=en-US' + API_key;
        }

        setUrl(url);
    }

  return (
    <>
    <div className='header'>
        <nav>
            <ul>
                {
                    arr.map((value) => {
                        return(
                            <li><a href="#" name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                        )
                    })
                }
                <li><a href='#'>Popular</a></li>
                <li><a href='#'>Trending</a></li>
                <li><a href='#'>Tv series</a></li>
            </ul>
        </nav>
        <form>
            <div className='search-button'>
                <input type='text' placeholder='Enter Movie Name' className='inputText'>
                </input>
                <button>
                <i class="fas fa-search"></i>
                </button>
            </div>
        </form>
    </div>
    <div className='container'>
        {
            (movieData.length === 0) ? <p className = "notfound">Not Found</p>: movieData.map((res,pos) =>{
                return(
                    <Movie info={res} key={pos}/>
                )
            })
        }
        
    </div>
    </>
  )
}

export default Home


//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4913407cf8779743004ecf4de56a631e