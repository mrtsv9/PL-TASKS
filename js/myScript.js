function onadd() {
    var n = document.getElementById("products").options.selectedIndex;
    var name = document.getElementById("products").options[n].text;
    var calories = document.getElementById("products").options[n].value;
    var amount = document.getElementById("amount").value;
    find(name, calories, amount);
}


function find(name, calories, amount) {
    let calories = parseInt(calories);
    let amount = parseInt(amount);

    var table = document.getElementsByClassName(name);
    var Row = document.getElementById(name);
    if (Row != null) {
        var tempAmount = Row.getElementsByClassName('amount');
        var total = Row.getElementsByClassName("total");
        let param = parseInt(tempAmount[0].innerText);
        if (amount > 0) {
            total[0].innerText = (param + calories) * amount;
            count[0].innerText = param + amount;
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


function addRow(name, calories, amount) {
    var table = document.getElementById('rows');

    if (name != null) {
        var tr = document.createElement("tr");
        tr.id = name;

        tr.innerHTML = '<tr class="name">' + name + '</tr> <tr class="calories">' + calories
            + '</tr> <tr class="amount">'
            + amount + '</th> <tr class="total">'
            + calories * amount + '</th>';

        table.appendChild(tr);
    }
    else {
        alert("Пустое имя")
    }
}