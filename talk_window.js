document.addEventListener('DOMContentLoaded', function () {
    
    var icon = get("#chatbot-icon")[0]; 
    var chat_window = get(".chat_window")[0];

    // 為圖片元素添加點擊事件監聽器 
    icon.addEventListener("click", function() { 
        // 切換聊天機器人視窗的顯示狀態 
        chat_window.style.width = chat_window.style.width == "300px" ? "30%" : "300px";
        chat_window.style.height = chat_window.style.height == "150px" ? "80%" : "150px"; 
    });
});