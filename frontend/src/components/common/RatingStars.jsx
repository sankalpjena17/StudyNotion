import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {
    TiStarFullOutline,
    TiStarHalfOutline,
    TiStarOutline,
  } from "react-icons/ti"

const RatingStars = ({Review_Count , Star_Size}) => {

    const [starCounts ,setStarCounts] = useState({
        full: 0,
        half: 0,
        empty: 0,
    });

    useEffect(()=> {

        const wholeStars = Math.round(Review_Count) || 0 ;

        setStarCounts({
            full : wholeStars ,
            half : Number.isInteger(Review_Count) ? 0 : 1 ,
            empty : Number.isInteger(Review_Count) ? 5 - wholeStars : 4 - wholeStars ,
        })

        // console.log("Empty Stars : " , starCounts.empty);
        // console.log("Half Stars : " , starCounts.half);
        // console.log("Full Stars : " , starCounts.full);


    } , [Review_Count]);


  return (
    <div className="flex gap-1 text-yellow-100">

        {/* full stars */}
        {
            [...new Array(starCounts.full)]?.fill(0).map((_ , index)=> {

                return <TiStarFullOutline  key={index}  size={Star_Size || 20} />
            } )
        }

        {/* half stars */}

        {
            [...new Array(starCounts.half)]?.fill(0).map((_ , index)=> {
                return <TiStarHalfOutline key={index} size={Star_Size || 20} />
            })
        }

        {/* empty stars */}

        {
            [...new Array(starCounts.empty)]?.fill(0).map((_ , index)=> {

                console.log("ARRAY : ",[...new Array(starCounts.empty)] )
                console.log("ARRAY Length : ",[...new Array(starCounts.empty)].length )

                
                return <TiStarOutline key={index} size={Star_Size || 20} />
            })
        }
        
    </div>
  )
}

export default RatingStars