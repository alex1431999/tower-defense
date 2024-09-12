export class ComponentState extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: 'open'})

        shadow.appendChild(this.healthPointsHTMLElement)
        shadow.appendChild(this.balanceHTMLElement)
    }

    private get healthPointsHTMLElement() {
        const div = document.createElement('div')
        div.id = 'healthPoints'
        div.style.marginBottom = '5px'
        div.textContent = ''

        return div
    }

    private get balanceHTMLElement() {
        const div = document.createElement('div')
        div.id = 'balance'
        div.textContent = ''

        return div
    }
}