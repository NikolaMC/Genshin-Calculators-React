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

    const [calcData, setCalcData] = useState({
        currentPrimos: 0,
        extraPrimos: 0,
        currentStarglitter: 0,
        currentFates: 0,
        currentPity: 0,
        abyssChambers: 0,
        days: 0,
        addStardustWishes: false,
        welkin: false,
        commissions: false
    });

    const [wishResults, setWishResults] = useState({
        availableWishes: 0,
        toFirstHardPity: 0,
        afterFirstHardPity: 0
    });

    const onChangeHandlerCalcData = (e) => {
        if (e.target.type === "checkbox") {
            setCalcData({ ...calcData, [e.target.name]: e.target.checked });
        } else {
            if (e.target.value === "") {
                setCalcData({ ...calcData, [e.target.name]: 0 });
            } else {
                setCalcData({ ...calcData, [e.target.name]: Math.abs(e.target.value) });
            }
        }
    }

    const addStardustWishes = () => {
        let wishesToAdd = 0;

        let start = new Date();
        let end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + calcData.days);

        while (start <= end) {
            start.setDate(start.getDate() + 1);

            if (start.getDate() === 1) {
                wishesToAdd += 5;
            }
        }

        return wishesToAdd;
    }

    const calculateWishes = (e) => {
        e.preventDefault();

        let primoSum = 0;

        primoSum += (calcData.currentPrimos + (calcData.abyssChambers * 50)) + ((calcData.currentStarglitter / 5) * 160) + calcData.extraPrimos;

        if (calcData.welkin && calcData.commissions) {
            primoSum += 150 * calcData.days;
        } else if (calcData.commissions) {
            primoSum += 60 * calcData.days;
        } else if (calcData.welkin) {
            primoSum += 90 * calcData.days;
        }

        let wishCount = Math.floor(calcData.currentFates + (primoSum / 160));

        if (calcData.addStardustWishes) {
            wishCount += addStardustWishes();
        }

        let pityLeft = 0;

        if (calcData.currentPity > 0 && calcData.currentPity < 91) {
            pityLeft = 90 - calcData.currentPity;
        } else if (calcData.currentPity > 90) {
            pityLeft = 90;
        } else {
            pityLeft = 90;
        }

        let wishesAfterPity = wishCount - pityLeft;

        if (wishesAfterPity < 0) {
            wishesAfterPity = 0;
        }

        setWishResults({
            availableWishes: wishCount,
            toFirstHardPity: pityLeft,
            afterFirstHardPity: wishesAfterPity
        });
    }

    const [ascCalcData, setAscCalcData] = useState({
        currPurpleMat: 0,
        currBlueMat: 0,
        currGreenMat: 0,
        reqPurpleMat: 0,
        reqBlueMat: 0,
        reqGreenMat: 0
    });

    const [ascCalcResults, setAscCalcResults] = useState({
        neededPurpleMat: 0,
        neededBlueMat: 0,
        neededGreenMat: 0
    });

    const onChangeHandlerAscCalcData = (e) => {
        if (e.target.value === "") {
            setAscCalcData({ ...ascCalcData, [e.target.name]: 0 });
        } else {
            setAscCalcData({ ...ascCalcData, [e.target.name]: Math.abs(e.target.value) });
        }
    }

    const calculateAscMats = (e) => {
        e.preventDefault();

        let currPurpleMat = ascCalcData.currPurpleMat;
        let reqPurpleMat = ascCalcData.reqPurpleMat;
        let currBlueMat = ascCalcData.currBlueMat;
        let reqBlueMat = ascCalcData.reqBlueMat;
        let currGreenMat = ascCalcData.currGreenMat;
        let reqGreenMat = ascCalcData.reqGreenMat;

        let greenRemainder = 0;
        let blueRemainder = 0;

        if (currGreenMat >= reqGreenMat) {
            setAscCalcResults(ascCalcResults => ({
                ...ascCalcResults,
                neededGreenMat: 0
            }));
            greenRemainder = currGreenMat - reqGreenMat;
            if (greenRemainder >= 3) {
                currBlueMat += (greenRemainder - (greenRemainder % 3)) / 3;
            }
        } else if (reqGreenMat > currGreenMat) {
            setAscCalcResults(ascCalcResults => ({
                ...ascCalcResults,
                neededGreenMat: reqGreenMat - currGreenMat
            }));
        }

        if (currBlueMat >= reqBlueMat) {
            setAscCalcResults(ascCalcResults => ({
                ...ascCalcResults,
                neededBlueMat: 0
            }));
            blueRemainder = currBlueMat - reqBlueMat;
            if (blueRemainder >= 3) {
                currPurpleMat += (blueRemainder - (blueRemainder % 3)) / 3;
            }
        } else if (reqBlueMat > currBlueMat) {
            setAscCalcResults(ascCalcResults => ({
                ...ascCalcResults,
                neededBlueMat: reqBlueMat - currBlueMat
            }));
        }

        if (currPurpleMat >= reqPurpleMat) {
            setAscCalcResults(ascCalcResults => ({
                ...ascCalcResults,
                neededPurpleMat: 0
            }));
        } else if (reqPurpleMat > currPurpleMat) {
            setAscCalcResults(ascCalcResults => ({
                ...ascCalcResults,
                neededPurpleMat: reqPurpleMat - currPurpleMat
            }));
        }
    }

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
                    <AscensionCalc 
                        ascCalcData={ascCalcData}
                        onChangeHandlerAscCalcData={onChangeHandlerAscCalcData}
                        calculateAscMats={calculateAscMats}
                        ascCalcResults={ascCalcResults}
                    />
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
                    <PrimoCalculatorInputs
                        calcData={calcData}
                        onChangeHandlerCalcData={onChangeHandlerCalcData}
                        calculateWishes={calculateWishes}
                        wishResults={wishResults}
                    />
                </div>
            )
    }

}

export default App;
