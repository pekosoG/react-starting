//Class Component
class Button extends React.Component{
	
  //Constructor
  constructor(props){
  	super(props);
  }
  
  //Or you can create the state as a 'class variable'
  //state = { counter : 0};
  
	handleClick = () =>{
  	this.props.onClickFunction(this.props.incrementValue);
  }
  
	render(){
  	//Babel is used to parse/render the JSX
  	return (
    	<button onClick={this.handleClick}>
      	+{this.props.incrementValue}
      </button>
    );
  }
}

//Function component
const Result = (props) =>{
	return (
  	<div>{props.counter}</div>
  );
};

//Class Component
class App extends React.Component{

	state = { counter : 0};
  
  incrementCounter = (incrementValue) =>{
  	//This method is Async, multiple clicks might affect performance
  	/*this.setState({
    	counter: this.state.counter +1
    });*/
    
    //This method gets the old state and works based on that value
    this.setState((prevState)=>({
    	counter: prevState.counter +incrementValue
    }));
  }

	render(){
  	return(
    	<div>
      	<Button onClickFunction={this.incrementCounter} incrementValue={1}/>
        <Button onClickFunction={this.incrementCounter} incrementValue={5}/>
        <Button onClickFunction={this.incrementCounter} incrementValue={10}/>
        <Button onClickFunction={this.incrementCounter} incrementValue={100}/>
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

//This syntax mount the React component in the browser
ReactDOM.render(<App/>, mountNode);