
function onadd() {
    var n = document.getElementById("products").options.selectedIndex;
    var name = document.getElementById("products").options[n].text;
    var calories = document.getElementById("products").options[n].value;
    var amount = document.getElementById("amount").value;
    find(name, calories, amount,);
}

function find(name, calories, amount) {
    let tempCalories = parseInt(calories);
    let tempAmount = parseInt(amount);

    var table = document.getElementsByClassName(name);
    var Row = document.getElementById(name);
    if (Row != null) {
        var count = Row.getElementsByClassName('amount');
        var total = Row.getElementsByClassName("total");
        let inc = parseInt(count[0].innerText);
        if (tempAmount > 0) {
            count[0].innerText = parseInt(inc) + parseInt(amount);
            total[0].innerText = tempCalories * count[0].innerText
        }
    }
    else {
        let length = table.length;
        if (length == 0) {
            if (amount > 0) {
                addRow(name, amount, calories);
            }
        }
    }

}

function addRow(name, amount, calories) {
    var table = document.getElementById('rows');

    if (name != null) {
        var tr = document.createElement("tr");
        tr.id = name;

        tr.innerHTML = '<th class="name">' + name + '</th> <th class="calories">' + calories
            + '</th> <th class="amount">'
            + amount + '</th> <th class="total">'
            + calories * amount + '</th>';

        table.appendChild(tr);
    }
}

function count() {
    var table = document.getElementById("rows").getElementsByTagName("tr");
    let result = 0;
    let length = table.length;
    for (let i = 0; i < length; i++) {
        let res = parseInt(table[i].getElementsByClassName("total")[0].innerText);
        result += res;
    }
    document.getElementById("totalResult").innerText = result;
}

function clearTable() {
    document.getElementById("totalResult").innerText = 0;
    var table = document.getElementById("rows");
    var rowCount = table.rows.length;
    while (rowCount > 0) {
        table.deleteRow(0);
    }
}