import React from 'react';
// import { useContext } from 'react/cjs/react.development';
import { ColorContext } from './contexts/colorContex';
/*
const Component = ({toogle})=>{
    const {backgroundColor,color} = useContext(ColorContext);
    return (
        <div style={{height:80, width:'100%', backgroundColor:backgroundColor.principal}}>
            <p style={{color:color.principal}}>lazy 2</p>
        </div>
    )
}
*/


class MyClass extends React.Component {
    constructor(props){
        super(props);
        setTimeout(() => {
            props.toogle('light');
        }, 5000);
    }

    static contextType = ColorContext;

    render(){
        const {background,color} = this.context.theme;
        return(
        <div style={{height:80, width:'100%', backgroundColor:background.principal}}>
            <p style={{color:color.principal}}>lazy 2</p>
        </div>
        );
    }

}
export default MyClass;