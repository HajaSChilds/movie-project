import React, { useState, useEffect   } from "react";
import axios from 'axios'

import NavBar from "./NavBar"

const App = ()=> {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/movies')
        .then(res => {
            console.log(res)
            setMovies(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}