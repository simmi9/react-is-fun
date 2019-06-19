import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
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

const styleLibrary={
	display:'flex',
	flexDirection:'column',
	backgroundColor: 'white'
}
const styleBook={
	display:'flex',
	flexDirection:'column',
	backgroundColor: 'orange'
}

 const Book = ({title,author,price}) =>{
  	  		return(
  			<section>
  			<h1>Title: {title} </h1>  
  			<h3>Author: {author} </h3>
  			<h3>Price: {price} </h3>
  			<hr></hr>
  			</section>
  		)
  }


// Commenting Component Function
/*const Library = ({bookList}) =>{
		return (
			<section>
		{
			bookList.map((book, Index) => {
        			return <Book style={styleBook} key={Index} title={book.title} author={book.author} price={book.price}/> 
        		})
		}
			</section>
		)
}
*/

//Adding state 
class Library extends React.Component {
	/*constructor(props) {
		super(props)
		this.state = {
			open: false
		}
		this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
	}

	toggleOpenClosed(){
		//using CallBacks for setState as setState is asynchronous
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}*/

	state = {open:false}
//automatic bind to object of this class using arrow functions  
	toggleOpenClosed = () => {
		//using CallBacks for setState as setState is asynchronous
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}

	render() {
		const { bookList } = this.props
		return (
			<div>
				<h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
				<button onClick={this.toggleOpenClosed}>Change</button>
			
				{bookList.map(
					(book, i) => 
						<Book 
							key={i}
							title={book.title} 
							author={book.author} 
							pages={book.pages}/>
				)}

			</div>
		)
	}
}

render(<div style={styleLibrary}>
<Library bookList={BookData}/>
</div>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
