import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Input from './Components/Input/Input'
import { MovieProvider } from './Context/MovieContext';
import Dropdown from './Components/Dropdown/Dropdown';
import Section from './Components/Section/Section';

function App() {
  const [leftTitle, setleftTitle] = useState('');
  const [rightTitle, setrightTitle] = useState('');

  const setTitle = (title, side) => {
    if (side == 'left') {
      setleftTitle(title);
    } else if (side == 'right') {
      setrightTitle(title);
    }
  }

  const [left, setLeft] = useState({});
  const [right, setRight] = useState({});

  const setData = (data, side) => {
    if (side == 'left') {
      setLeft(data);
    } else if (side == 'right') {
      setRight(data);
    }
  }
 
  const [leftClass, setLeftClass] = useState([]);
  const [rightClass, setRightClass] = useState([]);

  const values = (movieDetail) => {
    const awards = movieDetail.Awards.split(' ').reduce((prev, word) => {
      const value = parseInt(word);
      if (isNaN(value)) {
        return prev;
      } else {
        return prev + value;
      }
    }, 0)
    const boxOffice = movieDetail.BoxOffice ? parseInt(
      movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, '')
    ) : "";
    // const boxOffice = parseInt(
    //     movieDetail.BoxOffice.replace(/\$/g,'').replace(/,/g,'')
    // );
    const metaScore = parseInt(movieDetail.Metascore);
    const imdbRating = parseFloat(movieDetail.imdbRating);
    const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));

    return {awards,boxOffice, metaScore, imdbRating, imdbVotes};
  }

  useEffect(() => {
    if(Object.keys(left).length>2&&Object.keys(right).length>2){
      //console.log('abutalha pyaara')

    const leftStat = values(left);
    const rightStat = values(right);
    console.log(leftStat)

    Object.keys(leftStat).map((key) => {
      if(leftStat[key] > rightStat[key]){
        setLeftClass((prev) => [...prev,'is-success'])
        setRightClass((prev) => [...prev, 'is-danger'])
      }else{
        setRightClass((prev) => [...prev, 'is-success'])
        setLeftClass((prev) => [...prev,'is-danger'])
      }
    })
  }
  },[left,right])

  return (
    <MovieProvider value={{ setTitle, setData, left, right }}>
      <Header />
      <div class="container">
        <div class="columns">
          <div class="column">
            <Input side='left' title={leftTitle} />
            <Dropdown title={leftTitle} side='left' />
            <Section side="left" movieDetail={left} classes={leftClass}/>
          </div>
          <div class="column">
            <Input side='right' title={rightTitle} />
            <Dropdown title={rightTitle} side='right' />
            <Section side="right" movieDetail={right} classes={rightClass}/>
          </div>
        </div>
      </div>
    </MovieProvider>
  )
}

export default App
