import { click } from "@testing-library/user-event/dist/click";
import React, { useEffect, useState } from "react";
import Movie from './Movie';



let API_key = "&api_key=4913407cf8779743004ecf4de56a631e";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular" , "Trending" , "Series"];
const Home = () => {
    const [movieData , setData] = useState([]);
    const [url_setUp , setUrl] = useState(url);
    const [search , setSearch] = useState();
    useEffect(() => {
      fetch(url_setUp).then(res => res.json()).then(data =>{
        setData(data.results);
        //console.log(data.results);
      })
    }, [url_setUp]);

    const getData = (movieType) => {
        if(movieType == "Popular")
        {
            url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
            console.log(url);
        }

        if(movieType == "Trending") 
        {
            url = base_url + '/trending/movie/day?language=en-US' + API_key;
        }

        if(movieType == "Series")  
        {
            url = base_url + '/discover/tv?language=en-US&page=1&sort_by=popularity.desc' + API_key;
            
        }
        /* 
        Working links
        "/discover/movie?sort_by=popularity.desc"
        '/trending/movie/day?language=en-US'
        '//discover/tv?language=en-US&page=1&sort_by=popularity.desc'
        */
        setUrl(url);

    }

    const searchMovie = (evt) => {
        if (evt.key == "Enter") 
        {
            
            url = base_url + "/search/movie?api_key=4913407cf8779743004ecf4de56a631e&query=" + search;
            setUrl(url);
            setSearch(" ");
        }
    }

  return (
    <>
    <div className='header'>

    <div className="bars">

    <div className="cover">Entertainment Hub</div>

    <form>
            <div className='search-button'>
                <input type='text' 
                placeholder='Enter Movie Name' 
                className='inputText' 
                onChange={(e) => {setSearch(e.target.value)}} 
                value = {search}
                onKeyPress = {searchMovie}>
                </input>
                <button>
                <i class="fas fa-search"></i>
                </button>
            </div>
        </form>

        </div>

        
    </div>
        
        
        <nav>
            <ul>

                 
                {
                    arr.map((value) => {
                        return(
                            <li><a href="#" name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                        )
                    })
                }
                
                
            </ul>
        </nav>
        
        
        
        
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


