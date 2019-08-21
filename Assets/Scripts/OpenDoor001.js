import UnityEngine.UI;

var TextDisplay : GameObject;
var TheDistance : float = PlayerCasting.DistanceFromTarget;

function Update () {
    TheDistance = PlayerCasting.DistanceFromTarget;
}

function OnMouseOver () {
    if (TheDistance <= 2){
        TextDisplay.GetComponent.<Text>().text = "Press Button";
    }
}

function OnMouseExit () {
    TextDisplay.GetComponent.<Text>().text = "";
}