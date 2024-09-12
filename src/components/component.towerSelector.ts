import {ALL_TOWERS, ALL_TOWERS_MAP} from "../elements/tower/tower.constants.js";
import {ElementTower, ElementTowerName} from "../elements/tower/tower.js";
import {state} from "../state.js";

export class ComponentTowerSelector extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'})

        ALL_TOWERS.forEach(tower => {
            const selectableTower = this.generateSelectableTower(tower)
            shadow.appendChild(selectableTower)
        })
    }

    private generateSelectableTower(tower: ElementTower) {
        const selectableTower = document.createElement('selectable-tower')
        selectableTower.setAttribute('name', tower.name)
        return selectableTower
    }
}

export class ComponentSelectableTower extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'})

        shadow.appendChild(this.towerButton)
    }

    private get tower() {
        const name = this.getAttribute('name') as ElementTowerName
        return ALL_TOWERS_MAP[name]
    }

    private get towerButton() {
        const button = document.createElement('button')
        button.textContent = `${this.tower.name} - $${this.tower.price}`
        button.onclick = () => {
            state.towerForPurchaseSelected = this.tower
        }

        return button
    }

}