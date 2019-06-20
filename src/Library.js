
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

// Commenting Component Function
//const Library = ({bookList}) =>{
//		return (
//			<section>
//		{
//			bookList.map((book, Index) => {
//        			return <Book style={styleBook} key={Index} title={book.title} author={book.author} price={book.price}/> 
 //       		})
//		}
//			</section>
//		)
//}

//conditional Rendering Components Hiring , NotHiring


//Adding state 
export class Library extends React.Component {
	//constructor(props) {
	//	super(props)
	//	this.state = {
//			open: false
//		}
//		this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
//	}

//	toggleOpenClosed(){
		//using CallBacks for setState as setState is asynchronous
//		this.setState(prevState => ({
//			open: !prevState.open
//		}))
//	}

	state = {open:false, 
		freeBookMark: false,
		hiring: false,
		data:[],
		loading:false}

	//using Component Life Cycle Methods
	async componentDidMount() {
		this.setState({loading:true});
		let req = await fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1');
		let resJson = await req.json();
	    this.setState({data: resJson,loading:false });
	}

	componentDidUpdate() {
			console.log("The component just updated")
		}

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
			<div className='library-container'>
			{this.state.loading? 'loading...':this.state.data.map((product,i) =>{
				return (
						<div key={i}  className="product-container">
							<h3>Library Product of the Week!</h3>
							<h4>{product.name}</h4>
							<img src={product.image} height={100}/>
						</div>
					)
				}
				)}
				{this.state.hiring? <Hiring/> : <NotHiring/>}

				<h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
				<button onClick={this.toggleOpenClosed}>Change</button>
				<br></br>
			
				{this.state.open ? bookList.map(
					(book, i) => 
						<Book 
							key={i}
							title={book.title} 
							author={book.author} 
							pages={book.pages}
							freeBookMark={this.state.freeBookMark? 'is bookmarked' : 'is not bookmarked'}
							/>
				) : 'Library Open Hours 8 am to 8:30 pm'}

			</div>
		)
	}
}