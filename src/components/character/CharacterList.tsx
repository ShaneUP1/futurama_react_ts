import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import request from 'superagent'

// interface Props {
//   characters: Character[]
// }

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([])

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
        <div key={character.Profession} >
          <CharacterCard {...character} />
        </div>
      ))
      }
    </div>
  )
}

export default CharacterList
