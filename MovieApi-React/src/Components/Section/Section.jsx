import React from 'react'

function Section({side, movieDetail, classes}) {
    function showSection(){
        
        if(Object.keys(movieDetail).length > 2){
            return {display : 'block'}
        }else{
            return {display : 'none'}
        }
    }
    console.log(classes)
  return (
   <>
   <div style={showSection()}>
    <article class = "media">
        <figure class = "media-left">
            <p class = "image">
                <img src ={`${movieDetail?movieDetail.Poster:""}`}/>
            </p>
        </figure>
        <div class = "media-content">
            <div class = "content">
                <h1>{movieDetail?movieDetail.Title:""}</h1>
                <h4>{movieDetail?movieDetail.Genre:""}</h4>
                <p>{movieDetail?movieDetail.Plot:""}</p>
            </div>
        </div>
    </article>
    <article data-value="${awards}" className = {`notification is-primary ${classes[0]}`}>
        <p class="title">{movieDetail?movieDetail.Awards:""}</p>
        <p class="subtitle">Awards</p>
    </article>
     <article data-value="${boxOffice}" className = {`notification is-primary ${classes[1]}`}>
        <p class="title">{movieDetail?movieDetail.BoxOffice:""}</p>
        <p class="subtitle">Box Office</p>
    </article>
     <article data-value="${metaScore}" className = {`notification is-primary ${classes[2]}`}>
        <p class="title">{movieDetail?movieDetail.Metascore:""}</p>
        <p class="subtitle">Metascore</p>
    </article>
     <article data-value="${imdbRating}" className = {`notification is-primary ${classes[3]}`}>
        <p class="title">{movieDetail?movieDetail.imdbRating:""}</p>
        <p class="subtitle">IMDB Rating</p>
    </article>
     <article data-value="${imdbVotes}" className = {`notification is-primary ${classes[4]}`}>
        <p class="title">{movieDetail?movieDetail.imdbVotes:""}</p>
        <p class="subtitle">IMDB Votes</p>
    </article>
    </div>
   </>
  )
}

export default Section