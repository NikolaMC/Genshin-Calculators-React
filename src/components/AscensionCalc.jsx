import React from 'react';

const AscensionCalc = ({ ascCalcData, ascCalcResults, onChangeHandlerAscCalcData, calculateAscMats }) => {
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