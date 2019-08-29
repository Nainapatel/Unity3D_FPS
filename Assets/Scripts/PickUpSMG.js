var TheDistance : float = PlayerCasting.DistanceFronTarget;
var TextDisplay : GameObject;

var FakeGun : GameObject;
var RealGun : GameObject;
var AmmoDisplay : GameObject;
var PickUpAudio : AudioSource;

var ObjectiveComplete : GameObject;

function Update () {
    TheDistance = PlayerCasting.DistanceFronTarget;
}

function OnMouseOver () {
    if (TheDistance <= 2) {
        TextDisplay.GetComponent.<Text>().text = "Take SMG";
    }
    if (Input.GetButtonDown("Action")) {
        if(TheDistance <= 2){
            TakeNineMil();
            ObjectiveComplete.SetActive(true);
        }
    }
}

function OnMouseExit () {
    TextDisplay.GetComponent.<Text>().text = "" ;
}

function TakeNineMil () {
    PickUpAudio.Play();
    transform.position = Vector3(0, -1000, 0);
    FakeGun.SetActive(false);
    RealGun.SetActive(true);
    AmmoDisplay.SetActive(true);
}