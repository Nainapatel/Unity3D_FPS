var ObjectiveComplete : GameObject;
function DeductPoints (DamageAmount : int) {
    GlobalScore.CurrentScore += 100;
    ObjectiveComplete.SetActive(true);
}