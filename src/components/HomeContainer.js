'use client'
import React from 'react'
import CharacterGrid from '@/components/CharacterGrid'
import Loading from '@/components/Loading'
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';


const HomeContainer = () => {
  const API_URL = "https://rickandmortyapi.com/api/" 
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  const getCharacters = useCallback(async()=> {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}character`);
      setCharacters(response.data.results);
      setLoading(false);
    }
    catch {
      setError(true);
      setLoading(false);
    }
  },[])

  useEffect(() => {
    getCharacters();
  },[getCharacters]) //para q no se llame 2 veces y no se arme un loop infinito

  return (
    <div>
      <h1 className="text-5xl flex justify-center py-8 font-bold"> Rick and Mortyyy! </h1>
      {!loading && <CharacterGrid characters={characters}/>}
      {loading && <Loading/>} 
    </div>
  )
}

export default HomeContainer