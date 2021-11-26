//Дополнительный совет - не загрязняйте глобальное пространство переменными, лучше объявите функцию, которая будет добавлять вашу разметку в таблицу и объявляйте переменные в ней
function myFunc(name, count, kall) {

    //Для начала, вам нужно найти элемент, в который нужно вставить вашу разметку. Вданном случае таблицу с id='table'.
    var table = document.getElementById('rowStart');

    //Тут выдерните ваше значение из locslStorage, я просто присвою 1.

    if (name != null) {
        //Теперь создаем строку и присваиваем ее переменной.
        var tr = document.createElement("tr");
        tr.id = name;



        //добавляем разметку в созданную строку
        tr.innerHTML = '<th class="Name">' + name + '</th> <th class="Count">' + count + '</th> <th >' + kall + '</th> <th class="Res">' + count * kall + '</th>';

        //вставляем строку в таблицу
        table.appendChild(tr);

    }
    else {
        alert("Пустое имя");
    }

}

function find(name, count, kall) {
    let per2 = parseInt(count);
    let per3 = parseInt(kall);

    var table = document.getElementsByClassName(name);
    var Row = document.getElementById(name);
    if (Row != null) {
        var countt = Row.getElementsByClassName('Count');
        var res = Row.getElementsByClassName("Res");
        let per1 = parseInt(countt[0].innerText);
        if (per2 > 0) {
            res[0].innerText = (per1 + per2) * per3;
            countt[0].innerText = per1 + per2;
        }
    }
    else {
        let length = table.length;
        if (length == 0) {
            if (per2 > 0) {

                myFunc(name, count, kall);
            }
        }
    }

}


function onadd() {
    var n = document.getElementById("product").options.selectedIndex;
    var name = document.getElementById("product").options[n].text;
    var kall = document.getElementById("product").options[n].value;
    var count = document.getElementById("kolvo").value;
    find(name, count, kall);
}


function oditog() {
    var table = document.getElementById("rowStart").getElementsByTagName("tr");
    let myres = 0;
    let length = table.length;
    for (let i = 0; i < length; i++) {
        let resa = parseInt(table[i].getElementsByClassName("Res")[0].innerText);
        myres += resa;
    }
    document.getElementById("myresult").innerText = myres;
}

function oncleartable() {
    var table = document.getElementById("rowStart")
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
    document.getElementById("myresult").innerText = 0;
}