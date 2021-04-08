

    var List01 = new Array();
    var List02 = new Array();
    var List03 =  new Array();
    var List05 = [];
    var List06 = [ "OPEN","DELETE" ,"EDIT" ];
    var n = 2;
    var x = 1;
    var d = new Date();
    var NewRow;
    var cell = [];

/*
    function myFunction() {

        var addrow = document.getElementById("show");
        var NewRow = addrow.insertRow(n);

        List01.push(document.getElementById("TaskName").value);
        List02.push(document.getElementById("Discribtion").value);
        var e = document.getElementById("ddlViewBy");
        List03.push(e.options[e.selectedIndex].text);

        cell0=NewRow.insertCell(0);
        cell1=NewRow.insertCell(1);
        cell2=NewRow.insertCell(2);
        cell3=NewRow.insertCell(3);
        cell4=NewRow.insertCell(4);

        cell0.innerHTML= List01.pop();
        cell1.innerHTML= List02.pop();
        cell2.innerHTML= List03.pop();
        cell3.innerHTML = d.toString();

        
        for(var i=0 ; i<3 ; i++){
            List05 [i] = document.createElement("button");
            cell4.appendChild(List05 [i]);
            List05 [i].innerHTML=List06[i];
        }

        List05 [0].onclick = function () {
            location.href = "taskDetails.html";}
        List05 [1].onclick = function () {
                location.href = "toDoList.html";}
        List05 [2].onclick = function () { document.getElementById("show").deleteRow(n);; n-- ;}

        n++;
        x++;
    }
    */

    function myFunction() {

        addRow(n);
        pushValueInArrays();
        addCell(NewRow);
        dataInsertCell();
        addButton();
        addActionToButton();
        n++;
        x++;
    }

    function addRow(n) {
        var addrow = document.getElementById("show");
        NewRow = addrow.insertRow(n);
    }

    function pushValueInArrays() {
        List01.push(document.getElementById("TaskName").value);
        List02.push(document.getElementById("Discribtion").value);
        var e = document.getElementById("ddlViewBy");
        List03.push(e.options[e.selectedIndex].text);
    }

    function addCell(NewRow) {
        for(var i=0 ; i<5 ; i++){
            cell[i]=NewRow.insertCell(i);
        }
    }

    function dataInsertCell() {
        cell[0].innerHTML= List01.pop();
        cell[1].innerHTML= List02.pop();
        cell[2].innerHTML= List03.pop();
        cell[3].innerHTML = d.toString();
    }

    function addButton() {
        for(var i=0 ; i<3 ; i++){
            List05 [i] = document.createElement("button");
            cell[4].appendChild(List05 [i]);
            List05 [i].innerHTML=List06[i];
        }
    }

    function addActionToButton() {
        List05 [0].onclick = function () {
            location.href = "taskDetails.html";}
        List05 [1].onclick = function () {
                location.href = "toDoList.html";}
        List05 [2].onclick = function () { document.getElementById("show").deleteRow(n);; n-- ;}
    }

  

