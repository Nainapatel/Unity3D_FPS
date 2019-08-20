
function OnTriggerEnter (col : Collider) {
    GlobalAmmo.CurrentAmmo += 10;
    this.gameObject.SetActive(false);
}