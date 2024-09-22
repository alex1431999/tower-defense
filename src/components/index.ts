import {ComponentSelectableTower, ComponentTowerSelector} from "./component.towerSelector.js";
import {ComponentState} from "./component.state.js";
import {ComponentTowerUpgradeMenu} from "./component.towerUpgradeMenu.js";

window.customElements.define('game-state', ComponentState)

window.customElements.define('tower-selector', ComponentTowerSelector)
window.customElements.define('selectable-tower', ComponentSelectableTower)

window.customElements.define('tower-upgrade-menu', ComponentTowerUpgradeMenu)