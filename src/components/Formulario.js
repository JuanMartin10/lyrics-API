import React, { useState } from 'react'

const Formulario = ({ setSearchlyrics }) => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    })
    const [error, setError] = useState(false)

    const { artist, song } = search

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (artist.trim() === '' || song.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        setSearchlyrics(search)
    }


    return (
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador letras y canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={handleChange}
                                            value={artist}
                                        />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre Cancion"
                                            onChange={handleChange}
                                            value={song}

                                        />

                                    </div>

                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario
