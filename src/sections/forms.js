import React, { Component } from 'react'

class Box extends Component {
    render () {
        return (
            <div style ={{border: '1px solid #09f', margin: 5, padding: 5 }}>
                {this.props.children}
            </div>
        )
    }
}

export default class Forms extends Component {
    constructor () {
        super()
        this.state = {
            inputName: '',
            inputTwitter:'@',
            inputTerms: true
        }
    }
    // handleClick = (e) => {
    //     e.preventDefault()
    //     //Con gets html (es mejor ya que el còdigo es declarativo)
    //     //const name = document.getElementById('name').value
    //     //Con referencias
    //     const name = this.inputName.value
    //     const email = document.getElementById('twitter').value
    //     console.log({ name, email })
    // }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        // const name = this.inputName.value
        // const email = document.getElementById('twitter').value
        // console.log({ name, email })
    }

    handleChange = (e) => {
        console.log('handleChange')
        console.log(e.target.checked)
        this.setState({ inputTerms: e.target.checked})
    }


    render () {
        return (
            <div>
                <h4>Children props</h4>
                <Box> Hola! Soy un children!</Box>
                <Box> Otro Box con otro contenido</Box>

                <h4>Formularios</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'> Nombre: </label>
                        <input
                            id='name'
                            name='userName'
                            onChange={e => this.setState({ inputName: e.target.value })}
                            placeholder='Introduce el nombre' 
                            ref={inputElement => this.inputName = inputElement}
                            value={this.state.inputName} />
                    </p>

                    <p>
                        <label htmlFor='twitter'> Twitter:</label>
                        <input
                            id='twitter'
                            name='twitterAccount'
                            onChange={e => this.setState({ inputTwitter: e.target.value })}
                            placeholder='Introduce tu Twitter' 
                            value = {this.state.inputTwitter} />
                    </p>

                    <p>
                        <label>
                            <input
                            checked={this.state.inputTerms}
                            onChange={this.handleChange} 
                            type='checkbox' />
                            Accepted terms
                        </label>
                    </p>
                    
                    {/* <button onClick={this.handleClick}>Enviar</button> */}
                    <button> Enviar </button>
                </form>
            </div>
        )
    }
}