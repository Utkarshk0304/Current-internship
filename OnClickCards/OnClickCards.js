import classes from './OnClickCards.module.css'
import RenderCards from '../RenderOnClick/RederCards';
import React, {useState} from 'react';
const OnClickCards = (props) => {
    const [active, setActive] = useState();

    const buttonsInfo = [{
        id: "1",
        description: "One Button"
    }, {
        id: "2",
        description: "Two Button"
    }, {
        id: "3",
        description: "Three Button"
    }, {
        id: "4",
        description: "4 Buttons 1 Fasten"
    }, {
        id: "5",
        description: "4 Buttons 2 Fasten"
    }, {
        id: "6",
        description: "4 Buttons 2 Fasten"
    }, { 
        id: "7",
        description: "4 Buttons 2 Fasten"
    }];

   
    // const selectedOption=(event)=>{
    //     return(
    //   props.SelectedOption(event))
    // //   console.log(event);
    // }

    return (
        <div className={classes['optionCards']}>
            <p className={classes['ButtonNames']}>Buttons</p>
            {buttonsInfo.map((info) => (<RenderCards key={info.id} id={info.id} description={info.description} state={active} stateUpdate={setActive}
             SelectedOption={props.SelectedOption} 
             >
            </RenderCards>
            ))}</div>
    )
}
export default OnClickCards;