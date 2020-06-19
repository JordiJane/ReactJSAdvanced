import React, { Component } from 'react'

class ComponenteA extends Component {
    render() {
        return <p>Componente A</p>
    }

}

class ComponenteB extends Component {
    render() {
        return <p>Componente B</p>
    }

}

function useConditionalRendering (mostarA) {
    if (mostarA) {
        return <ComponenteA />
    }
     return <ComponenteB />
}
export default class ConditionalSection extends Component {
    constructor() {
        super()
        this.state = { mostarA: true }
    }
    render () {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {useConditionalRendering(this.state.mostarA)}
            </div>        
        )
    }
}