import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import request from 'superagent'

interface MatchParams {
  name:string 
}

const CharacterDetail:React.FC <RouteComponentProps<MatchParams>> = ({ match: { params: { name }}}) => {
  
  const [ characterInfo, setCharacterInfo ] = useState<Character>({} as Character)
  const [ loading, setLoading ] = useState(true)
  
  useEffect(() => {
    
    const getCharacterDetails = async () => {
      const quoteData = await request.get(`https://futuramaapi.herokuapp.com/api/v2/characters?search=${name}`);
      setCharacterInfo(quoteData.body[0])
      setLoading(false)
    };
    getCharacterDetails()
  }, [name])

  loading && <h2>Loading</h2>
  return (
    <div>
      <h1>{characterInfo.Name}</h1>
      <img src={characterInfo!.PicUrl} alt={characterInfo.Name} />
      <p>{characterInfo.Planet}</p>

    </div>
  )
}

// Age: "Unknown"
// FirstAppearance: "\"The Luck of the Fryish\""
// Name: "Philip J. Fry II"
// PicUrl: "https://vignette.wikia.nocookie.net/en.futurama/images/1/16/Phillip_J._Fry_II.jpg/revision/latest/scale-to-width-down/350?cb=20100413142842"
// Planet: "Earth"
// Profession: "MusicianOil baronAstronaut"
// Relatives: "Enos Fry,Philip J. Fry I,Mildred Fry,Yancy Fry, Sr.,Mrs. Fry,Yancy Fry,Philip J. Fry I,Turanga Leela,Kif Kroker's offspring"
// Species: "Human"
// Status: "Deceased"
// VoicedBy: "Baby: Lauren TomAdult: Tom Kenny"

export default CharacterDetail
