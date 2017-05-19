#pragma strict
var timerPrefab : GameObject;
var livesPrefab : GameObject;
var bestPrefab : GameObject;
var EndPointPrefab : GameObject;
static var levelComplete : boolean = false;
static var playerLives : int = 9;
static var HighScores : int[] = new int[99];
function Start () {
	
	if(EndPointPrefab == null){
		EndPointPrefab = GameObject.FindGameObjectWithTag("Finish");
	}
	if(timerPrefab == null){
		timerPrefab = GameObject.FindGameObjectWithTag("Timer");
	}
	if(bestPrefab == null){
		bestPrefab = GameObject.FindGameObjectWithTag("Best");
	}
	if(livesPrefab == null){
		livesPrefab = GameObject.FindGameObjectWithTag("Lives");
	}
	bestPrefab.GetComponent.<UnityEngine.UI.Text>().text = "Best : " + PlayerPrefs.GetFloat("Level + " + Application.loadedLevel,HighScores[Application.loadedLevel]);
	playerLives = PlayerPrefs.GetInt("Lives",playerLives);
	livesPrefab.GetComponent.<UnityEngine.UI.Text>().text = "Lives : " + LevelManager.playerLives;
}

function Update () {
	if(playerLives <= 0)
	{
		playerLives = 9;
		PlayerPrefs.SetInt("Lives",playerLives);
		PlayerPrefs.Save();
		Application.LoadLevel("Lose");
	}
	if(levelComplete){
		Debug.Log("LEVEL COMPLETE");
		if(TimeCounter.timerHolder < HighScores[Application.loadedLevel]){
			HighScores[Application.loadedLevel] = TimeCounter.timerHolder;
			PlayerPrefs.SetFloat("Level + " + Application.loadedLevel,HighScores[Application.loadedLevel]);

		}
		PlayerPrefs.SetInt("Lives",playerLives);
		PlayerPrefs.Save();
		levelComplete = false;
		Application.LoadLevel(Application.loadedLevel + 1);
	}
}

