import React,{ useState,useContext }  from 'react'
import classes from './Suit.module.css'
import three from './11/3.png'
import completed from './11/completed.png'
import twenty3 from './11/23.png'
import twenty2 from './11/22.png'
import twenty1 from './11/21.png'
import twenty4 from './11/24.png'
import fifteen from './11/15.png'
import fourteen from './11/14.png'
import one from './11/1.png'
import two from './11/2.png'
import four from './11/4.png'
import five from './11/5.png'
import six from './11/6.png'
import seven from './11/7.png'
import eight from './11/8.png'
import nine from './11/9.png'
import ten from './11/10.png'
import eleven from './11/11.png'
import twelve from './11/12.png'
import thirteen from './11/13.png'
import sixteen from './11/16.png'
import seventeen from './11/17.png'
import eightteen from './11/18.png'
import nineteen from './11/19.png'
import twenty from './11/20.png'
import LargeLapelLeft from './22/largerLapel.png'
import largeLapelRight from './22/largeLapelRight.png'
import UpdateSelectedOption from '../../store/auth-context'
// import ten from './11/10.png'




const Suit = (props) => {
  // const[visible,notVisible]=useState(false);
  // props.suitState(notVisible);
  const[ctx]=useContext(UpdateSelectedOption);
  return (
    <div className={classes['container']}>
        {/* <img className={classes['img1']} src={completed} alt='error'></img> */}
        {/* <img className={classes['img2']} src={three} alt='error'></img> */}
        <img className={classes['img2']} src={twenty3} alt='error'></img>
        <img className={classes['img2']} src={twenty2} alt='error'></img>
        <img className={classes['img2']} src={twenty1} alt='error'></img>
        <img className={classes['img2']} src={twenty4} alt='error'></img>
         <img className={classes['img2']} src={fifteen} alt='error'></img>
       <img className={classes['img2']} src={fourteen} alt='error'></img>
         <img className={classes['img2']} src={one} alt='error'></img>
        <img className={classes['img2']} src={two} alt='error'></img>
        <img className={classes['img2']} src={four} alt='error'></img>
        <img className={classes['img2']} src={five} alt='error'></img>
        <img className={classes['img2']} src={six} alt='error'></img>
        <img className={classes['img2']} src={seven} alt='error'></img>
        <img className={classes['img2']} src={eight} alt='error'></img>
        <img className={classes['img2']} src={nine} alt='error'></img>
        <img className={classes['img2']} src={ten} alt='error'></img>
        <img className={classes['img2']} src={eleven} alt='error'></img>
        <img className={classes['img2']} src={twelve} alt='error'></img>

        <img className={classes['img2']} src={thirteen} alt='error'></img>
        <img className={classes['img2']} src={sixteen} alt='error'></img>
        <img className={classes['img2']} src={seventeen} alt='error'></img>
        <img className={classes['img2']} src={eightteen} alt='error'></img>
        <img className={classes['img2']} src={nineteen} alt='error'></img>
        <img className={classes['img2']} src={twenty} alt='error'></img>

      {ctx.demoButton &&<img img className={classes['img3']} src={largeLapelRight} alt='error'></img>}
       {ctx.demoButton && <img  className={classes['img3']} src={LargeLapelLeft} alt='error'></img>}


    </div>
  )
}

export default Suit