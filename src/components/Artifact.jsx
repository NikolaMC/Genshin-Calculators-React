import React, { useEffect } from 'react';

const Artifact = ({ artifact, getArtifactUpgradeCost, setTotalArtifactUpgradeCost }) => {

    const upgradeCost = getArtifactUpgradeCost(artifact);

    useEffect(() => {
        setTotalArtifactUpgradeCost(totalArtifactUpgradeCost => totalArtifactUpgradeCost + upgradeCost);
    }, []);

    return (
        <div className='card col-3 bg-dark mx-2 mb-3'>
            <div className='card-body'>
                <h4 className='card-title'>{artifact.setKey.replace(/([A-Z])/g, ' $1').trim()}</h4>
                <p className='card-text'><strong>{artifact.slotKey.replace(/^./, function(str){ return str.toUpperCase(); })}</strong></p>
                <p className='card-text'><strong>Lvl:</strong> {artifact.level}</p>
                <p className='card-text'><strong>Total upgrade cost:</strong> {upgradeCost.toLocaleString()}</p>
                <p className='card-text'><strong>Rarity:</strong> {artifact.rarity}</p>
            </div>
        </div>
    )

}

export default Artifact;