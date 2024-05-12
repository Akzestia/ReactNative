import React, { useEffect, useState } from "react";
import wallp1 from '../images/wallp1.jpg'
import wallp2 from '../images/wallp2.jpg'
import wallp3 from '../images/wallp3.jpg'

export default function useWallp(){
    const Wallps : Map<number, any> = new Map([
        [0, wallp1],
        [1, wallp2],
        [2, wallp3],
    ]);

    const Default = () => {
        return Wallps.get(0);
    }

    const Next = (index: number) => {
        const temp : number = index + 1;
        if(Wallps.has(temp))
            return Wallps.get(temp);
        return Wallps.get(0);
    }

    const Size = () => { return Wallps.size }
    return {
        Next,
        Default,
        Size
    }
}