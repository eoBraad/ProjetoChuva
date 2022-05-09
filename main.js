//SHOW MORE 
const articleContent = document.querySelector(".article_content")
const showMoreButton = document.querySelector('#show_more_button')
const articlePreRemove = document.querySelector("#article_to_remove")
const firsParagraph = document.createElement('p')
const secondParagraph = document.createElement('p')
const thirdParagraph = document.createElement('p')


firsParagraph.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.
`

secondParagraph.innerHTML = `
Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.
`

thirdParagraph.innerHTML = `
Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.
`

showMoreButton.addEventListener('click', () => {
  articleContent.removeChild(articlePreRemove)
  articleContent.appendChild(firsParagraph)
  articleContent.appendChild(secondParagraph)
  articleContent.appendChild(thirdParagraph)
})


//NEW QUESTION SCRIPT

const newQuestionButton = document.querySelector(".create_new_question")
const createQuestionContainer = document.querySelector(".create_question_container")
const formContainer = document.querySelector(".form_container")
const feedbackPost = document.querySelector(".feedback_post")
const submitQuestionButton = document.querySelector('#submit_button')


newQuestionButton.addEventListener("click", (event) => {
  event.preventDefault()
  createQuestionContainer.classList.toggle('disable')
  formContainer.classList.toggle("disable")
})


submitQuestionButton.addEventListener("click", (event) => {
  event.preventDefault()
  formContainer.classList.toggle("disable")
  createQuestionContainer.classList.toggle('disable')
  feedbackPost.classList.toggle("disable")
})

//RESPONSES

const responsesContainer = document.querySelector(".responses_container")
const responseButton = document.querySelector(".more_info")

responseButton.addEventListener("click", () => {
  responsesContainer.classList.toggle("active")
})

//Responsivo 

const heaaderButton = document.querySelector('.header_button')
const headerContainer = document.querySelector(".header_container")

heaaderButton.addEventListener("click", () => {
  heaaderButton.classList.toggle("active")
  headerContainer.classList.toggle("active")
})