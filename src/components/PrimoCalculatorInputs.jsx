import React from "react";

const PrimoCalculatorInputs = ({ calcData, onChangeHandlerCalcData, calculateWishes, wishResults }) => {
    return (
        <div className="col-md-7 col-lg-8 p-3 g-3 mt-3 mx-auto shadow border border-dark rounded calc-box">
            <div className="row g-3 align-items-center justify-content-center mb-1">
                <div className="col-auto">
                    <label htmlFor="current-primos-id" className="col-form-label">Current primogems:</label>
                </div>
                <div className="col-10 col-sm-auto">
                    <input type="number" id="current-primos-id" className="form-control" name="currentPrimos" min="0" defaultValue={calcData.currentPrimos} onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1" title="Any primogems that you have not yet gotten from stuff like events, promo codes etc.">
                <div className="col-auto">
                    <label htmlFor="extra-primos-id" className="col-form-label">Extra primogems:</label>
                </div>
                <div className="col-10 col-sm-auto">
                    <input type="number" id="extra-primos-id" className="form-control" name="extraPrimos" min="0" defaultValue={calcData.extraPrimos} onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1">
                <div className="col-auto">
                    <label htmlFor="current-starglitter-id" className="col-form-label">Current starglitter:</label>
                </div>
                <div className="col-10 col-sm-auto">
                    <input type="number" id="current-starglitter-id" className="form-control" name="currentStarglitter" min="0" defaultValue={calcData.currentStarglitter} onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1">
                <div className="col-auto">
                    <label htmlFor="current-fates-id" className="col-form-label">Current fates:</label>
                </div>
                <div className="col-10 col-sm-auto">
                    <input type="number" id="current-fates-id" className="form-control" name="currentFates" min="0" defaultValue={calcData.currentFates} onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1">
                <div className="col-auto">
                    <label htmlFor="current-pity-id" className="col-form-label">Current pity:</label>
                </div>
                <div className="col-10 col-sm-auto">
                    <input type="number" id="current-pity-id" className="form-control" name="currentPity" min="0" defaultValue={calcData.currentPity} onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1" title="Abyss floors that you have not yet completed. Assumes full three stars per floor - 200 primogems per floor">
                <div className="col-auto">
                    <label htmlFor="abyss-floors-id" className="col-form-label">Abyss floors:</label>
                </div>
                <div className="col-10 col-sm-auto">
                    <input type="number" id="abyss-floors-id" className="form-control" name="abyssFloors" min="0" defaultValue={calcData.abyssFloors} onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1" title="Imaginarium Theater acts that you have not yet completed. Select the floor from the dropdown and then enter the number of times it should be counted as cleared in the input box">
                <div className="col-auto">
                    <label htmlFor="imaginarium-theater-id" className="col-form-label">Imaginarium Theater Floors:</label>
                </div>
                <div className="col-10 col-sm-auto">
                    <select className="form-select mb-1" id="imaginarium-theater-dropdown-id" name="theaterAct" onChange={onChangeHandlerCalcData}>
                        <option value="1">Floor 1</option>
                        <option value="2">Floor 2</option>
                        <option value="3">Floor 3</option>
                        <option value="4">Floor 4</option>
                        <option value="5">Floor 5</option>
                        <option value="6">Floor 6</option>
                        <option value="7">Floor 7</option>
                        <option value="8">Floor 8</option>
                        <option value="9">Floor 9</option>
                        <option value="10">Floor 10</option>
                    </select>
                    <input type="number" id="imaginarium-theater-id" className="form-control" name="theaterActsRepeat" min="0" defaultValue={calcData.theaterActsRepeat} onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1" title="How many days of Welkin Moon or commissions do you want to add if those boxes are checked">
                <div className="col-auto">
                    <label htmlFor="days-id" className="col-form-label">Number of days:</label>
                </div>
                <div className="col-10 col-sm-auto">
                    <input type="number" id="days-id" className="form-control" name="days" min="0" defaultValue={calcData.days} onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center my-1" title="Will automatically add 5 wishes for every shop reset that's within the range of given number of days. May not be 100% accurate">
                <div className="col-auto">
                    <label htmlFor="add-stardust-wishes-id" className="form-check-label">Auto add stardust wishes:</label>
                </div>
                <div className="col-1 col-sm-auto">
                    <input type="checkbox" id="add-stardust-wishes-id" className="form-check-input" name="addStardustWishes" onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center">
                <div className="col-auto">
                    <label htmlFor="welkin-id" className="form-check-label">Welkin Moon:</label>
                </div>
                <div className="col-1 col-sm-auto">
                    <input type="checkbox" id="welkin-id" className="form-check-input" name="welkin" onChange={onChangeHandlerCalcData} />
                </div>
                <div className="col-auto">
                    <label htmlFor="commissions-id" className="form-check-label">Commissions:</label>
                </div>
                <div className="col-1 col-sm-auto">
                    <input type="checkbox" id="commissions-id" className="form-check-input" name="commissions" onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center col-lg-3 cl-md-6 mx-auto my-1 shadow">
                <button type="button" className="btn btn-outline-light" onClick={calculateWishes}>Calculate</button>
            </div>

            <div className="row g-3 align-items-center text-center mt-1">
                <p>
                    Available wishes: {wishResults.availableWishes}<br/>
                    Pulls until first hard pity from current pity: {wishResults.toFirstHardPity}<br/>
                    Wishes left after first hard pity: {wishResults.afterFirstHardPity}
                </p>
                <p><i>You can hover over some fields to get an explanation of what they do if you are confused</i></p>
            </div>

        </div>
    )
}

export default PrimoCalculatorInputs;