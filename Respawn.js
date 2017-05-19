#pragma strict

var startPointPrefab : GameObject;
var livesPrefab : GameObject;
function Start(){
	if(startPointPrefab == null){
		startPointPrefab = GameObject.FindGameObjectWithTag("Start");
	}
	if(livesPrefab == null){
	livesPrefab = GameObject.FindGameObjectWithTag("Lives");
	}
}

function OnTriggerEnter(collider : Collider){
	collider.gameObject.transform.position = startPointPrefab.gameObject.transform.position;
	collider.gameObject.GetComponent(Rigidbody).velocity = Vector3.zero;
	LevelManager.playerLives--;

	livesPrefab.GetComponent.<UnityEngine.UI.Text>().text = "Lives : " + LevelManager.playerLives;

}