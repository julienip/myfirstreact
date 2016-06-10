import React from 'react';
import ReactDOM from 'react-dom';

class App3 extends React.Component{

  constructor(){
    super();
    this.state = {val:0};
    this.update = this.update.bind(this);
  }

  update(e){
    this.setState({val: this.state.val+1})
  }

  render(){
    console.log('rendering...')
    return (
      <div>
        <button
        onClick={this.update}>{this.state.val}
        </button>
        {this.state.val*this.state.m}
      </div>
    )
  }

  componentWillMount(){
    console.log('mount')
    this.setState({m: 2})

  }

  componentDidMount(){
    console.log('mounted');
    console.log(ReactDOM.findDOMNode(this));
    this.increment = setInterval(this.update, 1000)
  }

  componentWillUnmount(){
    console.log('unmount')
    clearInterval(this.increment)
  }

}

class Wrapper extends React.Component {

  constructor(){
    super();
  }

  mount(){
    ReactDOM.render(<App3/>, document.getElementById('a'))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render(){
    return (
      <div>
        <hr />
        <button onClick={this.mount.bind(this)}>MOUNT APP3</button>
        <button onClick={this.unmount.bind(this)}>UNMOUNT APP3</button>
        <div id="a"></div>
      </div>
    )

  }
}

export default Wrapper
