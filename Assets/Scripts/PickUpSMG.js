var TheDistance : float = PlayerCasting.DistanceFronTarget;
var TextDisplay : GameObject;

var FakeGun : GameObject;
var RealGun : GameObject;

var PickUpAudio : AudioSource;

var ObjectiveComplete : GameObject;
var Mechanics : GameObject;
static var PickUp : int;
var PickUpRifle : GameObject;
var PickUp9mm : GameObject;
var PickUpSniper : GameObject;
var PickUpSMG : GameObject;
var PickUpKnife : GameObject;

function Update () {
    TheDistance = PlayerCasting.DistanceFronTarget;
}

function OnMouseOver () {
    if (TheDistance <= 2) {
        TextDisplay.GetComponent.<Text>().text = "Take SMG";
    }
    if (Input.GetButtonDown("Action")) {
        PickUpRifle.SetActive(false);
        PickUp9mm.SetActive(false);
        PickUpSniper.SetActive(false);
        PickUpKnife.SetActive(false);
        if(TheDistance <= 2){
            TakeNineMil();
            Mechanics.SetActive(true);
            ObjectiveComplete.SetActive(true);
        }
    }
}

function OnMouseExit () {
    TextDisplay.GetComponent.<Text>().text = "" ;
}

function TakeNineMil () {

    PlayerPrefs.SetInt("TakenAGun", 1);
    PickUpAudio.Play();
    transform.position = Vector3(0, -1000, 0);
    FakeGun.SetActive(false);
    RealGun.SetActive(true);
 
}