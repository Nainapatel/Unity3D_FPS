﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CardToMenuC : MonoBehaviour {

void Start () {
StartCoroutine (ReturnToMenu ());
}

IEnumerator ReturnToMenu(){
	yield return new WaitForSeconds (11);
	SceneManager.LoadScene(4);
}
}
