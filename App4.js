import React from 'react';
import ReactDOM from 'react-dom';

class App4 extends React.Component{

  constructor(){
    super();
    this.update = this.update.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.state = {increasing:false}
  }

  update(){
    console.log('update')
    ReactDOM.render(<App4 val={this.props.val+1}/>,document.getElementById('b'));
  }

  updateTimer()
  {
      console.log('updateTimer')
      this.inc=setInterval(this.update,1000);
  }

// ---------------------------------------------------------------------
  componentWillMount(){
    console.log('mount')
  }

  componentDidMount(){
    console.log('mounted');
    console.log(ReactDOM.findDOMNode(this));
    this.updateTimer;
  }

  componentWillUnmount(){
    console.log('unmount')
    clearInterval(this.inc);
    this.state = {increasing:false}
  }
//-----------------------------------------------------------

  componentWillReceiveProps(nextProps){
    console.log('will Receive Props')
    this.setState({increasing:nextProps.val > this.props.val})
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('should receive Props')
    return nextProps.val % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState){
    console.log('prevProps', prevProps)
  }

// -----------------------------------------------------------

  render(){
   console.log('rendering...')
   console.log(this.state.increasing)
    return(
      <div>
        <hr />
        <button onClick={this.updateTimer}>{this.props.val}</button>
      </div>
    )
  }

}

// -----------------------------------------------------------------
class Wrapper extends React.Component {

  constructor(){
    super();
  }

  mount(){
    ReactDOM.render(<App4/>, document.getElementById('b'))
  }

  unmount(){
    console.log('wrapper Unmount')
    ReactDOM.unmountComponentAtNode(document.getElementById('b'))
  }

  render(){
    return (
      <div>
        <hr />
        <button onClick={this.mount.bind(this)}>MOUNT APP4 </button>
        <button onClick={this.unmount.bind(this)}>UNMOUNT APP4</button>
        <div id="b"></div>
      </div>
    )

  }
}

App4.defaultProps = {val:0}
export default Wrapper
// export default App4
