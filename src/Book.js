import React, {Component} from 'react';

export const Book = ({title,author,price, freeBookMark}) =>{
  	  		return(
  			<section className="book-container">
  			<h1>Title: {title} </h1>  
  			<h3>Author: {author} </h3>
  			<h3>Price: {price} </h3>
  			<h3> This Book {freeBookMark} </h3>
  			</section>
  		)
  }
