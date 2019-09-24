var Flash : GameObject;


function Update () {
    if(GlobalAmmo.LoadedAmmo >= 1) {
    if(Input.GetButtonDown("Fire1")) {
        var gunsound : AudioSource = GetComponent.<AudioSource>();
        gunsound.Play();
        Flash.SetActive(true);
        Muzzleoff();
        GetComponent.<Animation>().Play("GunShot9mm");
        GlobalAmmo.LoadedAmmo -= 1;
    }
}
}

function Muzzleoff () {
    yield WaitForSeconds(0.1);
    Flash.SetActive(false);
}