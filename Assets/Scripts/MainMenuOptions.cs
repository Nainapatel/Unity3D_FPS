﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MainMenuOptions : MonoBehaviour {

	public void PlayGame (){
		SceneManager.LoadScene(1);
	}

	public void CreditScene () {
		SceneManager.LoadScene(2);
	}
}
