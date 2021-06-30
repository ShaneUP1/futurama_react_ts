import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CharacterCard from './CharacterCard'
import request from 'superagent'

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character []>([])

  useEffect(() => {
    const dataFetch = async () => {
      const data = await request.get('https://futuramaapi.herokuapp.com/api/v2/characters');
      setCharacters(data.body)
    }
    dataFetch();
  }, [])

  return (
    <div>
      {characters.map(character => (
        <Link to={`/${character.Name}`}>
        <div key={character.Profession} >
          <CharacterCard {...character} />
        </div>
        </Link>
      ))
      }
    </div>
  )
}

export default CharacterList
