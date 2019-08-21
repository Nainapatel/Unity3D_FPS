var AmmoSound : AudioSource;

function OnTriggerEnter (col : Collider) {
    AmmoSound.Play();
    GlobalAmmo.CurrentAmmo += 10;
    this.gameObject.SetActive(false);
}