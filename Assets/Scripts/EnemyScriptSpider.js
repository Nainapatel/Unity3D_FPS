var EnemyHealth : int = 15;
var TheSpider : GameObject;

function DeductPoints (DamageAmount : int) {
    EnemyHealth -= DamageAmount;
}

function Update () {
    if (EnemyHealth <= 0) {
        
        EndZombie();
    }
}

function EndZombie () {
    if(GunFire.Count == 6){
        Debug.Log("Click==========="+GunFire.Count);
        this.GetComponent("SpiderFollow").enabled = false;
        TheSpider.GetComponent.<Animation>().Play("Death");
        EnemyHealth = 1;
        SpiderEnd();
        GunFire.Count = 0;
    }
    else if(SMGFire.Count == 6){
        this.GetComponent("SpiderFollow").enabled = false;
        TheSpider.GetComponent.<Animation>().Play("Death");
        EnemyHealth = 1;
        SpiderEnd();
        SMGFire.Count = 0;
    }
    else if(SniperFire.Count == 1) {
        this.GetComponent("SpiderFollow").enabled = false;
        TheSpider.GetComponent.<Animation>().Play("Death");
        EnemyHealth = 1;
        SpiderEnd();
        SniperFire.Count = 0;
    }
    else if(RifleFire.Count ==4) {
        this.GetComponent("SpiderFollow").enabled = false;
        TheSpider.GetComponent.<Animation>().Play("Death");
        EnemyHealth = 1;
        SpiderEnd();
        RifleFire.Count = 0;
    }
}

function SpiderEnd() {
    yield WaitForSeconds(1);
    Destroy(gameObject);
    GlobalScore.CurrentScore += 1;
}