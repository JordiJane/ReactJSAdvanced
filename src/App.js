import React, { Component } from 'react';
import ConditionalSection from './sections/conditional'
import logo from './logo.svg';
import './App.css';
import cars from './data/cars.json'
import Forms from './sections/forms'
import PropTypes from 'prop-types'
import ComponentWillMount from './sections/life-cycle/componentWillMount'


//Componente
// function Hello (props) {
// return <h2>{props.title} </h2>
// }

//const Hello = (props) => <h2> {props.title}</h2>

class CarItem extends Component {
  render() {
    const { car, id } = this.props

    return (
      <li>
        <p>Key: {id}</p>
        <p><strong>Nombre:</strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )
  }
}

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

class Box extends Component {
  render () {
    return (
      <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {

  //PropTypes Requeridas
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  // constructor (props) {
  //   super(props)
  //   if (typeof props.author === 'undefined') {
  //     console.warn('author prop is required')
  //     throw new Error('author prop is required')
  //   }
  // }
  render() {
    const { author, children, date, title} = this.props
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em> Escrito por {author}</em></p>}
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }

}

//antiguamente HTML
//<button onClick="alert('hi there')">...
//Main
class App extends Component {
  // constructor () {
  //   super()
  //   this.state = { mouseX: 0, mouseY: 0}
  //   //this.handleMouseMove = this.handleMouseMove.bind(this)
  // }
  // handleMouseMove = (e) => {
  //   const { clientX, clientY } = e
  //   this.setState({ mouseX: clientX, mouseY:clientY })
  // }

  // handleClick (e) {
  //   console.log(e)
  //   console.log(e.nativeEvent)
  //   alert('Hi here!')
  // }

  /*constructor por defecto
  constructor(...args) {
    super(...args)
  }
  */

  constructor (props) {
    console.log('constructor')
    super(props) // este método llama al constructor de Component
    //inicializamos el state de nuestro componente
    this.state = { mensajeInicial: 'mensaje inicial' }
    //bindeamos el contexto al método
    //this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({mensajeInicial: 'mensaje cambiado'})
  }

  render() {
    console.log('render')
    const numbers = [1, 1, 3, 4, 5]
    return (
      <div className="App">
        <ComponentWillMount />
        <h4> Ciclo de montaje: constructor</h4>
        {this.state.mensajeInicial}
        <button onClick={this.handleClick}>
          Cambiar mensaje
        </button>

        <h4>Children props</h4>
        <Article
          author='Jordi'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre la prop children'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
        <Article
          author='Jordi'
          date={new Date().toLocaleDateString()}
          title='Artículo 2'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
        <Article
          author='Jordi'
          date={new Date().toLocaleDateString()}
          title='Otro artículo'
        >
          <p>El contenido que envolvemos dentro del componente Article será enviado al componente como this.props.children.</p>
          <strong>Y mantiene las etiquetas y componentes que hayáis añadido dentro</strong>
        </Article>
     
        <h4>Trabajando con listas</h4>
        <ul>
          {
            cars.map(car => {
              return <CarItem id={car.id} key={car.id} car={car} />
            })     
          }
        </ul>
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi there!</button>
        <div
            onMouseMove={this.handleMouseMove}
            style={{ border: '1px solid #000', marginTop: 10, padding: 10}}>
            <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      
        <Forms />
      </div>
      
      // {numbers.map((number, index) => {
      //     return <p key={index}>Soy el numero {number}</p>
      // })} 

      //   { <ConditionalSection />
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo"/>
      //     <Title text='Otro titulo desde props'/>
      //     <Hello title='Hello from props'/>
      //   </div>
      //   <Contador contadorInicial={100} />
      //   <Text 
      //     arrayofNumbers={[2, 3, 10]}
      //     objectWithInfo={{key: 'First Value', key2: 'otherValue'}}
      //     isActivated
      //     multiply={(number)=> number * 4}
      //     number={2} 
      //     text='Texto en string'
      //     title={<h1>Este es el título</h1>}
      //   />
        
    );
    
  }
}

export default App;
