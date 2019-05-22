export const template =
`<style>
  .save-warning {
    position: absolute;
    z-index: 100;

    top: 0;
    left: 50%;
    max-height: 50%;
    transform: translateX(-50%);

    opacity: 1;
    transition: 500ms opacity;
  }
  .save-warning__icon {
    height: 20vh;
    width: 100%;
    margin: 0 auto;
  }
  .save-warning__text {
    padding: 1em;
    margin: 0.2em;

    background: #0d1b2a;
    border-radius: 5px;

    color: #f57900;
    font-size: 2.5em;
    text-align: center;
  }
  .save-warning__emphasis {
    display: block;
  }
  .save-warning--hide {
    opacity: 0;
    pointer-events: none;
  }
</style>
<section class="save-warning">
  <img class="save-warning__icon" src="/images/svg/warning.svg">
  <p class="save-warning__text">
    <strong>The PDF will not work if you save this page locally.</strong>
    <em class="save-warning__emphasis">use the download button</em>
  </p>
</section>`

class Invoker {
  constructor (name, seq, action) {
    this.name = name
    this.seq = seq
    this.execute = action
    this.seqNumber = 0
  }

  check (event) {
    const code = this.seq[this.seqNumber].code
    const ctrl = this.seq[this.seqNumber].ctrl || false

    if (
      event.code === code &&
      (event.ctrlKey || event.metaKey) === ctrl
    ) {
      return true
    } else {
      return false
    }
  }

  sequenceMatching (event) {
    if (this.check(event)) {
      if (this.seqNumber === this.seq.length - 1) {
        this.execute(event)
        this.seqNumber = 0
      } else {
        this.seqNumber += 1
      }
    } else {
      this.seqNumber = 0
    }
  }

  matching (event) {
    if (this.check(event)) {
      this.execute(event)
    }
  }
}

export class Commander {
  constructor () {
    this.commands = []
  }

  addCommand (name, seq, action) {
    this.commands.push(new Invoker(name, seq, action))
  }

  keyHandler (event) {
    this.commands.forEach(c => {
      if (c.seq.length > 1) {
        c.sequenceMatching(event)
      } else {
        c.matching(event)
      }
    })
  }
}

