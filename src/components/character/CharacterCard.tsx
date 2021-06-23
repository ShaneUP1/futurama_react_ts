import React from 'react'

interface Props {
  PicUrl: string,
  Name: string,
  Species: string
}


const CharacterCard: React.FC<Props> = ({PicUrl, Name, Species}) => {
  return (
    <div>
      <img src={PicUrl} alt={Name}/>
      <h3> {Name} </h3>
      <p> {Species} </p>
    </div>
  )
}

export default CharacterCard

