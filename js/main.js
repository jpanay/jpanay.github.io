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
    // audio2.play()
    // setTimeout(() => { audio2.play() }, 100)
    // setTimeout(() => { audio3.play() }, 200)
    // setTimeout(() => { audio2.play() }, 300)
    // setTimeout(() => { audio1.play() }, 400)
    // setTimeout(() => { audio1.play() }, 500)
    // setTimeout(() => { audio3.play() }, 600)
    // setTimeout(() => { audio2.play() }, 700)
    // setTimeout(() => { audio2.play() }, 800)
    // setTimeout(() => { }, 900)
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
  let home = $(`<div class="home"></div>`)

  let homeCenter = $(`<div class="home-center"></div>`)
  let homeHeadshot = $(`<img class="home-center-headshot" src="media/headshot.png"></img>`)
  let homeInfo = $(`<div class="home-info"></div>`)
  let homeInfoTxtName = $(`<div class="home-info-txt"> Jason Panay </div>`)
  let homeInfoTxtLocation = $(`<div class="home-info-txt"> New York,New York </div>`)
  let homeLinkGithub = $(`<div class="home-info-link github-link">
    <img class="img-sml github-img" src="media/github.png"> Github
  </div>`)
  let homeLinkLinkedin = $(`<div class="home-info-link linkedin-link">
    <img class="img-sml linkedin-img" src="media/linkedin.png"> Linkedin
  </div>`)


  homeInfo.append(homeInfoTxtName)
  homeInfo.append(homeInfoTxtLocation)
  homeInfo.append(homeLinkGithub)
  homeInfo.append(homeLinkLinkedin)

  homeCenter.append(homeHeadshot)
  homeCenter.append(homeInfo)



  let homeLeft = $(`<div class="home-left"></div>`)
  let leftImg = $(`<img class="home-left-link" src="media/blank.png"></img>`)
  homeLeft.append(leftImg)

  let homeRight = $(`<div class="home-right"></div>`)
  let rightImg = $(`<img class="home-right-link" src="media/blank.png"></img>`)
  homeRight.append(rightImg)

  home.append(homeLeft);
  home.append(homeCenter);
  home.append(homeRight);
  // center.append(three)


  // RENDER
  $('.app').append(home)

  $('.github-link').hover((e) => {
    $('.github-img').css('background-color', 'rgb(118, 250, 147)')
    $('.github-img').css('transorm', 'scale(0.95)')
  })

  $('.linkedin-link').hover((e) => {
    $('.linkedin-img').css('background-color', 'rgb(118, 250, 147)')
    $('.linkedin-img').css('transorm', 'scale(0.95)')
  })

  $('.home-info-link').on('mouseleave' ,(e) => {
    $('.img-sml').css('background-color', '')
    $('.github-img').css('transform', 'scale(1)')
  })


  let turn1 = 0
  let turn2 = 0
  setInterval(() => {
    turn1 += 0
    turn2 -= 0
    $('.home-left-link').css('transform', `rotate(${turn1}turn)`)
    $('.home-right-link').css('transform', `rotate(${turn2}turn)`)
  }, 50)
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
