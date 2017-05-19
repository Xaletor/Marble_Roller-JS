#pragma strict

function OnTriggerEnter(collider : Collider){
	LevelManager.levelComplete = true;
}