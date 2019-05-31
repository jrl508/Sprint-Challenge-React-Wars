import React from 'react'

function Character(props){
return(
    <div className="character">
        <p>Name: <span>{props.character.name}</span></p>
        <p>Born: <span>{props.character.birth_year}</span></p>
        <p>Height: <span>{props.character.height}</span></p>
        <p>Mass: <span>{props.character.mass}</span></p>
        <p>Gender: <span>{props.character.gender}</span></p>

    </div>
)
}

export default Character;