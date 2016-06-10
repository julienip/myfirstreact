import React from 'react';
import ReactDOM from 'react-dom';

let Mixin = InnerComponent => class extends React.Component{
  
  constructor(){
    super();
    this.update = this.update.bind(this);
    this.state = {increasing:false};
  }

  update(e){
    console.log('update')
    console.log(ReactDOM.findDOMNode(this));

    ReactDOM.render(
      <div>
        <ButtonMixed txt={this.props.txt} val={this.props.val+1}/>
        <LabelMixed txt={this.props.txt} val={this.props.val+1}/>
      </div>,document.getElementById('c'));
  }

  // ---------------------------------------------------------------------
  componentWillMount(){
    console.log('mount')
  }

  componentDidMount(){
    console.log('mounted');
    console.log(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount(){
    console.log('unmount')
    this.state = {increasing:false}
  }

  //-----------------------------------------------------------
  componentWillReceiveProps(nextProps){
    console.log('will Receive Props');
    console.log(ReactDOM.findDOMNode(this));
    this.setState({increasing:nextProps.val > this.props.val})
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('should receive Props')
    return nextProps.val % 3 === 0;
  }

  componentDidUpdate(prevProps, prevState){
    console.log('prevProps', prevProps)
  }

  //-----------------------------------------------------------
  render(){
    console.log('rendering...')
    console.log(this.state.increasing)
    return <InnerComponent
      update={this.update}
      {...this.state}
      {...this.props} />
  }
}

// ---------------------------------------------------------
  const Button =(props)=> <button onClick={props.update}>
                            {props.txt} - {props.val}
                          </button>
  const Label = (props) => <label onMouseMove={props.update}>
                            {props.txt} - {props.val}
                           </label>

// ---------------------------------------------------------
let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

// ----------------------------------------------------------
class App5 extends React.Component{

  render(){
    return(
      <div>
        <ButtonMixed txt="Button APP5"></ButtonMixed>
        <LabelMixed txt= "Label APP5"></LabelMixed>
      </div>
    )
  }

}

// -----------------------------------------------------------------
class Wrapper2 extends React.Component {

  constructor(){
    super();
  }

  mount(){
    ReactDOM.render(<App5/>, document.getElementById('c'))
  }

  unmount(){
    console.log('wrapper Unmount')
    ReactDOM.unmountComponentAtNode(document.getElementById('c'))
  }

  render(){
    return (
      <div>
        <hr />
        <button onClick={this.mount.bind(this)}>MOUNT APP5</button>
        <button onClick={this.unmount.bind(this)}>UNMOUNT APP5</button>
        <div id="c"></div>
      </div>
    )

  }
}

ButtonMixed.defaultProps={val:0}
LabelMixed.defaultProps={val:0}
export default Wrapper2
// export default App4
