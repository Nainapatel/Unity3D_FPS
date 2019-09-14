using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class CaveDoor : MonoBehaviour {

	public float TheDistance;
	public GameObject ActionDisplay;
	void Update () {
		TheDistance = PlayerPrefs.GetFloat("TheCasting");
	}

	void OnMouseOver() {
		if (TheDistance <= 3) {
			ActionDisplay.GetComponent<Text>().text = "Enter Cave";
			ActionDisplay.SetActive(true);
		}
		if (Input.GetButtonDown("Action")){
			if (TheDistance <= 3) {
				GetComponent<BoxCollider>().enabled = false;
				ActionDisplay.SetActive(false);
				SceneManager.LoadScene(6);
				
			}
		}
		
	}

	void OnMouseExit() {
		ActionDisplay.SetActive(false);
	}
}
