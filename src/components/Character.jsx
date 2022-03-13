import React, { useEffect } from 'react';

const Character = ({ character, getCharacterUpgradeCost, getTalentUpgradeCost, setTotalCharacterUpgradeCost, setTotalTalentUpgradeCost }) => {

    const characterUpgradeCost = getCharacterUpgradeCost(character);
    const talentUpgradeCost = getTalentUpgradeCost(character);

    useEffect(() => {
        setTotalCharacterUpgradeCost(totalCharacterUpgradeCost => totalCharacterUpgradeCost + characterUpgradeCost);
        setTotalTalentUpgradeCost(totalTalentUpgradeCost => totalTalentUpgradeCost + talentUpgradeCost);
    }, []);

    return (
        <div className='card col-lg-4 col-md-6 bg-dark mx-2 mb-3'>
            <div className='card-body'>
                <h4 className='card-title'>{character.key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                <p className='card-text'><strong>Lvl:</strong> {character.level}</p>
                <p className='card-text'><strong>Total upgrade cost:</strong> {characterUpgradeCost.toLocaleString()}</p>
                <p className='card-text'><strong>Total talent upgrade cost:</strong> {talentUpgradeCost.toLocaleString()}</p>
                <p className='card-text'><strong>Ascension:</strong> {character.ascension}</p>
                <p className='card-text'><strong>Constellation:</strong> {character.constellation}</p>
                <p className='card-text'>
                    <strong style={{textDecoration: "underline"}}>Talents</strong>
                    <br /><strong>Auto:</strong> {character.talent.auto}
                    <br /><strong>Skill:</strong> {character.talent.skill}
                    <br /><strong>Burst:</strong> {character.talent.burst}
                </p>
            </div>
        </div>
    )

}

export default Character;