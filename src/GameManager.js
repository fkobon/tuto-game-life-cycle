// import de nos différentes scène
import Intro from './0_intro'
import Tuto from './1_tuto'
import Play from './2_play'
import End from './3_end'

export default class GameManager {

  constructor(type = 'default') {
    this.scene = Intro
    this._container = document.querySelector('.game-container')
    this.startScene()
  }

  startScene() {
    this._container.innerHTML = this._scene.html
    this._scene.start()
  }

  // Lorsqu’une scène enverra un événement de fin 
  // notre game manager aura la responsabilité de 
  // choisir quel sera la scène suivante
  sceneEnd(evt) {
    switch (evt.step) {
      case Intro.STEP:
        this.scene = Tuto
        break
      case Tuto.STEP:
        this.scene = Play
        break
      case Play.STEP:
        this.scene = End
        break
      case End.STEP:
        console.log('the game is over')
        break
    }
    this.startScene()
  }

  get scene() {
    return this._scene
  }

  set scene(scene) {
    this._scene = scene
    this._step = this._scene.step
    // nous verrons pluts tard comment la scène va émettre l’évènement de fin de scène
    this._scene.onEvent(evt => this.sceneEnd(evt))
  }
}
