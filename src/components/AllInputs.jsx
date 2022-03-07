import React from "react";

const AllInputs = ({ calcData, wishResults, onChangeHandlerCalcData, calculateWishes, onEnterPress }) => {
    return (
        <div className="col-md-7 col-lg-6 p-3 g-3 mt-3 mx-auto shadow border border-dark rounded calc-box" onKeyPress={onEnterPress} >
            <div className="row g-3 align-items-center justify-content-center mb-1">
                <div className="col-auto">
                    <label htmlFor="current-primos-id" className="col-form-label">Current primogems:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="current-primos-id" className="form-control" name="currentPrimos" min="0" defaultValue={calcData.currentPrimos} onChange={onChangeHandlerCalcData} onKeyPress={onEnterPress} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1" title="Any primogems that you have not yet gotten from stuff like events, promo codes etc.">
                <div className="col-auto">
                    <label htmlFor="extra-primos-id" className="col-form-label">Extra primogems:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="extra-primos-id" className="form-control" name="extraPrimos" min="0" defaultValue={calcData.extraPrimos} onChange={onChangeHandlerCalcData} onKeyPress={onEnterPress} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1">
                <div className="col-auto">
                    <label htmlFor="current-starglitter-id" className="col-form-label">Current starglitter:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="current-starglitter-id" className="form-control" name="currentStarglitter" min="0" defaultValue={calcData.currentStarglitter} onChange={onChangeHandlerCalcData} onKeyPress={onEnterPress} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1">
                <div className="col-auto">
                    <label htmlFor="current-fates-id" className="col-form-label">Current fates:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="current-fates-id" className="form-control" name="currentFates" min="0" defaultValue={calcData.currentFates} onChange={onChangeHandlerCalcData} onKeyPress={onEnterPress} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1">
                <div className="col-auto">
                    <label htmlFor="current-pity-id" className="col-form-label">Current pity:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="current-pity-id" className="form-control" name="currentPity" min="0" defaultValue={calcData.currentPity} onChange={onChangeHandlerCalcData} onKeyPress={onEnterPress} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1" title="Abyss chambers that you have not yet completed, 50 primogems per chamber">
                <div className="col-auto">
                    <label htmlFor="abyss-chambers-id" className="col-form-label">Abyss chambers:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="abyss-chambers-id" className="form-control" name="abyssChambers" min="0" defaultValue={calcData.abyssChambers} onChange={onChangeHandlerCalcData} onKeyPress={onEnterPress} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center mb-1" title="How many days of Welkin Moon or commissions do you want to add if those boxes are checked">
                <div className="col-auto">
                    <label htmlFor="days-id" className="col-form-label">Number of days:</label>
                </div>
                <div className="col-auto">
                    <input type="number" id="days-id" className="form-control" name="days" min="0" defaultValue={calcData.days} onChange={onChangeHandlerCalcData} onKeyPress={onEnterPress} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center my-1" title="Will automatically add 5 wishes for every shop reset that's within the range of given number of days. May not be 100% accurate">
                <div className="col-auto">
                    <label htmlFor="add-stardust-wishes-id" className="form-check-label">Auto add stardust wishes:</label>
                </div>
                <div className="col-auto">
                    <input type="checkbox" id="add-stardust-wishes-id" className="form-check-input" name="addStardustWishes" onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center justify-content-center">
                <div className="col-auto">
                    <label htmlFor="welkin-id" className="form-check-label">Welkin Moon:</label>
                </div>
                <div className="col-auto">
                    <input type="checkbox" id="welkin-id" className="form-check-input" name="welkin" onChange={onChangeHandlerCalcData} />
                </div>
                <div className="col-auto">
                    <label htmlFor="commissions-id" className="form-check-label">Commissions:</label>
                </div>
                <div className="col-auto">
                    <input type="checkbox" id="commissions-id" className="form-check-input" name="commissions" onChange={onChangeHandlerCalcData} />
                </div>
            </div>

            <div className="row g-3 align-items-center col-3 mx-auto my-1 shadow">
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

export default AllInputs;