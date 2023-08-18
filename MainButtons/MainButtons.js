import classes from './MainButtons.module.css'
import Fit from '../Fit/Fit'
import Button from '../Button/Buttons'
import Lapel from '../Lapel/Lapel'
import Pocket from '../Pockets/Pocket'
import Vents from '../Vents/Vents'
import React, {useState,Fragment} from 'react';
import { Transition } from "react-transition-group";


const MainButtons=(props)=>{
    const [jacket, setJacket] = useState(false);
    const [trousers, setTrousers] = useState(false);
    const [addOns, setAddOns] = useState(false);
     const [canvas, setCanvas] = useState(false);
    const JacketHandler=()=>{
        setJacket(false);
        setTrousers(false);
        setAddOns(false);
        setCanvas(false);
    }
    const TrousersHandler=()=>{
        setJacket(true);
        setTrousers(true);
        setAddOns(false);
        setCanvas(false);
    }
    const AddOnsHandler=()=>{
        setJacket(true);
        setTrousers(false);
        setAddOns(true);
        setCanvas(false);
    }
    const CanvasHandler=()=>{
        setJacket(true);
        setTrousers(false);
        setAddOns(false);
        setCanvas(true);
    }

    const DisplayNone=()=>{
        if(props.fitButton===true){
        return(<Fit style={{display: true ? 'none':''}}></Fit>)}
        if(props.demoButton===true){
            return(<Button style={{display: true ? 'none':''}}></Button>)}
        
}

    

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,

        display: "inline-block",
        backgroundColor: "white"
    };

    const transitionStyles = {
        entering: { opacity: 0 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 0 },
    };
    
   
return(
    <React.Fragment >
       
<div className={classes["to-fix-button"]} style={{display: props.fitButton|| props.demoButton ? 'none':''} } >
                <button type="button" className={classes["button-button"]} onClick={JacketHandler}>Jacket</button>
                <button type="button" className={classes["button-button"]} onClick={TrousersHandler}>Trousers</button>
                <button type="button" className={classes["button-button"]} onClick={AddOnsHandler}>AddOns</button>
                <button type="button" className={classes["button-button"]} onClick={CanvasHandler}>Canvas</button>
            </div>
                
            <Transition in={!jacket} timeout={300}>
                    {(state) => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >
                {!jacket &&
                <div className={classes['subButtons']} style={{display: props.fitButton || props.demoButton ? 'none':''}} >
                    <h3> Customize Your Jacket</h3>
                    <Fit setfitButton={props.setfitButton} selectedOption={props.selectedOption}></Fit>
                    <Button setDemoButton={props.setDemoButton}></Button>
                    <Lapel ></Lapel>
                    <Pocket ></Pocket>
                    <Vents ></Vents>
                    <Pocket ></Pocket>
                    <Vents ></Vents>
                    <Pocket ></Pocket>
                    <Vents ></Vents>
                    <Pocket ></Pocket>
                    <Vents ></Vents>


                   
                    
                </div>}
                </div>
                    )}
                </Transition>

                <Transition in={trousers} timeout={300}>
                    {(state) => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >

                {trousers &&
                <div className={classes['subButtons']}>
                    <h3> Customize Your Trousers</h3>
                    <Fit ></Fit>
                    <Button ></Button>
                    <Lapel ></Lapel>
                    <Pocket ></Pocket>
                    <Vents ></Vents>
                    
                </div>}
                </div>
                    )}
                </Transition>

                <Transition in={addOns} timeout={300}>
                    {(state) => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >

                {addOns &&
                <div className={classes['subButtons']}>
                    <h3>Add Something</h3>
                    <Fit ></Fit>
                    <Button ></Button>
                    <Lapel ></Lapel>
                    <Pocket ></Pocket>
                    <Vents ></Vents>
                    
                </div>}
                </div>
                    )}
                </Transition>


                <Transition in={canvas} timeout={300}>
                    {(state) => (
                        <div
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                        >

                {canvas &&
                <div className={classes['subButtons']}>
                    <h3>Choose Canvas</h3>
                    <Fit ></Fit>
                    <Button ></Button>
                    <Lapel ></Lapel>
                    <Pocket ></Pocket>
                    <Vents ></Vents>
                    
                </div>}
                </div>
                    )}
                </Transition>

            
                </React.Fragment>
            
            );
}
export default MainButtons;