import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Info from './components/Info'
import axios from 'axios'

function App() {
  const [searchLyrics, setSearchlyrics] = useState({})
  const [lyrics, setLyrics] = useState('')
  const [info, setInfo] = useState([])

  useEffect(() => {
    if (Object.keys(searchLyrics).length === 0) return

    const searchApiLirics = async () => {
      const { artist, song } = searchLyrics

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyrics, info] = await Promise.all([
        axios(url),
        axios(url2)
      ])

      // setLyrics(lyrics)
      setLyrics(lyrics.data.lyrics)
      setInfo(info.data.artists[0])

    }
    searchApiLirics()

  }, [searchLyrics, info])


  return (
    <Fragment>
      <Formulario
        setSearchlyrics={setSearchlyrics}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
