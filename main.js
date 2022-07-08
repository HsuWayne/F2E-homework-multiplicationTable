const main = document.querySelector('#main')
const header =
  '<div class="box header"><div class="header-line"><div class="symbol-x"></div><div class="line"></div><div class="symbol-x"></div></div><div><h1>九九乘法表</h1><p>MULTIPLICATION CHART</p></div><div class="header-line"><div class="symbol-x"></div><div class="line"></div><div class="symbol-x"></div></div></div>'
const footer =
  '<footer class="footer"><p>Copyright © 2019 HexSchool. All rights reserved.</p></footer>'
let content = ''
for (let i = 2; i <= 9; i++) {
  content += `<div class="box content"><div class="content-title">${i}</div>`
  for (let j = 1; j <= 9; j++) {
    content += `<div class="content-text">${i}<span class="symbol-x"></span>${j} = ${
      i * j
    }</div>`
  }
  content += '</div>'
}
main.innerHTML = header + content + footer
