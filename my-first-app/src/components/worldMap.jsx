import React, {useEffect, useState} from "react";
import "./World_Map.css"
import {
    ComposibleMap,
    Georgraphies,
    Geography,
    Marker,
    Annotation,
    ZoomableGroup
} from "react-simple-maps"
import ReactToolTip from "react-tooltip";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

var perf =require('./world-map.html');


export default function Home(){
    let[htmlFileString, setHtmlFileString] = useState();

    async function fetchHtml(){
        setHtmlFileString(await(await fetch('world-map.html')).text())
        }
        useEffect(()=>{
            fetchHtml()
        }, [])


    return(
    <div>
        <header class="landing_heading">
            <p class="subheader">Select a Continent/Area on the map below to start exploring some Recipes from around the World!</p>
        </header>
        <div>
            
        </div>
    </div>
    )}