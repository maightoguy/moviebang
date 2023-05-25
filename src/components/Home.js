import React from 'react'

const Home = () => {
  return (
    <>
    <div className='header'>
        <nav>
            <ul>
                <li><a href='#'>Popular</a></li>
                <li><a href='#'>Trending</a></li>
                <li><a href='#'>Series</a></li>
            </ul>
        </nav>
        <form>
            <div className='search-button'>
                <input type='text' placeholder='Enter Movie Name' className='inputText'>

                </input>
            </div>
        </form>
    </div>
    </>
  )
}

export default Home