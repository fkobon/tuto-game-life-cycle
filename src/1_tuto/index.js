import GameScene from '../GameScene'

const STEP_VALUE = 'tuto'

class Scene extends GameScene {
  get STEP() {
    return STEP_VALUE
  }

  constructor() {
    super(STEP_VALUE)
  }

  start() {
  	let btn = document.querySelector('.btn')
  	// lors du click sur notre button nous envoyons l'evenement de fin de scène
  	btn.addEventListener('click', () => this.end())
    super.start()
  }

  get html() {
  	return `<button class="btn">fin du tuto</button>`
  }
}

export default new Scene()
