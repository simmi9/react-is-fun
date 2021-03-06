import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import { Library } from './Library'
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

//Creating a React Component Message
/*class Message extends React.Component{
	render(){
		return (
			<div>
				<h1 style={{color: this.props.color}}> Hello World</h1>
				<p>{this.props.msg}</p>
				<p>I am {this.props.age} years old </p>
			</div>
			)
	}
}

ReactDOM.render(<Message msg="Hi!How are You and what is Your age?" age={12} color="orange"/>, 
	document.getElementById('root'));
	*/  



//Creating React Component ExerciseDay Counter as class
/*
const exerciseDays = {
total: 5,
proteinPowder: 1,
calories: 250,
daysAttended: 3
}

class ExerciseDaysCounter extends Component{
	goalProgress = (total,goal) => {
		let res = Math.round(total / goal);
		return res * 100;
	}
	render(){
		const {total,proteinPowder,calories,daysAttended} = this.props;
		return (
			<section>
				<div>
					Total number of Goal Days: {total}
				</div>
				<div>
					Protein Powder Each Day: {proteinPowder} Scoop
				</div>
				<div>
					Calories Burnt per Day {calories}
				</div>
				<div>
					Days I managed to exercise: {daysAttended}
				</div>
				<div>
					Goal Progress {this.goalProgress(total,daysAttended)}%
				</div>
			</section>
		)
	}
}

render(<ExerciseDaysCounter total={exerciseDays.total}
							proteinPowder={exerciseDays.proteinPowder}
							calories={exerciseDays.calories}
							daysAttended={exerciseDays.daysAttended}/>,
document.getElementById('root')
)
*/

//Parent and Child Components

const BookData = [{
	title:"Harry Potter and the Prisoner of askaban",
	author:"JK Rowling",
	price: 25
},
{
	title:"Harry Potter and the Goblet of Fire",
	author:"JK Rowling",
	price: 30
},
{
	title:"Dance of Ice and Fire",
	author:"RR Martin",
	price: 50
}
];

/*
const styleLibrary={
	display:'flex',
	flexDirection:'column',
	backgroundColor: 'white'
}
*/

render(
<Library bookList={BookData}/>  
,
document.getElementById('root'));


//Form Handling in React
/*
class ColorPickerForm extends React.Component {
	state={ value:'' }

    pickColor = (e) =>{
    	this.setState({value: e.target.value})
    }

    submit = (e) =>{
    	console.log(`color changed ${this.state.value}`);
    	e.preventDefault();

    }

    render(){
    	return(
    		<form onSubmit={this.submit}>
    			<label> Pick a Color:
    				<input type="color" 
    					   onChange={this.pickColor}>
    				</input>
    			 </label>
    			 <button>submit</button>
    		</form>

    		)
    }
}

render(<div>
<ColorPickerForm/>
</div>,
document.getElementById('root'));
*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
