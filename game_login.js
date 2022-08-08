function login(){
    player1 = document.getElementById("txtPlayer1").value;
    player2 = document.getElementById("txtPlayer2").value;

    localStorage.setItem("Player1", player1);
    localStorage.setItem("Player2", player2);

    window.location = "game_page.html";
}

