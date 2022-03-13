import React, { useEffect } from 'react';

const MoraResults = ({ totalUpgradeCost, setTotalUpgradeCost, totalWeaponUpgradeCost, totalCharacterUpgradeCost, totalTalentUpgradeCost, totalArtifactUpgradeCost }) => {

    useEffect(() => {
        setTotalUpgradeCost(totalUpgradeCost + totalWeaponUpgradeCost + totalCharacterUpgradeCost + totalTalentUpgradeCost + totalArtifactUpgradeCost);
    }, [totalWeaponUpgradeCost, totalCharacterUpgradeCost, totalTalentUpgradeCost, totalArtifactUpgradeCost]);

    return (
        <div className="text-center mt-3">
            <h4>Total upgrade cost: {totalUpgradeCost.toLocaleString()}</h4>
            <h4>Total weapon upgrade cost (Excluding 1* and 2* weapons): {totalWeaponUpgradeCost.toLocaleString()}</h4>
            <h4>Total character upgrade cost: {totalCharacterUpgradeCost.toLocaleString()}</h4>
            <h4>Total talent upgrade cost: {totalTalentUpgradeCost.toLocaleString()}</h4>
            <h4>Total artifact upgrade cost (Excluding 1* and 2* artifacts): {totalArtifactUpgradeCost.toLocaleString()}</h4>
        </div>
    )

}

export default MoraResults;