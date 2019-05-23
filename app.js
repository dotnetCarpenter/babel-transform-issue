import { Commander, template as warningTemplate } from './save-warning.mjs'

const commander = new Commander()

function showWarning () {
  let warning = document.querySelector('.save-warning')
  if (warning) {
    warning.classList.remove('save-warning--hide')
  } else {
    document.body.insertAdjacentHTML('afterbegin', warningTemplate)
    warning = document.querySelector('.save-warning')
  }
  return warning
}

commander.addCommand(
  'saveWarning',
  [{ ctrl: true, key: 's'}],
  event => {
    event.preventDefault()
    const warning = showWarning()
    setTimeout(() => {
      warning.classList.add('save-warning--hide')
    }, 10000)
  }
)
commander.addCommand('hello', [
  { key: 'h' }, { key: 'e' }, { key: 'l' },{ key: 'l' }, { key: 'o' }
], () => alert('⚠ Hello World'))

document.addEventListener('keydown', commander.keyHandler.bind(commander), { passive: false })

if (/file:\/{2}/.test(location.href)) {
  showWarning()
}
