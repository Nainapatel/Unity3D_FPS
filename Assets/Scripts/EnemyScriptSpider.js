var EnemyHealth : int = 15;
var TheSpider : GameObject;

function DeductPoints (DamageAmount : int) {
    EnemyHealth -= DamageAmount;
}

function Update () {
    if (EnemyHealth <= 0) {
        this.GetComponent("SpiderFollow").enabled = false;
        TheSpider.GetComponent.<Animation>().Play("Death");
        EnemyHealth = 1;
    }
}

function EndZombie () {
    yield WaitForSeconds(3);
        Destroy(gameObject);
}