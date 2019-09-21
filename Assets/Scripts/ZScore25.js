var ObjectiveComplete : GameObject;
// GlobalScore.CurrentScore = 0;

function DeductPoints (DamageAmount : int) {
    Debug.Log("CurrentScore: " + GlobalScore.CurrentScore);


    // GlobalScore.CurrentScore += 1;
    ObjectiveComplete.SetActive(true);
}