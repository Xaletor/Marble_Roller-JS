#pragma strict
var messages : String[] = new String[8];
var tutorialPrefab : GameObject;
function Start () {
	if(tutorialPrefab == null){
		tutorialPrefab = GameObject.FindGameObjectWithTag("Tutorial");
	}
}

function Update () {
	 if(Time.timeSinceLevelLoad < 5){
	 	tutorialPrefab.GetComponent.<UnityEngine.UI.Text>().text = messages[Application.loadedLevel];
	 }
	 else{
	 	tutorialPrefab.GetComponent.<UnityEngine.UI.Text>().text = " ";
	 }
}