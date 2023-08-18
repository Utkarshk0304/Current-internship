const Button=(props)=>{

    const DemoButtonHandler=()=>{
        props.setDemoButton(true);
    }

    return(
        <div onClick={DemoButtonHandler}>
            <p>Button</p>
            <p style={{color:true ? 'grey':''}}>Selected option</p>

        </div>
    );

}
export default Button;