function toRoom(type) {
    var url;
    switch (type) {
        case "werewolf":
            url = "/html/werewolf.html";
            break;
        case "avalon":
            url = "/html/werewolf.html";
            break;
        case "custom":
        default:
            url = "/html/custom.html";
    }
    location.href = "http://" + location.host + url;
}