const toolbarOnOff = document.getElementById('toolbarOnOff')
const toolBar = document.getElementById('toolbar')
const editToolbarColor = document.getElementById('editToolbarColor')
const editToolbarColorBtn = document.getElementById('editToolbarColorBtn')
const editToolbarPadding = document.getElementById('editToolbarPadding')
const editToolbarPaddingBtn = document.getElementById('editToolbarPaddingBtn')
const addLinks = document.getElementById('addLinks')
const addLinksBtn = document.getElementById('addLinksBtn')
const editHeaderBg = document.getElementById('editHeaderBackground')
const editHeaderBgBtn = document.getElementById('editHeaderBackgroundBtn')
const header = document.getElementById('header')
const editHeaderPadding = document.getElementById('editHeaderPadding')
const editHeaderPaddingBtn = document.getElementById('editHeaderPaddingBtn')
const sidebar = document.getElementById('sidebar')
const sidebarOnOff = document.getElementById('sidebarOnOff')
const editHeaderText = document.getElementById('editHeaderText')
const editHeaderTextBtn = document.getElementById('editHeaderTextBtn')
const headerText = document.getElementById('headerText')
const articleImage = document.getElementById('articleImage')
const articlePadding = document.getElementById('articlePadding')
const articleText = document.getElementById('articleText')
const addArticle = document.getElementById('addArticleBtn')
const articles = document.getElementById('articles')

addArticle.onclick = function () {
    if (articleImage.value || articleText.value || articlePadding.value) {
        const article = document.createElement('div')
        const image = document.createElement('img')
        const text = document.createElement('p')
        text.innerHTML = articleText.value
        image.src = articleImage.value
        image.style.height = '200px'
        image.style.width = '200px'
        article.style.display = 'flex'
        article.style.flexDirection = 'column'
        article.style.padding = `${articlePadding.value}px`
        article.style.justifyContent = 'center'
        article.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        article.append(image)
        article.append(text)
        articles.append(article)
    }
}
editHeaderTextBtn.onclick = function () {
    headerText.innerHTML = editHeaderText.value
}//edit header text
sidebarOnOff.addEventListener('change', function (){
    if (sidebarOnOff.checked) {
        sidebar.style.display = 'flex'
    }else{
        sidebar.style.display = 'none'
    }
})//Sidebar display
editHeaderPaddingBtn.onclick = function () {
    header.style.paddingTop = `${editHeaderPadding.value}px`
    header.style.paddingBottom = `${editHeaderPadding.value}px`
}
editHeaderBgBtn.onclick = function () {
    header.style.backgroundImage = `url("${editHeaderBg.value}")`
} //edit bg image
addLinksBtn.onclick = function () {
    const link = document.createElement('a')
    const url = new URL(addLinks.value);
    const websiteName = url.hostname;
    link.href = addLinks.value
    link.innerHTML = websiteName;
    toolBar.append(link)
} //addLinks
editToolbarPaddingBtn.onclick = function () {
    toolBar.style.padding = `${editToolbarPadding.value}px`
}//toolbar padding change
editToolbarColorBtn.onclick = function () {
    toolBar.style.backgroundColor = editToolbarColor.value
}//toolbar color change
toolbarOnOff.addEventListener('change', function (){
    if (toolbarOnOff.checked) {
        toolBar.style.display = 'flex'
    }else{
        toolBar.style.display = 'none'
    }
})//toolbar display