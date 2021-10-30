let EDIT = document.querySelector('.edit')
let TXTAREA = document.querySelector('.txtarea')
let BOX1 = document.querySelector('.box1')
let BOX2 = document.querySelector('.box2')
let BOX3 = document.querySelector('.box3')
let BOX4 = document.querySelector('.box4')
let BOX5 = document.querySelector('.box5')
let BOX5_1 = document.querySelector('.box5_1')
let BOX5_2 = document.querySelector('.box5_2')
let BOX6 = document.querySelector('.box6')
let ADD = document.querySelector('.add')
let SAVE = document.querySelector('.save')
let STYLE = document.querySelector('.style')
let FONT = document.querySelectorAll('.font')
let SELECT = document.querySelector('.select')
let COLOR = document.querySelector('.color')
let COLORCONTEINER = document.querySelector('.colorConteiner')
let BACKGROUND = document.querySelector('.background')
let COLORCONTEINER2 = document.querySelector('.colorConteiner2')
let checkBox = document.getElementById("bold");
let checkBox2 = document.getElementById("cursive");
let TABLE = document.querySelectorAll('.table')
let LIST = document.querySelectorAll('.list')
let TABLEBT = document.querySelector('.tableBT')
let LISTBT = document.querySelector('.listBT')
let UL = document.querySelector('.ul')
let COUNTLI = document.querySelector('.countLi')
let LIMARKS = document.querySelector('.limarks')
let TR = document.querySelector('.tr')
let TD = document.querySelector('.td')
let width_of_TD = document.querySelector('.width_of_TD')
let height_of_TD = document.querySelector('.height_of_TD')
let width_of_border = document.querySelector('.width_of_border')
let color_of_border = document.querySelector('.color_of_border')
let type_of_border = document.querySelector('.type_of_border')



EDIT.addEventListener('click', function () {
    TXTAREA.style.display = 'flex'
    ADD.style.display = 'flex'
    SAVE.style.display = 'flex'
    TXTAREA.value = BOX1.innerHTML
    BOX4.style.display = 'none'

})

SAVE.addEventListener('click', function () {
    BOX1.innerHTML = TXTAREA.value
})

STYLE.addEventListener('click', function () {
    TXTAREA.style.display = ''
    ADD.style.display = ''
    SAVE.style.display = ''
    BOX4.style.display = 'block'

})

FONT.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        if (event.target.type === 'radio') {
            BOX1.style.fontSize = event.target.value
        }
    })
})


SELECT.addEventListener('change', (event) => {
    BOX1.style.fontFamily = event.target.value;
})

COLOR.addEventListener('click', function () {
    COLORCONTEINER.style.display = 'flex'

})

COLORCONTEINER.addEventListener('click', function (event) {

    if (event.target.classList.contains('color')) {
        BOX1.style.color = event.target.textContent;
        COLORCONTEINER.style.display = 'none'
    }
})

BACKGROUND.addEventListener('click', function () {
    COLORCONTEINER2.style.display = 'flex'

})

COLORCONTEINER2.addEventListener('click', function (event) {

    if (event.target.classList.contains('color')) {
        BOX1.style.backgroundColor = event.target.textContent;
        COLORCONTEINER2.style.display = 'none'
    }
})

checkBox.addEventListener('click', function () {
    if (checkBox.checked == true) {
        BOX1.style.fontWeight = "bold";
    } else {
        BOX1.style.fontWeight = "normal";
    }
})

checkBox2.addEventListener('click', function () {
    if (checkBox2.checked == true) {
        BOX1.style.fontStyle = "italic";
    } else {
        BOX1.style.fontStyle = "normal";
    }
})

ADD.addEventListener('click', function () {
    BOX1.style.display = "none"
    BOX2.style.display = "none"
    BOX3.style.display = "none"
    BOX5.style.display = 'block'

})

TABLE.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        if (event.target.type === 'radio') {
            BOX5_1.style.display = 'flex'
            BOX5_2.style.display = 'block'
            BOX6.style.display = 'none'
        }
    })
})

LIST.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
        if (event.target.type === 'radio') {
            BOX6.style.display = 'flex'
            BOX5_1.style.display = 'none'
            BOX5_2.style.display = 'none'
        }
    })
})

TABLEBT.addEventListener('click', function () {
    BOX5.style.display = 'none'
    BOX1.style.display = "block"
    BOX2.style.display = "flex"
    BOX3.style.display = "block"
    let mytable = '';
    mytable += `<table>`;
    for (let i = 1; i <= TR.value; i++) {
        mytable += `<tr>`;
        for (let j = 1; j <= TD.value; j++) {
            mytable += `<td style="width: ${width_of_TD.value}px; height: ${height_of_TD.value}px; border:${width_of_border.value}px ${type_of_border.value}  ${color_of_border.value} ; ">` + `</td>`;
        }
        mytable += `</tr>`;
    }
    mytable += `</table>`;
    TXTAREA.value += mytable;
})

LISTBT.addEventListener('click', function () {
    BOX5.style.display = 'none'
    BOX1.style.display = "block"
    BOX2.style.display = "flex"
    BOX3.style.display = "block"
    let myli = '';
    myli += `<ul style="list-style-type: ${LIMARKS.value}">`;
    for (let i = 0; i < COUNTLI.value; i++) {
        myli += `<li> List${i + 1} </li>`;
    }
    myli += `</ul>`;
    TXTAREA.value += myli;

})

LIMARKS.addEventListener('change', (event) => {
    UL.style.listStyleType = event.target.value;
})