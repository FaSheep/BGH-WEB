document.title = room.roomName;
refresh();

function add(index) {
    room.roleList[index].number++;
    refresh();
}

function reduce(index) {
    if (room.roleList[index].number > 0) {
        room.roleList[index].number--;
        refresh();
    }
}

function editNum(index, input) {

    if (input.value >= 0 && input.value !== "") {
        room.roleList[index].number = input.value;
    } else {
        input.value = input.placeholder;
        room.roleList[index].number = input.placeholder;
    }
    // alert(room.roleList[index].number);
}

function addRole() {
    room.roleList.push(
        {
            name: document.getElementById("newRoleName").value,
            imagePath: "../../images/role.png",
            defNumber: 1,
            number: 1
        });
    refresh();
}

function removeRole(index) {
    room.roleList.splice(index, 1);
    refresh();
}

function refresh() {
    var list = document.getElementById("roleList");
    list.innerHTML = "";
    for (let i = 0; i < room.roleList.length; i++) {
        list.innerHTML += (
            "<li>" +
            "<img class='deleteImage' src='../../images/delete.png' onclick='removeRole({2})'>" +
            "<img class='roleImage' src='{0}'>" +
            "<h1 class='roleName'>{1}</h1>" +
            "<div style='padding: 0 0 2vmin 0; display:flex; align-items: center; justify-content: center'>" +
            "<img class='op' src='../../images/reduce.png' onclick='reduce({2})'>" +
            "<input type='number' placeholder='{3}' value='{4}' onchange='editNum({2},this)'>" +
            "<img class='op' src='../../images/add.png' onclick='add({2})'>" +
            "</div>" +
            "</li>")
            .replace("{0}", room.roleList[i].imagePath).replace("{1}", room.roleList[i].name)
            .replace("{3}", room.roleList[i].defNumber).replaceAll("{2}", i)
            .replace("{4}", room.roleList[i].number);
    }
}

function startGame() {
    if (room.roleList.length === 0) {
        alert("no player in this game");
        return;
    }
    var num = 0;
    for (const role of room.roleList) {
        num += role.number;
    }
    if (num <= 0) {
        alert("no player in this game");
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://" + location.host + "/web/add.do", true);
    xhr.setRequestHeader("content-type", "text/plain");
    xhr.send(JSON.stringify(room));
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                location.href = "http://" + location.host + "/web/share.do?id=" + xhr.responseText;
            } else {
                alert(xhr.responseText);
            }
        }
    }
}


