$("#button1").click(function () {
    if ($("input").val() === "") {
        return
    }
    else {
        $("ul").append("<li>" + $("input").val() + `<button class="button2">` + `<img src="checkmark.svg" id="checkmark">` 
        + `<img src="trash.svg" id="trash">` + "</button>" + "</li>")
    }
})

$("ul").click(function () {
    $("#trash:hover").closest("li").remove()
})


$("ul").click(function () {
    $("#checkmark:hover").closest("li").css("text-decoration-line", "line-through")
    $("#checkmark:hover").closest("li").css("text-decoration-thickness", "3px")
    $("#checkmark:hover").closest("li").css("text-decoration-color", "rgb(223, 111, 111)")
    $("#checkmark:hover").remove()
})
