// import de notre librarie d'emetteur d'événement
import on from 'on'

export default class GameScene {
  constructor(step = 'default') {
    this.step = step
    this.onEvent = on(this) // on transform notre scene en emetteur d'événement
  }

  start() {
    console.log(`start ${this.step}`)
  }

  end() {
    // lorsque notre écran est terminé, nous envoyons l'événeemnt de fin
    this.onEvent._fire({ event: 'sceneEnd', step: this.step })
  }

  // Voici le contenu par defaut d'une scène
  get html() {
    return `<div>Je suis l'étape : ${this.step}</div>`
  }
}
