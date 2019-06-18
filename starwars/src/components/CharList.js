import React from 'react';
import Character from './Character';

function CharList(props){
return (
    <ul className="char-list">
        {props.starwarsChars.map(character => (
        <li key={character.name}>
            <Character character={character}/>
        </li>
        ))}
    </ul>)
}

export default CharList;