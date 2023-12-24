import React, { useEffect, useState } from 'react';
import './GameWindow.css';
import Column from '../Column/Column';
import { dimensions } from '../../constants/dimensions';
import { randomIntFromInterval } from '../../Utils/appUtils';
import Tank from '../Tank/Tank';


function GameWindow(props) {

    const [heights,setHeights]=useState([]);

    const generateTerrain=(length,step,max_incr)=>{
        let initialHeight=randomIntFromInterval(1,500);
        let heights=[]
        let incr=0
        for(let i=0;i<length;i++){
            if(i%step===0){
                incr=randomIntFromInterval(-max_incr,max_incr);
                console.log(i,incr)
            }
            initialHeight+=incr
            heights.push(initialHeight.toString()+"px")            
        }
        console.log("hii")
        setHeights(heights);
    }

    useEffect(()=>{
        
            generateTerrain(1000,3,1);
        
        
    },[])
    return (
        <div className='game-window'>
            <Tank/>
            {heights.map((val,idx)=><Column height={val} width={dimensions.column.width} backgroundColor={dimensions.column.backgroundColor}></Column>)}
            
        </div>
    );
}

export default GameWindow;