player1Name = localStorage.getItem("Player1");
	player2Name = localStorage.getItem("Player2");

	player1Score = 0;
	player2Score = 0;

document.getElementById("Player1Nome").innerHTML = player1Name + " : ";
document.getElementById("Player2Nome").innerHTML = player2Name + " : ";

document.getElementById("Player1Pontos").innerHTML = player1Score ;
document.getElementById("Player2Pontos").innerHTML = player2Score ;

document.getElementById("PlayerPergunta").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("PlayerResposta").innerHTML = "Turno de Resposta - " + player2Name ;

function enviar() {
	getWord = document.getElementById("txtPalavra").value;
	word = getWord.toLowerCase();
	console.log("palavra em caixa baixa = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenghtDivide2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenghtDivide2);
	console.log(charAt2);

    lenghtMinus1 = word.length - 1; 
    charAt3 = word.charAt(lenghtMinus1); 
	console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
	console.log(removeCharAt3);

    questionWord = "<h4 id='wordDisplay'> P. "+removeCharAt3+"</h4>";
    input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='Checar()'>Checar</button>";
    row =  questionWord + input_box + checkButton ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("txtPalavra").value = "";
}

var TurnoPergunta = "player1";
var TurnoResposta = "player2";

function Checar(){
    var getResposta = document.getElementById("txtPalavra").value;
    var Resposta = getResposta.toLowerCase();
    if(Resposta == word){
        if(TurnoResposta == "player1"){
            player1Score = player1Score + 1;
            document.getElementById("Player1Pontos").innerHTML = player1Score;
        }
        else{
            player2Score = player2Score + 1;
            document.getElementById("Player2Pontos").innerHTML = player2Score;
        }
    }    
    if(TurnoPergunta == "player1"){
        TurnoPergunta = "player2"
        document.getElementById("PlayerPergunta").innerHTML = "Turno de pergunta: " + player2Name;
    }
    else{
        TurnoPergunta = "player1"
        document.getElementById("PlayerPergunta").innerHTML = "Turno de pergunta: " + player1Name;
    }
    if(TurnoResposta == "player1"){
        TurnoResposta = "player2"
        document.getElementById("PlayerResposta").innerHTML = "Turno de resposta: " + player2Name;
    }
    else{
        TurnoResposta = "player1"
        document.getElementById("PlayerResposta").innerHTML = "Turno de resposta: " + player1Name;
    }
    document.getElementById("output").innerHTML = " ";
}