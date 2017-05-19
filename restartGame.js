#pragma strict

function Update () {
	if(Input.GetKeyDown(KeyCode.Return) || Input.GetKeyDown(KeyCode.Space)){
		LevelManager.playerLives = 9;
		PlayerPrefs.SetInt("Lives",LevelManager.playerLives);
		PlayerPrefs.Save();
		Application.LoadLevel(0);
	}
}