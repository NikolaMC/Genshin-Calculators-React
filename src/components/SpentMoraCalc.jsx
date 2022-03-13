import React, { useState } from 'react'
import UploadFile from './UploadFile';
import MoraResults from './MoraResults';
import Weapon from './Weapon';
import Character from './Character';
import Artifact from './Artifact';

const SpentMoraCalc = ({ setFileData, weaponsRarityData, weaponMoraCostPerLevel, characterMoraCostPerLevel, artifactMoraCostPerLevel, weapons, characters, artifacts }) => {

    const [totalUpgradeCost, setTotalUpgradeCost] = useState(0);
    const [totalWeaponUpgradeCost, setTotalWeaponUpgradeCost] = useState(0);
    const [totalCharacterUpgradeCost, setTotalCharacterUpgradeCost] = useState(0);
    const [totalTalentUpgradeCost, setTotalTalentUpgradeCost] = useState(0);
    const [totalArtifactUpgradeCost, setTotalArtifactUpgradeCost] = useState(0);

    const checkRarity = (checkWeapon) => {

        if (weaponsRarityData.fiveStar.includes(checkWeapon)) {
            return 5;
        } else if (weaponsRarityData.fourStar.includes(checkWeapon)) {
            return 4;;
        } else if (weaponsRarityData.threeStar.includes(checkWeapon)) {
            return 3;
        }

        return 0;
    }

    const getWeaponUpgradeCost = (checkWeapon) => {
        if (checkWeapon.level > 1 && checkRarity(checkWeapon.key) > 2) {

            if (checkRarity(checkWeapon.key) === 5) {

                if ((checkWeapon.level === 20 && checkWeapon.ascension === 1) || 
                    (checkWeapon.level === 40 && checkWeapon.ascension === 2) || 
                    (checkWeapon.level === 50 && checkWeapon.ascension === 3) ||
                    (checkWeapon.level === 60 && checkWeapon.ascension === 4) ||
                    (checkWeapon.level === 70 && checkWeapon.ascension === 5) ||
                    (checkWeapon.level === 80 && checkWeapon.ascension === 6)
                ) {
                    return weaponMoraCostPerLevel.fiveStar[checkWeapon.level] + weaponMoraCostPerLevel.fiveStarAsc[checkWeapon.level];
                }
    
                return weaponMoraCostPerLevel.fiveStar[checkWeapon.level];
    
            } else if (checkRarity(checkWeapon.key) === 4) {
    
                if ((checkWeapon.level === 20 && checkWeapon.ascension === 1) || 
                    (checkWeapon.level === 40 && checkWeapon.ascension === 2) || 
                    (checkWeapon.level === 50 && checkWeapon.ascension === 3) ||
                    (checkWeapon.level === 60 && checkWeapon.ascension === 4) ||
                    (checkWeapon.level === 70 && checkWeapon.ascension === 5) ||
                    (checkWeapon.level === 80 && checkWeapon.ascension === 6)
                ) {
                    return weaponMoraCostPerLevel.fourStar[checkWeapon.level] + weaponMoraCostPerLevel.fourStarAsc[checkWeapon.level];
                }
    
                return weaponMoraCostPerLevel.fourStar[checkWeapon.level];
    
            } else if (checkRarity(checkWeapon.key) === 3) {
    
                if ((checkWeapon.level === 20 && checkWeapon.ascension === 1) || 
                    (checkWeapon.level === 40 && checkWeapon.ascension === 2) || 
                    (checkWeapon.level === 50 && checkWeapon.ascension === 3) ||
                    (checkWeapon.level === 60 && checkWeapon.ascension === 4) ||
                    (checkWeapon.level === 70 && checkWeapon.ascension === 5) ||
                    (checkWeapon.level === 80 && checkWeapon.ascension === 6)
                ) {
                    return weaponMoraCostPerLevel.threeStar[checkWeapon.level] + weaponMoraCostPerLevel.threeStarAsc[checkWeapon.level];
                }
    
                return weaponMoraCostPerLevel.threeStar[checkWeapon.level];
    
            }

        }

        return 0;
    }

    const getCharacterUpgradeCost = (checkCharacter) => {

        if (checkCharacter.level > 1) {

            if ((checkCharacter.level === 20 && checkCharacter.ascension === 1) || 
                (checkCharacter.level === 40 && checkCharacter.ascension === 2) || 
                (checkCharacter.level === 50 && checkCharacter.ascension === 3) ||
                (checkCharacter.level === 60 && checkCharacter.ascension === 4) ||
                (checkCharacter.level === 70 && checkCharacter.ascension === 5) ||
                (checkCharacter.level === 80 && checkCharacter.ascension === 6)
            ) {
                return characterMoraCostPerLevel.character[checkCharacter.level] + characterMoraCostPerLevel.characterAsc[checkCharacter.level];
            }
    
            return characterMoraCostPerLevel.character[checkCharacter.level];

        }

        return 0;
    }

    const getTalentUpgradeCost = (checkCharacter) => {

        let totalTalentCost = 0;

        if (checkCharacter.talent.auto > 1) {
            totalTalentCost += characterMoraCostPerLevel.talents[checkCharacter.talent.auto];
        }

        if (checkCharacter.talent.skill > 1) {
            totalTalentCost += characterMoraCostPerLevel.talents[checkCharacter.talent.skill];
        }

        if (checkCharacter.talent.burst > 1) {
            totalTalentCost += characterMoraCostPerLevel.talents[checkCharacter.talent.burst];
        }

        return totalTalentCost;
    }

    const getArtifactUpgradeCost = (checkArtifact) => {

        if (checkArtifact.level > 0) {
            if (checkArtifact.rarity === 5) {
                return artifactMoraCostPerLevel.fiveStar[checkArtifact.level];
            } else if (checkArtifact.rarity === 4) {
                return artifactMoraCostPerLevel.fourStar[checkArtifact.level];
            } else if (checkArtifact.rarity === 3) {
                return artifactMoraCostPerLevel.threeStar[checkArtifact.level];
            }
        }

        return 0;
    }


    return (
        <>
            <div className="col-md-7 col-lg-8 p-3 g-3 mt-3 mx-auto shadow border border-dark rounded calc-box text-center">
                <p>Upload a file in the GOOD format to see how much mora you spent on upgrading weapons, characters and artifacts</p>
                <p>Here's a small list of automatic scanners that export in the GOOD format</p>
                <div className='list-group mb-3 align-items-center'>
                    <a className='btn btn-outline-light mb-2 col-3' href='https://github.com/Andrewthe13th/Inventory_Kamera' target="_blank" rel="noreferrer noopener">Inventory Kamera</a>
                    <a className='btn btn-outline-light col-3' href='https://github.com/D1firehail/AdeptiScanner-GI' target="_blank" rel="noreferrer noopener">AdeptiScanner</a>
                </div>
                <p>Although the usage of these tools is virtually undetectable, just as with any tool that indirectly interacts with the game, there could still be a risk with using them</p>
                <a className='btn btn-outline-light' href='https://genshin.hoyoverse.com/en/news/detail/5763' target="_blank" rel="noreferrer noopener">MiHoYo's official response to Script, Plug-In, and Third-Party Software Issues</a>
            </div>
            <div className="col-md-7 col-lg-8 p-3 g-3 mt-2 mx-auto shadow border border-dark rounded calc-box text-center">
                <UploadFile setFileData={setFileData} />
                <MoraResults totalUpgradeCost={totalUpgradeCost} setTotalUpgradeCost={setTotalUpgradeCost} totalWeaponUpgradeCost={totalWeaponUpgradeCost} 
                    totalCharacterUpgradeCost={totalCharacterUpgradeCost} totalTalentUpgradeCost={totalTalentUpgradeCost} totalArtifactUpgradeCost={totalArtifactUpgradeCost} />
            </div>
            <div className="col-md-7 col-lg-8 p-3 g-3 mt-2 mx-auto shadow border border-dark rounded calc-box text-center">
                <h3 className='mb-3'>Weapons</h3>
                <div className='row justify-content-center'>
                    {
                        weapons.map((weapon, i) => (
                            <Weapon key={i} weapon={weapon} checkRarity={checkRarity} getWeaponUpgradeCost={getWeaponUpgradeCost} setTotalWeaponUpgradeCost={setTotalWeaponUpgradeCost} />
                        ))
                    }
                </div>
            </div>
            <div className="col-md-7 col-lg-8 p-3 g-3 mt-2 mx-auto shadow border border-dark rounded calc-box text-center">
                <h3 className='mb-3'>Characters</h3>
                <div className='row justify-content-center'>
                    {
                        characters.map((character, i) => (
                            <Character key={i} character={character} getCharacterUpgradeCost={getCharacterUpgradeCost} getTalentUpgradeCost={getTalentUpgradeCost} setTotalCharacterUpgradeCost={setTotalCharacterUpgradeCost} setTotalTalentUpgradeCost={setTotalTalentUpgradeCost} />
                        ))
                    }
                </div>
            </div>
            <div className="col-md-7 col-lg-8 p-3 g-3 mt-2 mb-2 mx-auto shadow border border-dark rounded calc-box text-center">
                <h3 className='mb-3'>Artifacts</h3>
                <div className='row justify-content-center'>
                    {
                        artifacts.map((artifact, i) => (
                            <Artifact key={i} artifact={artifact} getArtifactUpgradeCost={getArtifactUpgradeCost} setTotalArtifactUpgradeCost={setTotalArtifactUpgradeCost} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default SpentMoraCalc;