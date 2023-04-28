import React,{Component} from 'react';

export default class ClassComponent extends Component{
    render(){
        return (
        <div className='class-box'>
            <h1 className='txt'>This is created using class Component</h1>
            <p>This is done using external CSS</p>
            <p style={{color:"blue"}}>This is done using inline CSS</p>
        </div>
        );
    }
}