import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';


// class App extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 			<header />
// 			<header><h1>this is header</h1></header>
// 			<Content/ >
// 			<HelloWorld />
// 			</div>
// 			)
// 	}
// }


class Header extends React.Component{
	render(){
		return(
		<h1>this is header</h1>
		)
	}
}


class Content extends React.Component{
	render(){
		return(
		<div>
		<p>this is paragraph</p>
		<h2>following content is here!!!!</h2>
		</div>
		)
	}
}

class HelloWorld extends React.Component{
	// constructor(){
	// 	super()
	// 	this.name='Nikhil';
	// }
	
render(){
	var i=1
	var mystyle={
		fontsize:40,
		color:"blue"
	}
	return(
<div>
<section className='foo'>Section</section>

<h2 style={mystyle}>heading</h2>

<p>{i == 1 ? 'True!' : 'False'}</p>

 <input type='text'/>
</div>
		)
}

}
 
class SomethingNew extends React.Component{
 	getName(){
 		return(
    <h1>Get something</h1>
 		)
 	}
 }



// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{this.props.headerProp}</h1>
//             <h2>{this.props.contentProp}</h2>
//          </div>
//       );
//    }
// }

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray})
   };
   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}

ReactDOM.render(<HelloWorld />,document.getElementById('root'))
//ReactDOM.render(<SomethingNew />,document.getElementById('root1'))
ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content from props..."/>, document.getElementById('root1'));