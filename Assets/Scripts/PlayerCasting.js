static var DistanceFormTarget : float;

var ToTarget : float;

function Update () {
    var hit : RaycastHit;   
    if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward),hit))   {
        ToTarget = hit.distance;
        DistanceFormTarget = ToTarget;
    }     
}