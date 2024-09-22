import {ElementTower} from "../elements/tower/tower.js";

export class ComponentTowerUpgradeMenu extends HTMLElement {
    private shadow: ShadowRoot

    constructor() {
        super()
        this.render(null)
    }

    public selectTower(towerSelected: ElementTower) {
        this.render(towerSelected)
    }

    private render(towerSelected: ElementTower | null) {
        if (this.shadow) {
            this.shadow.innerHTML = null
        } else {
            this.shadow = this.attachShadow({mode: 'open'})
        }

        this.shadow.append(this.header)

        if (towerSelected) {
            this.generateTowerUpgrades(towerSelected)
        } else {
            this.shadow.append(this.emptyState)
        }
    }

    private get header() {
        const paragraph = document.createElement('p')

        paragraph.innerText = 'Upgrade tower'

        return paragraph
    }

    private get emptyState() {
        const paragraph = document.createElement('p')

        paragraph.innerText = 'Nothing selected'

        return paragraph
    }

    private generateTowerUpgrades(tower: ElementTower) {
        const paragraphName = document.createElement('p')
        paragraphName.innerText = `${tower.name} Tower`

        this.shadow.appendChild(paragraphName)

        tower.availableUpgrades.forEach(upgrade => {
            const button = document.createElement('button')
            button.innerText = `${upgrade.name} - $${upgrade.getPrice(tower)}`

            this.shadow.appendChild(button)
        })
    }
}