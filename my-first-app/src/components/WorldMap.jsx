import React from "react";
import {VectorMap} from "react-jvectormap";
import { BrowserRouter, Link } from "react-router-dom";
import "./World_Map.css"


    const mapData ={
      // Asia = 1, MiddleEast=20, SouthAmerica = 3, CentralAmerica=400
      // NorthAmerica=5, Europe=6, Africa=70, Caribbean=8, Africa=9
      // Oceania = 10

        AD: 6,
        AE: 20,
        AF: 1,
        AG: 8,
        AI: 8,
        AM: 20,
        AL: 6,
        AO: 70,
        AR: 3,
        AS: 10,
        AT: 6,
        AU: 10,
        AW: 8,
        AX: 6,
        AZ: 20,
        BA: 6,
        BB: 8,
        BD: 1,
        BE: 6,
        BF: 70,
        BG: 6,
        BH: 20,
        BI: 70,
        BJ: 70,
        BM: 8,
        BN: 1,
        BO: 3,
        BS: 8,
        BW: 70,
        BY: 6,
        BZ: 400,
        
        CD: 70,
        CF: 70,
        CG: 70,
        CH: 6,
        CI: 70,
        CK: 10,
        CL: 3,
        CM: 70,
        CN: 1,
        CO: 3,
        CR: 400,
        CU: 8,
        CV: 70,
        CW: 8,
        CY: 6,
        CZ: 6,
        DE: 6,
        DJ: 70,
        DK: 6,
        DM: 8,
        DO: 8,
        DZ: 70,
        EC: 3,
        EE: 6,
        EG: 70,
        EH: 70,
        ER: 70,
        ES: 6,
        ET: 70,
        FI: 6,
        FJ: 10,
        FK: 3,
        FM: 10,
        FO: 10,
        FR: 6,
        GA: 70, 
        GB: 6,
        GD: 8,
        GE: 20,
        GF: 3,
        GG: 6,
        GH: 70,
        GI: 70,
        GM: 70,
        GN: 70,
        GP: 8,
        GQ: 70,
        GR: 6,
        GS: 3,
        GT: 400,
        GU: 10,
        GW: 70,
        GY: 3,
        HK: 1,
        HM: 10,
        HN: 400,
        HR: 6,
        HT: 8,
        HU: 6,
        ID: 1,
        IE: 6,
        IL: 20,
        IM: 6,
        IN: 1,
        IO: 1,
        IQ: 20,
        IR: 20,
        IS: 6,
        IT: 6,
        JE: 6,
        JM: 8,
        JO: 20,
        JP: 1,
        KE: 70,
        KG: 1,
        KH: 1,
        KI: 10,
        KM: 70,
        KN: 8,
        KP: 1, 
        KR: 1,
        KW: 20,
        KY: 8,
        KZ: 1,
        LA: 1,
        LB: 20,
        LC: 8,
        LI: 6,
        LK: 1,
        LR: 70,
        LS: 70,
        LT: 6,
        LU: 6,
        LV: 6,
        LY: 70,
        MA: 70,
        MC: 6,
        MD: 6,
        ME: 6,
        MF: 8,
        MG: 70,
        MH: 10,
        MK: 6,
        ML: 70,
        MM: 1,
        MN: 1,
        MO: 1,
        MP: 10,
        MQ: 8,
        MR: 70,
        MS: 8,
        MT: 6,
        MU: 70,
        MV: 1,
        MW: 70,
        MY: 1,
        MZ: 70,
        NA: 70,
        NC: 10,
        NE: 70,
        NG: 70,
        NI: 400,
        NL: 6,
        NO: 6,
        NZ: 10,
        NP: 1,
        OM: 20,
        PA: 400,
        PE: 3,
        PF: 10,
        PG: 10,
        PH: 1,
        PL: 6,
        PK: 1,
        PM: 10,
        PR: 8,
        PS: 20,
        PT: 6,
        PW: 10,
        PY: 3,
        QA: 20,
        RO: 6,
        RS: 6,
        RU: 1,
        RW: 70,
        SA: 20,
        SO: 10,
        SC: 70,
        SD: 70,
        SE: 6,
        SG: 1,
        SH: 10,
        SI: 6,
        SJ: 6,
        SK: 6,
        SL: 70,
        SM: 6,
        SN: 70,
        SO: 70,
        SR: 3,
        SS: 70,
        ST: 10,
        SV: 400,
        SX: 8,
        SY: 20,
        SZ: 70,
        TC: 8,
        TD: 70,
        TF: 3,
        TL: 1,
        TJ: 1,
        TG: 70,
        TH: 1,
        TK: 10,
        TM: 1,
        TN: 70,
        TR: 20,
        TO: 10,
        TT: 8,
        TV: 10,
        TW: 1,
        TZ: 70,
        UA: 6,
        UG: 70,
        UY: 3,
        UZ: 1,
        VA: 6,
        VC: 8,
        VE: 3,
        VG: 8,
        VI: 8,
        VN: 1,
        VU: 10,
        WF: 10,
        WS: 10,
        YE: 20,
        YT: 70,
        ZA: 70,
        ZM: 70,
        ZW: 70,
        BR: 3,
        BT: 1,
        XK: 6,
        XS: 70,
        SB: 10

    }
    

    const handleClick = (e, countryCode)=>{
        console.log(countryCode)}
    

    
    const Home = () => {
        return (
            <div>
                <h1>Search the map to see the different countries of the world.
                    <br />
                    Click on the map to search for some global Recipes!
                </h1>
                <Link to="/recipe_results_page" onClick={() => handleClick()}>
                <VectorMap
                map={"world_mill"}
                backgroundColor="#c4d9e4"
                onClick="/Recipes"
        containerStyle={{
            width: "100%",
            height: "520px"
        }}
        onRegionClick={handleClick} //gets the country code
        containerClassName="map"
        regionStyle={{
            initial: {
            fill: "#deab2c",
            "fill-opacity": 0.9,
            stroke: "fill",
            "stroke-width": "20px",
            "stroke-opacity": 1,
            },
            hover: {
            "fill-opacity": 0.5,
            
            cursor: "pointer"
            },
            selected: {
            fill: "#723D46" //color for the clicked country
            },
            selectedHover: {}
        }}
        regionsSelectable={true}
        series={{
            regions: [
            {
              values: mapData, //this is your data
              scale: ["#E26D5C","e35966"], //your color game's here
                normalizeFunction: "polynomial"
            }
            ]
        }}
        />
        </Link>
        <h2>Click on a region below to find out more about the local cuisine</h2>
        <Link to={"/Central-America"}>
        <button id="ca">Central America</button>
        </Link> 
        <Link to={"/South-America"}>
        <button id="sa">South America</button>
        </Link>
        <Link to={"/North-America"}>
        <button id="na">North America</button>
        </Link>
        <Link to={"/Caribbean"}>
        <button id="cb">Caribbean</button>
        </Link>
        <Link to={"/Africa"}>
        <button id="af">Africa</button>
        </Link>
        <Link to={"/Europe"}>
        <button id="eu">Europe</button>
        </Link>
        <Link to={"/Middle-East"}>
        <button id="me">Middle East</button>
        </Link>
        <Link to={"/Asia"}>
        <button id="as">Asia</button>
        </Link> 
        <Link to={"/Oceania-Australia"}>
        <button id="oc">Oceania</button>
        </Link>
    </div>
    );
}

export default Home;

