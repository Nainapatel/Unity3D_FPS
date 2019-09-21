function Update () {
    if(GlobalAmmo.LoadedAmmo >= 1) {
    if(Input.GetButtonDown("Fire1")) {
        var gunsound : AudioSource = GetComponent.<AudioSource>();
        gunsound.Play();
        
         GetComponent.<Animation>().Play("RifleShot");
        GlobalAmmo.LoadedAmmo -= 1;
    }
}
}

