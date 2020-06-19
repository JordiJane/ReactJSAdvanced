import React, { Component } from 'react';
import ConditionalSection from './sections/conditional'
import logo from './logo.svg';
import './App.css';

//Componente
// function Hello (props) {
// return <h2>{props.title} </h2>
// }

//const Hello = (props) => <h2> {props.title}</h2>

class Contador extends Component {
  constructor(props) {
    super(props)
    this.state = { contador: this.props.contadorInicial }
    setInterval(() => {
      this.setState({contador: this.state.contador + 1 })
    }, 1000)
  }
  render() {
    return <ContadorNumero numero={this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render() {
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}

class Hello extends Component {
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>
  }
}

Title.defaultProps = {
  text: 'Titulo por defecto'
}

class Text extends Component {
  render() {
    const {
      arrayofNumbers, 
      isActivated, 
      number,
      multiply,
      objectWithInfo,
      title,
      defecto,
    } = this.props

    //No es permet canviar el valor de una prop
    //this.props.title = <h3> Otra Cosa</h3>

    const textoSegundoBool = isActivated ? 'On' : 'off'
    const mappedNumbers = arrayofNumbers.map (this.props.multiply)
    return(
      <div>
        <p>{defecto}</p>
        <p>{title}</p>
        <p>{arrayofNumbers.join(',')}</p>
        <p>{number}</p>
        <p>{textoSegundoBool}</p>
        <p>{mappedNumbers.join(',')}</p>
        <p>{objectWithInfo.key}</p>
        <p>{multiply}</p>
      </div>
    )
  }
}

//Main
class App extends Component{
  render() {
    return (
      <div className="App">
        <ConditionalSection />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Title text='Otro titulo desde props'/>
          <Hello title='Hello from props'/>
        </div>
        <Contador contadorInicial={100} />
        <Text 
          arrayofNumbers={[2, 3, 10]}
          objectWithInfo={{key: 'First Value', key2: 'otherValue'}}
          isActivated
          multiply={(number)=> number * 4}
          number={2} 
          text='Texto en string'
          title={<h1>Este es el título</h1>}
        />
      </div>
    );
  }
}

export default App;
