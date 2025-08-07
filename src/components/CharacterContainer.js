'use client';
import {useEffect, useState, useCallback} from "react";
import Loading from '@/components/Loading'
import axios from "axios";
import CharacterCardSingle from "@/components/CharacterCardSingle";

const CharacterContainer = ({id}) => {
    const API_URL = `https://rickandmortyapi.com/api/`
    const [character, setCharacter] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getCharacter = useCallback(async() => {
        setLoading(true)
        try {
            const response = await axios.get(`${API_URL}character/${id}`)
            setCharacter(response.data)
            setLoading(false)
        } catch {
            console.log("error")
            setError(true);
            setLoading(false)
        }
    }, []);

    useEffect (() => {
        getCharacter()
    }, [getCharacter])

  return (
    <div>
        {!loading && <CharacterCardSingle character={character}/>}
        {loading && <Loading/>}
    </div>
  )
}

export default CharacterContainer