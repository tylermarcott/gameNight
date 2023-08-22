

// NOTE: this is the blueprint of what the data will look like in the appstate. In the MVCS model, this is the "model" box

export class Player {
  constructor(name) {
    this.name = name

    // score defaulted to start at 0
    this.score = 0
  }

  get playerTemplateCard() {


    console.log('returning template')


    return `
    <div class="card">
        <div class="card-body">
          ${this.name} - ${this.score}
        </div>
        <button class="btn" onclick="app.PlayersController.scorePoint()">Bootin!</button>
    </div>`
  }
}
