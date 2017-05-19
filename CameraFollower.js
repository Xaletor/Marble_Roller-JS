#pragma strict

var PlayerPrefab : GameObject;
var xOffset : float;
var zOffset : float;
var yOffset : float;

function Start () {
	if(PlayerPrefab == null){
		PlayerPrefab = GameObject.FindGameObjectWithTag("Player");
	}
}

function Update () {
	gameObject.transform.position = new Vector3(PlayerPrefab.gameObject.transform.position.x + xOffset, PlayerPrefab.gameObject.transform.position.y + yOffset, PlayerPrefab.gameObject.transform.position.z + zOffset);
}