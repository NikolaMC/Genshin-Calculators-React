import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PrimoCalculatorInputs from './components/PrimoCalculatorInputs';
import AscensionCalc from './components/AscensionCalc';
import SpentMoraCalc from './components/SpentMoraCalc';
import './App.css';

const App = () => {

    const [view, setView] = useState("");

    const [fileData, setFileData] = useState({
        weapons: [],
        characters: [],
        artifacts: []
    });
    const [weapons, setWeapons] = useState([{
        "key": "",
        "level": 0,
        "ascension": 0,
        "refinement": 0,
        "location": ""
    }]);
    const [characters, setCharacters] = useState([{
        "key": "",
        "level": 0,
        "constellation": 0,
        "ascension": 0,
        "talent": {"auto": 0, "skill": 0, "burst": 0}
    }]);
    const [artifacts, setArtifacts] = useState([{
        "setKey": "",
        "slotKey": "",
        "rarity": 0,
        "mainStatKey": "",
        "level": 0,
        "substats":[
            {"key": "", "value": 0},
            {"key": "", "value": 0},
            {"key": "", "value": 0},
            {"key": "", "value": 0}
        ],
        "location": "",
        "lock": true,
        "SubStatsCount": 0,
        "Id": 0
    }]);

    useEffect(() => setUserData());

    const setUserData = () => {
        if (fileData.weapons !== undefined) {
            setWeapons(fileData.weapons);
        }
        if (fileData.characters !== undefined) {
            setCharacters(fileData.characters);
        }
        if (fileData.artifacts !== undefined) {
            setArtifacts(fileData.artifacts);
        }
    };

    const [weaponsRarityData, setWeaponsRarityData] = useState({
        "fiveStar": [],
        "fourStar": [],
        "threeStar": []
    });
    const [weaponMoraCostPerLevel, setWeaponMoraCostPerLevel] = useState({});
    const [characterMoraCostPerLevel, setCharacterMoraCostPerLevel] = useState({});
    const [artifactMoraCostPerLevel, setArtifactMoraCostPerLevel] = useState({});

    useEffect(() => {
        getWeaponsRarityData();
        getWeaponMoraCostPerLevel();
        getCharacterMoraCostPerLevel();
        getArtifactMoraCostPerLevel();
    }, []);

    const getWeaponsRarityData = async () => {
        const res = await fetch('weapons.json');
        const data = await res.json();
        setWeaponsRarityData(data);
    }

    const getWeaponMoraCostPerLevel = async () => {
        const res = await fetch('weaponMoraCostPerLevel.json');
        const data = await res.json();
        setWeaponMoraCostPerLevel(data);
    }

    const getCharacterMoraCostPerLevel = async () => {
        const res = await fetch('characterMoraCostPerLevel.json');
        const data = await res.json();
        setCharacterMoraCostPerLevel(data);
    }

    const getArtifactMoraCostPerLevel = async () => {
        const res = await fetch('artifactMoraCostPerLevel.json');
        const data = await res.json();
        setArtifactMoraCostPerLevel(data);
    }

    switch (view) {
        case "ascCalc":
            return (
                <div className="App container-fluid">
                    <Navbar setView={setView} />
                    <AscensionCalc />
                </div>
            )
        
        case "spentMoraCalc":
            return (
                <div className="App container-fluid">
                    <Navbar setView={setView} />
                    <SpentMoraCalc 
                        setFileData={setFileData}
                        weaponsRarityData={weaponsRarityData}
                        weaponMoraCostPerLevel={weaponMoraCostPerLevel} 
                        characterMoraCostPerLevel={characterMoraCostPerLevel} 
                        artifactMoraCostPerLevel={artifactMoraCostPerLevel} 
                        weapons={weapons}
                        characters={characters}
                        artifacts={artifacts}
                    />
                </div>
            )
    
        default:
            return (
                <div className="App container-fluid">
                    <Navbar setView={setView} />
                    <PrimoCalculatorInputs />
                </div>
            )
    }

}

export default App;
