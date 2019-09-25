var AmmoSound : AudioSource;
function OnTriggerEnter (col : Collider) {
    AmmoSound.Play();
    if (GlobalAmmo.LoadedAmmo == 0 ){
        GlobalAmmo.CurrentAmmo += 60;
        GlobalAmmo.LoadedAmmo = GlobalAmmo.CurrentAmmo - 30;
        this.gameObject.SetActive(false);
    }else{
        GlobalAmmo.CurrentAmmo += 30;
        this.gameObject.SetActive(false);
    }
    
}