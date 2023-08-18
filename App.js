import Navbar from './Components/Navbar/Navbar';
import React, { useState,Fragment } from 'react';
import './App.css';
import HeroSlider from './Components/Carousel/HeroSlider';
import MainButtons from './Components/MainButtons/MainButtons';
import OnClickCards from './Components/OnClickCards/OnClickCards';
import AddToCart from './Components/AddToCart/AddToCart';
import ApplyAndCancel from './Components/ApplyAndCancel/ApplyAndCancel';
import DemoButton from './Components/DemoButton.js/DemoButton';
// import practiceImage from './sq.png'
// import PracticeImage from './Components/PracticeImage/PracticeImage';
import UpdateSelectedOption from './store/auth-context';
import Suit from './Components/Suit/Suit';

function App(props) {
  const[fit,setFit]=useState(false);
  // const[apply,setApply]=useState(false);
  const [demobutton,setButton]=useState(false);

  const SelectedOption=(event)=>{
    // console.log(event);
     return (<MainButtons selectedOption={event} > </MainButtons> )
  }
  // const SuitState=(event)=>{
  //   return(<DemoButton suitState={event}></DemoButton>)
  // }
 
  return (<UpdateSelectedOption value={
    {
      demobutton:demobutton
    }
  }>
  <React.Fragment>
    <div className='RightSideSection'>
      <Navbar></Navbar>
        <MainButtons setfitButton={setFit} fitButton={fit} setDemoButton={setButton} demoButton={demobutton} SelectedOption={SelectedOption}></MainButtons>
   </div>
   
   {/* <HeroSlider>
   
   </HeroSlider> */}
   <Suit ></Suit>

   {fit && <div className='OnclickCards'>
    <OnClickCards SelectedOption={SelectedOption} ></OnClickCards>
    <ApplyAndCancel setfitButton={setFit} setDemoButton={setButton} /*SetApplyClicked={setApply} ApplyClicked={apply}*/ ></ApplyAndCancel>
   </div>}
   {demobutton && <div className='OnclickCards'>
    <DemoButton SelectedOption={SelectedOption}  ></DemoButton>
    <ApplyAndCancel setfitButton={setFit} setDemoButton={setButton} ></ApplyAndCancel>
   </div>}
   <AddToCart fitButton={fit}></AddToCart>

  </React.Fragment>
  </UpdateSelectedOption>
  );
}

export default App;
