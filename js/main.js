$('.name').trigger('click');

let nameAnimation = (isClick = true) => {
  let audio1 = new Audio('media/key1.mp3');
  let audio2 = new Audio('media/key2.mp3');
  let audio3 = new Audio('media/key3.mp3');
  let audio4 = new Audio('media/key4.mp3');
  audio1.preload = 'auto'
  audio2.preload = 'auto'
  audio3.preload = 'auto'
  audio4.preload = 'auto'
  $('.j').empty()
  $('.dot').empty()
  $('.panay').empty()
  $('.paren').empty()
  if (isClick) {
    audio2.play()
    setTimeout(() => { audio2.play() }, 100)
    setTimeout(() => { audio3.play() }, 200)
    setTimeout(() => { audio2.play() }, 300)
    setTimeout(() => { audio1.play() }, 400)
    setTimeout(() => { audio1.play() }, 500)
    setTimeout(() => { audio3.play() }, 600)
    setTimeout(() => { audio2.play() }, 700)
    setTimeout(() => { audio2.play() }, 800)
    setTimeout(() => { }, 900)
  }
  setTimeout(() => { $('.j').text('j') }, 100)
  setTimeout(() => { $('.dot').text('.') }, 200)
  setTimeout(() => { $('.panay').text('p') }, 300)
  setTimeout(() => { $('.panay').text('pa') }, 400)
  setTimeout(() => { $('.panay').text('pan') }, 500)
  setTimeout(() => { $('.panay').text('pana') }, 600)
  setTimeout(() => { $('.panay').text('panay') }, 700)
  setTimeout(() => { $('.paren').text('(') }, 800)
  setTimeout(() => { $('.paren').text('()') }, 900)
}

nameAnimation(false)
$('.name').click(nameAnimation)


let generateHome = () => {
  $('.app').empty()
  let div = $(`<div class="home"></div>`)

  // ASK
  // let askDiv = $(`<div class="ask-div"></div>`)
  // let askInput = $(`<input class="ask-input" placeholder="Ask me a question">`)
  // let askBtn = $(`<button class="ask-btn"><span class="green">get</span><span class="blue">.</span><span class="yellow">answer</span><span class="green">(</span></span></span><span class="blue">input</span><span class="green">)</span></button>`)
  // let askAnswer = $(`<p class="ask-answer">> ...</p>`)
  // askDiv.append(askInput)
  // askDiv.append(askBtn)
  // askDiv.append(askAnswer)
  // div.append(askDiv)
  // THREE
  // let three = $(`<div class="three" id="three"></div>`)
  // div.append(three)

  // RENDER
  $('.app').append(div)
}
generateHome()

let generateProjects = () => {
  $('.app').empty()
  for (let project of projects) {
    let div = $(`<a target="_blank" href="${project.link}" class="project"></a>`)
    let imgWrapper = $(`<div class="img-wrapper"></div>`)
    let img = $(`<img class="project-img" src=${project.img}>`)
    let name = $(`<div class="project-name">${project.name}</div>`)
    let desc = $(`<div class="project-desc">${project.desc}</div>`)
    imgWrapper.append(img)
    div.append(name)
    div.append(imgWrapper)
    div.append(desc)
    $('.app').append(div)
  }
}

let loadBlog = (iframeLink) => {

}

let generateBlog = () => {
  $('.app').empty()
  for (let blog of blogs) {
    let container = $(`<a class="blog-container" target="_blank" href="${blog.link}"></a>`)
    let div = $(`<div class="blog"></div>`)
    let image = $(`<img class="blog-img" src="${blog.img}">`)
    let name = $(`<div class="blog-name">${blog.name}</div>`)
    let desc = $(`<div class="blog-desc"></div>`)
    let descP = $(`<p>${blog.desc}</p>`)
    desc.append(descP)
    container.append(image)
    div.append(name)
    div.append(desc)
    container.append(div)

    $('.app').append(container)
  }
}

$('.home-btn').click(generateHome)
$('.projects-btn').click(generateProjects)
$('.blog-btn').click(generateBlog)
