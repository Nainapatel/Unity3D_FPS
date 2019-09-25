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
    if(GunFire.Count == 3 ){
        Debug.Log("Click==========="+GunFire.Count);
        this.GetComponent("ZombieFollow").enabled = false;
        TheZombie.GetComponent.<Animation>().Play("Dead");
        EnemyHealth = 1;
        ZombieEnd();
        GunFire.Count = 0;
      
    }
    else if(SMGFire.Count == 3){
        this.GetComponent("ZombieFollow").enabled = false;
        TheZombie.GetComponent.<Animation>().Play("Dead");
        EnemyHealth = 1;
        ZombieEnd();
        SMGFire.Count = 0;

    }else if(SniperFire.Count == 1) {
        this.GetComponent("ZombieFollow").enabled = false;
        TheZombie.GetComponent.<Animation>().Play("Dead");
        EnemyHealth = 1;
        ZombieEnd();
        SniperFire.Count = 0;

    }else if(RifleFire.Count == 2) {
        this.GetComponent("ZombieFollow").enabled = false;
        TheZombie.GetComponent.<Animation>().Play("Dead");
        EnemyHealth = 1;
        ZombieEnd();
        RifleFire.Count = 0;
    }
}

function ZombieEnd() {
    yield WaitForSeconds(1);
    Destroy(gameObject);
    GlobalScore.CurrentScore += 1;
   
}