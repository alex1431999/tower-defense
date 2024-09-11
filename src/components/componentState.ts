export class ComponentState extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: 'open'})

        shadow.appendChild(this.gameStatusParagraph)
        shadow.appendChild(this.healthPointsParagraph)
        shadow.appendChild(this.balanceParagraph)
    }

    private get gameStatusParagraph() {
        const paragraph = document.createElement('p')
        paragraph.id = 'gameStatus'
        paragraph.textContent = ''

        return paragraph
    }

    private get healthPointsParagraph() {
        const paragraph = document.createElement('p')
        paragraph.id = 'healthPoints'
        paragraph.textContent = ''

        return paragraph
    }

    private get balanceParagraph() {
        const paragraph = document.createElement('p')
        paragraph.id = 'balance'
        paragraph.textContent = ''

        return paragraph
    }
}