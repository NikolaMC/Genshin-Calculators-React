import React, { useState, useEffect } from 'react'
import UploadFile from './UploadFile';
import MoraResults from './MoraResults';
import Weapon from './Weapon';
import Character from './Character';
import Artifact from './Artifact';

const SpentMoraCalc = () => {

    const [fileData, setFileData] = useState({
        weapons: [],
        characters: [],
        artifacts: []
    });
    const [weaponsRarityData] = useState({
        "fiveStar": [
            "AquilaFavonia",
            "SkywardBlade",
            "SummitShaper",
            "PrimordialJadeCutter",
            "FreedomSworn",
            "MistsplitterReforged",
            "SkywardPride",
            "WolfsGravestone",
            "TheUnforged",
            "SongOfBrokenPines",
            "RedhornStonethresher",
            "VortexVanquisher",
            "PrimordialJadeWingedSpear",
            "SkywardSpine",
            "StaffOfHoma",
            "EngulfingLightning",
            "CalamityQueller",
            "SkywardHarp",
            "AmosBow",
            "ElegyForTheEnd",
            "ThunderingPulse",
            "PolarStar",
            "LostPrayerToTheSacredWinds",
            "SkywardAtlas",
            "MemoryOfDust",
            "EverlastingMoonglow",
            "KagurasVerity"
        ],
        "fourStar": [
            "BlackcliffLongsword",
            "FavoniusSword",
            "IronSting",
            "LionsRoar",
            "PrototypeRancour",
            "RoyalLongsword",
            "SacrificialSword",
            "TheAlleyFlash",
            "TheBlackSword",
            "TheFlute",
            "SwordOfDescension",
            "FesteringDesire",
            "AmenomaKageuchi",
            "CinnabarSpindle",
            "BlackcliffSlasher",
            "FavoniusGreatsword",
            "LithicBlade",
            "PrototypeArchaic",
            "Rainslasher",
            "RoyalGreatsword",
            "SerpentSpine",
            "TheBell",
            "Whiteblind",
            "SacrificialGreatsword",
            "SnowTombedStarsilver",
            "KatsuragikiriNagamasa",
            "LuxuriousSeaLord",
            "Akuoumaru",
            "BlackcliffPole",
            "CrescentPike",
            "Deathmatch",
            "DragonsBane",
            "LithicSpear",
            "PrototypeStarglitter",
            "FavoniusLance",
            "RoyalSpear",
            "DragonspineSpear",
            "KitainCrossSpear",
            "TheCatch",
            "WavebreakersFin",
            "TheStringless",
            "AlleyHunter",
            "BlackcliffWarbow",
            "CompoundBow",
            "FavoniusWarbow",
            "PrototypeCrescent",
            "RoyalBow",
            "Rust",
            "SacrificialBow",
            "TheViridescentHunt",
            "WindblumeOde",
            "MitternachtsWaltz",
            "Hamayumi",
            "MouunsMoon",
            "Predator",
            "BlackcliffAgate",
            "FavoniusCodex",
            "MappaMare",
            "PrototypeAmber",
            "RoyalGrimoire",
            "SacrificialFragments",
            "SolarPearl",
            "TheWidsith",
            "WineAndSong",
            "EyeOfPerception",
            "Frostbearer",
            "DodocoTales",
            "HakushinRing",
            "OathswornEye"
        ],
        "threeStar": [
            "CoolSteel",
            "DarkIronSword",
            "FilletBlade",
            "HarbingerOfDawn",
            "SkyriderSword",
            "TravelersHandySword",
            "BloodtaintedGreatsword",
            "DebateClub",
            "FerrousShadow",
            "SkyriderGreatsword",
            "WhiteIronGreatsword",
            "BlackTassel",
            "Halberd",
            "WhiteTassel",
            "Messenger",
            "RavenBow",
            "RecurveBow",
            "SharpshootersOath",
            "Slingshot",
            "EmeraldOrb",
            "MagicGuide",
            "OtherworldlyStory",
            "ThrillingTalesOfDragonSlayers",
            "TwinNephrite"
        ]
    });
    const [weaponMoraCostPerLevel] = useState({"fiveStar": {"2": 60,"3": 160,"4": 300,"5": 480,"6": 720,"7": 1000,"8": 1360,"9": 1780,"10": 2280,"11": 2840,"12": 3500,"13": 4240,"14": 5060,"15": 5980,"16": 7000,"17": 8140,"18": 9360,"19": 10700,"20": 12160,"21": 23740, "22": 25520, "23": 27440, "24": 29500, "25": 31700, "26": 34040, "27": 36540, "28": 39180, "29": 41980, "30": 44960, "31": 48080, "32": 51400, "33": 54880, "34": 58540, "35": 62380, "36": 66400, "37": 70620, "38": 75020, "39": 79640, "40": 84440, "41": 109460, "42": 114940, "43": 120660, "44": 126600, "45": 132780, "46": 139180, "47": 145840, "48": 152720, "49": 159800, "50": 167260, "51": 204900, "52": 213220, "53": 221800, "54": 230660, "55": 239820, "56": 249260, "57": 259000, "58": 269040, "59": 279380, "60": 290020, "61": 345980, "62": 357820, "63": 369980, "64": 382500, "65": 395360, "66": 408560, "67": 422120, "68": 436020, "69": 450300, "70": 464940, "71": 534940, "72": 551100, "73": 567640, "74": 584600, "75": 601960, "76": 619720, "77": 637900, "78": 656500, "79": 675520, "80": 694980, "81": 779860, "82": 803340, "83": 829720, "84": 859360, "85": 892660, "86": 930060, "87": 972040, "88": 1019180, "89": 1072080, "90": 1131460 }, "fiveStarAsc": { "20": 10000, "40": 20000, "50": 30000, "60": 45000, "70": 55000, "80": 65000 }, "fourStar": { "2": 40, "3": 120, "4": 200, "5": 320, "6": 480, "7": 680, "8": 900, "9": 1180, "10": 1520, "11": 1900, "12": 2340, "13": 2820, "14": 3380, "15": 4000, "16": 4680, "17": 5420, "18": 6240, "19": 7140, "20": 8100, "21": 14160, "22": 15340, "23": 16620, "24": 18000, "25": 19460, "26": 21020, "27": 22680, "28": 24460, "29": 26320, "30": 28300, "31": 30380, "32": 32600, "33": 34920, "34": 37340, "35": 39900, "36": 42600, "37": 45400, "38": 48340, "39": 51420, "40": 54620, "41": 72960, "42": 72620, "43": 80420, "44": 84380, "45": 88500, "46": 92780, "47": 97200, "48": 101800, "49": 106560, "50": 111500, "51": 136600, "52": 142140, "53": 147860, "54": 153760, "55": 159860, "56": 166160, "57": 172660, "58": 179340, "59": 186240, "60": 193340, "61": 230640, "62": 238520, "63": 246640, "64": 254980, "65": 263560, "66": 272360, "67": 281400, "68": 290660, "69": 300180, "70": 309940, "71": 354940, "72": 365720, "73": 376740, "74": 388040, "75": 399620, "76": 411460, "77": 423580, "78": 435980, "79": 448660, "80": 461620, "81": 519880, "82": 535540, "83": 553120, "84": 572880, "85": 595080, "86": 620000, "87": 648000, "88": 679420, "89": 714700, "90": 754280 }, "fourStarAsc": { "20": 5000, "40": 15000, "50": 20000, "60": 30000, "70": 35000, "80": 45000 }, "threeStar": { "2": 40, "3": 80, "4": 140, "5": 220, "6": 320, "7": 440, "8": 600, "9": 780, "10": 1000, "11": 1260, "12": 1540, "13": 1860, "14": 2240, "15": 2640, "16": 3080, "17": 3580, "18": 4120, "19": 4720, "20": 5360, "21": 11040, "22": 11840, "23": 12680, "24": 13580, "25": 14540, "26": 15580, "27": 16680, "28": 17840, "29": 19080, "30": 20380, "31": 21760, "32": 23220, "33": 24740, "34": 26360, "35": 28040, "36": 29820, "37": 31680, "38": 33620, "39": 35640, "40": 37760, "41": 49960, "42": 52380, "43": 54880, "44": 57500, "45": 60220, "46": 63040, "47": 65960, "48": 69000, "49": 72140, "50": 75400, "51": 93760, "52": 97420, "53": 101180, "54": 105080, "55": 109120, "56": 113280, "57": 117560, "58": 121980, "59": 126520, "60": 131200, "61": 156020, "62": 161240, "63": 166600, "64": 172100, "65": 177760, "66": 183560, "67": 189520, "68": 195640, "69": 201920, "70": 208360, "71": 239980, "72": 247080, "73": 254360, "74": 261820, "75": 269460, "76": 277260, "77": 285260, "78": 293460, "79": 301820, "80": 310380, "81": 349125, "82": 359450, "83": 371060, "84": 384100, "85": 398750, "86": 415205, "87": 433685, "88": 454425, "89": 477700, "90": 503820 }, "threeStarAsc": { "20": 5000, "40": 10000, "50": 15000, "60": 20000, "70": 25000, "80": 30000 }});
    const [characterMoraCostPerLevel] = useState({"character": { "2": 200, "3": 400, "4": 800, "5": 1200, "6": 1600, "7": 2200, "8": 3000, "9": 4000, "10": 5000, "11": 6000, "12": 7400, "13": 8800, "14": 10400, "15": 12200, "16": 14200, "17": 16200, "18": 18600, "19": 21200, "20": 24000, "21": 47000, "22": 50200, "23": 53800, "24": 57800, "25": 61800, "26": 66200, "27": 70800, "28": 75800, "29": 81000, "30": 86600, "31": 92400, "32": 98400, "33": 105000, "34": 111600, "35": 118800, "36": 126200, "37": 134000, "38": 142200, "39": 150800, "40": 159600, "41": 208800, "42": 219000, "43": 229600, "44": 240400, "45": 251800, "46": 263600, "47": 276000, "48": 288600, "49": 301800, "50": 315400, "51": 389600, "52": 404800, "53": 420600, "54": 437000, "55": 453800, "56": 471200, "57": 489200, "58": 507600, "59": 526600, "60": 546200, "61": 646400, "62": 668200, "63": 690600, "64": 713600, "65": 737400, "66": 761600, "67": 786600, "68": 812200, "69": 838400, "70": 865400, "71": 993000, "72": 1022800, "73": 1053200, "74": 1084400, "75": 1116400, "76": 1149200, "77": 1182600, "78": 1217000, "79": 1252000, "80": 1287800, "81": 1444400, "82": 1487600, "83": 1536200, "84": 1591000, "85": 1652200, "86": 1721200, "87": 1798600, "88": 1885400, "89": 1983000, "90": 2092400 }, "characterAsc": { "20": 20000, "40": 40000, "50": 60000, "60": 80000, "70": 100000, "80": 120000 }, "talents": { "2": 12500, "3": 17500, "4": 25000, "5": 30000, "6": 37500, "7": 120000, "8": 260000, "9": 450000, "10": 700000 } });
    const [artifactMoraCostPerLevel] = useState({"fiveStar": { "1": 3000, "2": 6725, "3": 11150, "4": 16300, "5": 22200, "6": 28875, "7": 36375, "8": 44725, "9": 53950, "10": 64075, "11": 75125, "12": 87150, "13": 100175, "14": 115325, "15": 132925, "16": 153300, "17": 176800, "18": 203850, "19": 234900, "20": 270475 }, "fourStar": { "1": 2400, "2": 5375, "3": 8925, "4": 13050, "5": 17775, "6": 23125, "7": 29125, "8": 35800, "9": 43175, "10": 51275, "11": 60125, "12": 69750, "13": 80175, "14": 92300, "15": 106375, "16": 122675 }, "threeStar": { "1": 1800, "2": 4025, "3": 6675, "4": 9775, "5": 13325, "6": 17325, "7": 21825, "8": 26825, "9": 32350, "10": 38425, "11": 45050, "12": 52275 } });
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

    const [totalUpgradeCost, setTotalUpgradeCost] = useState(0);
    const [totalWeaponUpgradeCost, setTotalWeaponUpgradeCost] = useState(0);
    const [totalCharacterUpgradeCost, setTotalCharacterUpgradeCost] = useState(0);
    const [totalTalentUpgradeCost, setTotalTalentUpgradeCost] = useState(0);
    const [totalArtifactUpgradeCost, setTotalArtifactUpgradeCost] = useState(0);

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
                    <a className='btn btn-outline-light mb-2 col-3' href='https://github.com/Andrewthe13th/Inventory_Kamera'>Inventory Kamera</a>
                    <a className='btn btn-outline-light col-3' href='https://github.com/D1firehail/AdeptiScanner-GI'>AdeptiScanner</a>
                </div>
                <p>Although the usage of these tools is virtually undetectable, just as with any tool that indirectly interacts with the game, there could still be a risk with using them</p>
                <a className='btn btn-outline-light' href='https://genshin.hoyoverse.com/en/news/detail/5763'>MiHoYo's official response to Script, Plug-In, and Third-Party Software Issues</a>
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