static var Count : int;

function Update () {
    if(GlobalAmmo.LoadedAmmo >= 1) {
        if(Input.GetButtonDown("Fire1")) {
            Debug.Log("SMGFire============"+ Count);
            Count++;
            var gunsound : AudioSource = GetComponent.<AudioSource>();
            gunsound.Play();
            GetComponent.<Animation>().Play("SMGShot");
            GlobalAmmo.LoadedAmmo -= 1;
        }
    }
}

