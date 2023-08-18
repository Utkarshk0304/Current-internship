import classes from './DemoButton.module.css'
import RenderCards from '../RenderOnClick/RederCards';
import React, {useState} from 'react';
const DemoButton = (props) => {
    const [active, setActive] = useState();
    // const[subButtonOptions,setSubButtonOptions]=useState();

    const buttonsInfo = [{
        id: "1",
        description: "Narrow"
    }, {
        id: "2",
        description: "Normal"
    }, {
        id: "3",
        description: "Wide"
    }];

const subButtonClickHandler=(event)=>{
    console.log(event.id);
}
   
    // const selectedOption=(event)=>{
    //     return(
    //   props.SelectedOption(event))
    // //   console.log(event);
    // }
    return (
        <div className={classes['DemoOptionCards']}>
            <p className={classes['DemoButtonNames']}>Buttons</p>
            {buttonsInfo.map((info) => (<RenderCards key={info.id} id={info.id} description={info.description} state={active} stateUpdate={setActive}
             SelectedOption={props.SelectedOption} //suitState={props.suitState}
             //onClick={subButtonClickHandler}
            
             >
            </RenderCards>
            ))}</div>
    )
}
export default DemoButton;