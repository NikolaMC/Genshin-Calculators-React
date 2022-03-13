import React, { useEffect } from 'react';

const Weapon = ({ weapon, checkRarity, getWeaponUpgradeCost, setTotalWeaponUpgradeCost }) => {
  
    const upgradeCost = getWeaponUpgradeCost(weapon);

    useEffect(() => {
        setTotalWeaponUpgradeCost(totalWeaponUpgradeCost => totalWeaponUpgradeCost + upgradeCost);
    }, []);

    return (
        <div className='card col-lg-3 col-md-5 bg-dark mx-2 mb-3'>
            <div className='card-body'>
                <h4 className='card-title'>{weapon.key.replace(/([A-Z])/g, ' $1').trim()}</h4>
                <p className='card-text'><strong>Lvl:</strong> {weapon.level}</p>
                <p className='card-text'><strong>Total upgrade cost:</strong> {upgradeCost.toLocaleString()}</p>
                <p className='card-text'><strong>Rarity:</strong> {checkRarity(weapon.key)}</p>
                <p className='card-text'><strong>Ascension:</strong> {weapon.ascension}</p>
                <p className='card-text'><strong>Refinement:</strong> {weapon.refinement}</p>
                <p className='card-text'><strong>Equipped on:</strong> {weapon.location.replace(/([A-Z])/g, ' $1').trim()}</p>
            </div>
        </div>
    )

}

export default Weapon;