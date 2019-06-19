import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*const style = { 
	backgroundColor: 'gray',
	color: 'orange',
	align: 'center'
};*/

/*const title = React.createElement('h1',
 								{id: 'title', 
 								className: 'header',
 								style: style},   
 								'Hello World'
								);  */

//Simplifying this to using JSX

/*ReactDOM.render(<div style={style}>
					<h1> Hello World </h1>  
				</div>, document.getElementById('root'));      
//ReactDOM.render(<App />, document.getElementById('root'));*/

//Creating a React Component
class Message extends React.Component{
	render(){
		return (
			<div>
				<h1 style={{color: this.props.color}}> Hello World</h1>
				<p>{this.props.msg}</p>
				<p>My age is {this.props.age} years old </p>
			</div>
			)
	}
}

ReactDOM.render(<Message msg="Hi!How are You and what is Your age?" age={12} color="orange"/>, 
	document.getElementById('root'));  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
