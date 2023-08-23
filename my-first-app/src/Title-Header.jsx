import React from "react";

export default function Title() {
    return (
        <div>
            <svg height="130" width="500">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "rgb(255,255,0)", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "rgb(255,0,0)", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
                <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
                <text fill="#ffffff" fontSize="45" fontFamily="Verdana" x="50" y="86">
                    The World's Delights
                </text>
            </svg>
            
        </div>
    );
}
