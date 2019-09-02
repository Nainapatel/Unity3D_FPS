var DamageAmount : int = 5;
var TargetDistance : float;
var AllowedRange : float = 15;
var hit : RaycastHit;
var TheBullet : GameObject;

function Update () {
    if(GlobalAmmo.LoadedAmmo >= 1){

    if(Input.GetButtonDown("Fire1")) {

        var Shot : RaycastHit;
        if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), Shot)){
            TargetDistance = Shot.distance;
                if (TargetDistance < AllowedRange) {
                    Shot.transform.SendMessage("DeductPoints", DamageAmount);
                    if(Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit)){
                        Instantiate(TheBullet, hit.point, Quaternion.FromToRotation(Vector3.up, hit.normal));
                    }
                }
        }
    } 
}
}
