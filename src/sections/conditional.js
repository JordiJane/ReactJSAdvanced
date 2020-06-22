import React, { Component } from 'react'

class LoginButton extends Component {
    render() {
        return <button>Iniciar Sesión</button>
    }

}

class LogoutButton extends Component {
    render() {
        return (
            <div>
                <p>Bienvenido, usuario </p>
                <button>Cerrar sesión</button>
            </div>
        )
    }

}

function useConditionalRendering (mostarA) {
    if (mostarA) {
        return <LoginButton />
    }
     return <LogoutButton />
}
export default class ConditionalSection extends Component {
    constructor() {
        super()
        this.state = { isUserLogged: true }
    }
    render () {
        //Constante
        //const conditionalComponent = useConditionalRendering(this.state.mostarA)
        //Ternària
        // const conditionalComponent = this.state.mostarA 
        //     ? <ComponenteA /> 
        //     : <ComponenteB />
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged
                    ? <LogoutButton />
                    : <LoginButton/>
                }
            </div>        
        )
    }
}