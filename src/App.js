import { useState } from 'react';
import AllInputs from './components/AllInputs';
import './App.css';
import Navbar from './components/Navbar';
import AscensionCalc from './components/AscensionCalc';

const App = () => {
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

    const [ascCalcData, setAscCalcData] = useState({
        currPurpleMat: 0,
        currBlueMat: 0,
        currGreenMat: 0,
        reqPurpleMat: 0,
        reqBlueMat: 0,
        reqGreenMat: 0,
        radioChecked: "rareMat"
    });

    const [ascCalcResults, setAscCalcResults] = useState({
        neededPurpleMat: 0,
        neededBlueMat: 0,
        neededGreenMat: 0
    });

    const [view, setView] = useState("");

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

    const onChangeHandlerAscCalcData = (e) => {
        if (e.target.type === "radio") {
            setAscCalcData({ ...ascCalcData, radioChecked: e.target.value });
        } else {
            if (e.target.value === "") {
                setAscCalcData({ ...ascCalcData, [e.target.name]: 0 });
            } else {
                setAscCalcData({ ...ascCalcData, [e.target.name]: Math.abs(e.target.value) });
            }
        }
    }

    const onEnterPress = (e) => {
        if (e.key === "Enter") {
            calculateWishes(e);
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
    
    const calculateAscMats = (e) => {
        e.preventDefault();

        let totalCurrGreenMats = ascCalcData.currGreenMat + (ascCalcData.currBlueMat * 3) + (ascCalcData.currPurpleMat * 9);
        let totalReqGreenMats = ascCalcData.reqGreenMat + (ascCalcData.reqBlueMat * 3) + (ascCalcData.reqPurpleMat * 9);

        let currPurpleMat = ascCalcData.currPurpleMat;
        let reqPurpleMat = ascCalcData.reqPurpleMat;
        let currBlueMat = ascCalcData.currBlueMat;
        let reqBlueMat = ascCalcData.reqBlueMat;
        let currGreenMat = ascCalcData.currGreenMat;
        let reqGreenMat = ascCalcData.reqGreenMat;

        if (totalCurrGreenMats < totalReqGreenMats) {
            if (currPurpleMat > reqPurpleMat) {
                setAscCalcResults( ...ascCalcResults, {
                    neededPurpleMat: 0
                });
            } else {
                let reqCurrPurpleDiff = reqPurpleMat - currPurpleMat;
                let blueAndGreenTotal = currBlueMat * 3 + currGreenMat;

                
            }

            // if (ascCalcData.radioChecked === "commonMat") {
                
            // } else if (ascCalcData.radioChecked === "rareMat") {
                
            // }
        } else {
            setAscCalcResults({
                neededPurpleMat: 0,
                neededBlueMat: 0,
                neededGreenMat: 0
            });
            console.log("Required is less than or equal to current");
        }
    }

    switch (view) {
        case "ascCalc":
            return (
                <div className="App container-fluid">
                    <Navbar setView={setView} />
                    <AscensionCalc ascCalcData={ascCalcData} ascCalcResults={ascCalcResults} onChangeHandlerAscCalcData={onChangeHandlerAscCalcData} calculateAscMats={calculateAscMats} />
                </div>
            )
    
        default:
            return (
                <div className="App container-fluid">
                    <Navbar setView={setView} />
                    <AllInputs calcData={calcData} wishResults={wishResults} onChangeHandlerCalcData={onChangeHandlerCalcData} calculateWishes={calculateWishes} onEnterPress={onEnterPress} />
                </div>
            )
    }
}

export default App;
