var DamageAmount : int = 5;
var TargetDistance : float;
var AllowedRange : float = 100;

var hit : RaycastHit;
var TheBullet : GameObject;
var TheBlood : GameObject;
var TheBloodGreen : GameObject;

function Start () {
    DamageAmount = 5;
}

function Update () {
    if(GlobalAmmo.LoadedAmmo >= 1){

    if(Input.GetButtonDown("Fire1")) {

        var Shot : RaycastHit;
        if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), Shot)){
            TargetDistance = Shot.distance;
                if (TargetDistance < AllowedRange) {
                   
                    if(Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)){
                        if(hit.transform.tag == "Zombie") {
                            Instantiate(TheBlood, hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
                        }
                        if(hit.collider.tag == "ZombieHead") {
                            DamageAmount = 10;
                            Instantiate(TheBlood, hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
                        }
                      if(hit.transform.tag == "Spider") {
                            Instantiate(TheBloodGreen, hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
                        }
                       if(hit.transform.tag == "Untagged"){
                            Instantiate(TheBullet, hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
                        }
                    }
                    Shot.transform.SendMessage("DeductPoints", DamageAmount); 
                    DamageAmount = 5;
                }
        }
    } 
}
}
