// import RenderCards from "../RenderOnClick/RederCards";
import React,{useState,Fragment} from 'react';
// import classes from './Fit.module.css'


const Fit=(props)=>{
   const FitButtonHandler=()=>{
    props.setfitButton(true);
   }

    return(
        <React.Fragment>
        <div onClick={FitButtonHandler} >
            <p >Fit</p>
            <p style={{color:true ? 'grey':''}}>Selected Option</p>
        </div>
        </React.Fragment>
    );

}
export default Fit;