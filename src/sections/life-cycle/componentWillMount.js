import React, { Component } from 'react'

const HelloRender = (props) => <h1>Hola render!</h1>

class ComponentWillMount extends Component {
  constructor (props) {
    console.log('constructor')
    super(props)
    this.state = { mensaje: 'mensaje inicial' }
  }

  componentWillMount () {
    console.log('componentWillMount')
    this.setState({ mensaje: 'otro mensaje' })
  }

  render () {
    console.log('render')
    //Componente sin renderizar(actualizar)
    //return null 
    return [
        <h1 key='A'> Primer elemento</h1>,
        <HelloRender key='B' />,
        <HelloRender key='C'/>,
        <h3 key='D'> Cuarto elemento</h3>
    ]
        //this.state.mensaje === 'mensaje inicial' ? 'sip!' : null
        // <div>
        //     <h4>Elemento DOM aqui</h4>
        //     <HelloRender />
        //     <p> Justo debajo de un componente de React</p>
        // </div>
    //   <div>
    //     <h4>Ciclo de montaje: componentWillMount</h4>
    //     <p>{this.state.mensaje}</p>
    //   </div>
    //)
    
  }
}

export default ComponentWillMount