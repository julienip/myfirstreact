import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom

// class App extends React.Component {
//   render(){
//     let txt = this.props.txt
//     return <h1>{txt}</h1>
//   }
// }
//
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }
//
// App.defaultProps = {
//   txt: 'this is the default txt'
// }
//
// ReactDOM.render(
//   <App cat={5} />,
//   document.getElementById('app')
// );

class App2 extends React.Component {

  constructor()
  {
    super();
    this.state = { txt: '', red:0, green:0, blue:0}
    this.update = this.update.bind(this)
  }

  update(e)
  {
    this.setState({txt: e.target.value,
    red:ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
    green:ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
    blue:ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }

  render()
  {
    return (
      <div>
        <Widget txt='lol1' update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        <hr />
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <hr />
        <Button> React <Input/> React </Button>
      </div>
    );
  }

}

// ------------------------------------------------------

const Widget = (props) => {
  return (
    <div>
      <input type = "text" id='input' defaultValue='input APP2' onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
}

class Slider extends React.Component {
  render(){
    return (
      <div>
      <input ref="inp" type ="range"
        min="0"
        max="255"
        onChange={this.props.update}/>
      </div>
    );
  }
}

class Button extends React.Component{
  render(){
    return (
      <div>
      <button>{this.props.children}</button>
      </div>
    )
  }
}

const Input = () => <input type/>
//------------------------------------------------------------


export default App2
