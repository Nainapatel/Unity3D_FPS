var EnemyHealth : int = 10;
var TheZombie : GameObject;

function DeductPoints (DamageAmount : int) {
    EnemyHealth -= DamageAmount;
}

function Update () {
    if (EnemyHealth <= 0) {
        this.GetComponent("ZombieFollow").enabled = false;
        TheZombie.GetComponent.<Animation>().Play("Dead");
       
        EnemyHealth = 1;
        EndZombie();
    }
}

function EndZombie () {
    yield WaitForSeconds(1);
        Destroy(gameObject);
        GlobalScore.CurrentScore += 1;
}