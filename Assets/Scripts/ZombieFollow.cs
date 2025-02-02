using UnityEngine;
using System.Collections;

public class ZombieFollow : MonoBehaviour {
    public GameObject ThePlayer;
    public float TargetDistance;
    public float AllowedRange = 10;
    public GameObject TheEnemy;
    public float EnemySpeed;
    public int AttackTrigger;
    public RaycastHit Shot;

    public int IsAttacking;
    public GameObject ScreenFlash;
    public AudioSource Hurt01;
 
    public int PainSound;

    void Update () {
        transform.LookAt (ThePlayer.transform);
        if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), out Shot)){
            TargetDistance = Shot.distance;
                EnemySpeed = 0.01f;
                if(AttackTrigger == 0){
                    TheEnemy.GetComponent<Animation> ().Play ("Walk");
                    transform.position = Vector3.MoveTowards (transform.position, ThePlayer.transform.position, Time.deltaTime);
                }
        }
        if(AttackTrigger == 1) {
            if(IsAttacking == 0){
                StartCoroutine (EnemyDamage ());
        }
            EnemySpeed = 0;
            TheEnemy.GetComponent<Animation> ().Play ("Attack");
        }
    }
    void OnTriggerEnter () {
        AttackTrigger = 1;
    }
    void OnTriggerExit () {
        AttackTrigger = 0;    
    }

    IEnumerator EnemyDamage () {
        IsAttacking = 1;
        PainSound = Random.Range (1,4);
        yield return new WaitForSeconds(0.9f);
        ScreenFlash.SetActive (true);
        GlobalHealth.PlayerHealth -= 2;
        if (PainSound == 1) {
            Hurt01.Play();
        }
        yield return new WaitForSeconds(0.05f);
        ScreenFlash.SetActive (false);
        yield return new WaitForSeconds (1);
        IsAttacking = 0;
    }
}
