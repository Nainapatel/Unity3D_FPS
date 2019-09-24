var EnemyHealth : int = 10;
var TheZombie : GameObject;

function DeductPoints (DamageAmount : int) {
    EnemyHealth -= DamageAmount;
}

function Update () {
    if (EnemyHealth <= 0) {
       
        EndZombie();
    }
}

function EndZombie () {
    yield WaitForSeconds(0.5);
    this.GetComponent("ZombieFollow").enabled = false;
    TheZombie.GetComponent.<Animation>().Play("Dead");
    EnemyHealth = 1;
    ZombieEnd();
       
}


function ZombieEnd() {
    yield WaitForSeconds(1);
    Destroy(gameObject);
    GlobalScore.CurrentScore += 1;
}