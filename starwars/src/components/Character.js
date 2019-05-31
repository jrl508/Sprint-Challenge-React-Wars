import React from 'react'

function Character(props){
return(
    <div className="character">
        <p>Name: {props.character.name}</p>
        <p>Born: {props.character.birth_year}</p>
        <p>Height: {props.character.height}</p>
        <p>Mass: {props.character.mass}</p>
        <p>Gender: {props.character.gender}</p>

    </div>
)
}

export default Character;