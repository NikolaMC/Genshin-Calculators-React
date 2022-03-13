import React, { useState } from 'react';

const AscensionCalc = () => {

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

    return ( 
        <div className="col-md-7 col-lg-8 p-3 g-3 mt-3 mx-auto shadow border border-dark rounded calc-box">
            <div className="row g-3 align-items-center justify-content-center mb-1">
                <div className="col-4">
                    <label htmlFor="current-purple-mat-id" className="col-form-label">Current purple material:</label>
                    <input type="number" id="current-purple-mat-id" className="form-control" name="currPurpleMat" defaultValue={ascCalcData.currPurpleMat} min="0" onChange={onChangeHandlerAscCalcData} />
                </div>
                <div className="col-4">
                    <label htmlFor="current-blue-mat-id" className="col-form-label">Current blue material:</label>
                    <input type="number" id="current-blue-mat-id" className="form-control" name="currBlueMat" defaultValue={ascCalcData.currBlueMat} min="0" onChange={onChangeHandlerAscCalcData} />
                </div>
                <div className="col-4">
                    <label htmlFor="current-green-mat-id" className="col-form-label">Current green material:</label>
                    <input type="number" id="current-green-mat-id" className="form-control" name="currGreenMat" defaultValue={ascCalcData.currGreenMat} min="0" onChange={onChangeHandlerAscCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1">
                <div className="col-4">
                    <label htmlFor="required-purple-mat-id" className="col-form-label">Required purple material:</label>
                    <input type="number" id="required-purple-mat-id" className="form-control" name="reqPurpleMat" defaultValue={ascCalcData.reqPurpleMat} min="0" onChange={onChangeHandlerAscCalcData} />
                </div>
                <div className="col-4">
                    <label htmlFor="required-blue-mat-id" className="col-form-label">Required blue material:</label>
                    <input type="number" id="required-blue-mat-id" className="form-control" name="reqBlueMat" defaultValue={ascCalcData.reqBlueMat} min="0" onChange={onChangeHandlerAscCalcData} />
                </div>
                <div className="col-4">
                    <label htmlFor="required-green-mat-id" className="col-form-label">Required green material:</label>
                    <input type="number" id="required-green-mat-id" className="form-control" name="reqGreenMat" defaultValue={ascCalcData.reqGreenMat} min="0" onChange={onChangeHandlerAscCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center col-3 mx-auto my-1 shadow">
                <button type="button" className="btn btn-outline-light" onClick={calculateAscMats}>Calculate</button>
            </div>

            <div className="row g-3 align-items-center text-center mt-1">
                <p>
                    Materials needed:<br/>
                    Purple: {ascCalcResults.neededPurpleMat}<br/>
                    Blue: {ascCalcResults.neededBlueMat}<br/>
                    Green: {ascCalcResults.neededGreenMat}
                </p>
            </div>

        </div>
    )
}

export default AscensionCalc;