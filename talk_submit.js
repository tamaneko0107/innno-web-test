$("#messageArea").on("submit", function(event) {
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes();
    var userMSG = $("#text").val();
    $("#text").val("");
    var userHTML = '<div class="user_msg_cotainer"><div class="user_msg_cotainer_send">' + userMSG + ","+
                    '<span class="msg_time_send">'+ time +'</span>'
                    '</div></div>';
    $("#messageFormeight").append(userHTML);
    $.ajax({
        url: "/get",
        type: "POST",
        data: {msg: userMSG},
        success: function(data) {
            var botMSG = '<div class="bot_msg_cotainer"><div class="bot_msg_cotainer_send">' + data + ","+
                        '<span class="msg_time_send">'+ time +'</span>'
                        '</div></div>';
            $("#messageFormeight").append(botMSG);
        }
    })
    event.preventDefault();
});