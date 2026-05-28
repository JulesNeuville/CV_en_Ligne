const intro = document.querySelector('#intro')
const formation = document.querySelector('#formation')
const competences = document.querySelector('#competences')
// const experiences   = document.querySelector('#experiences')
const realisations = document.querySelector('#realisations')

const sections = [intro, formation, competences, realisations]

const introButton = document.querySelector('#introButton')
const formationButton = document.querySelector('#formationButton')
const competenceButton = document.querySelector('#competenceButton')
// const experienceButton = document.querySelector('#experienceButton')
const realisationButton = document.querySelector('#realisationButton')

const buttons = [introButton, formationButton, competenceButton, realisationButton]

function showSection(callingButton, searchedSection) {
    searchedSection.classList.remove('hidden')
    callingButton.classList.add('active')

    sections.forEach((sec) => {
        if (sec !== searchedSection && !sec.classList.contains('hidden')) {
            sec.classList.add('hidden')
        }
    })
    buttons.forEach((but) => {
        if (but !== callingButton && but.classList.contains('active')) {
            but.classList.remove('active')
        }
    })
}

introButton.addEventListener('click', () => showSection(introButton, intro))
formationButton.addEventListener('click', () => showSection(formationButton, formation))
competenceButton.addEventListener('click', () => showSection(competenceButton, competences))
realisationButton.addEventListener('click', () => showSection(realisationButton, realisations))