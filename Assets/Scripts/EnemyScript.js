var EnemyHealth : int = 10;
var TheZombie : GameObject;

function DeductPoints (DamageAmount : int) {
    EnemyHealth -= DamageAmount;
}

function Update () {
    if (EnemyHealth <= 0) {
        this.GetComponent("ZombieFollow").enabled = false;
        TheZombie.GetComponent.<Animation>().Play("Dead");
        EndZombie();
    }
}

function EndZombie () {
    yield WaitForSeconds(3);
        Destroy(gameObject);
}