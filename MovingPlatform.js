#pragma strict
@Range (0f,1f)
var speed : float;
var minDistance : float;
var maxDistance : float;
var position : Vector3;
var movement : Vector3;
var isHorizontal : boolean;			// Dont modify in-game...
var reverse	: boolean;

function Start(){

	speed = Random.Range(0.02f,0.06f);
	position = gameObject.transform.position;
	if(isHorizontal && !reverse){
		movement = Vector3.left * speed;
	}
	else if(!isHorizontal && !reverse){
		movement = Vector3.up * speed;
	}
	else if(isHorizontal && reverse){
		movement = Vector3.right * speed;
	}
	else if(!isHorizontal && reverse){
		movement = Vector3.down * speed;
	}
}

function Update () {
	if(!isHorizontal){
		if(gameObject.transform.position.y > position.y + maxDistance + 1){
			movement = Vector3.down * speed;
		}
		else if(gameObject.transform.position.y < position.y + minDistance - 1){
			movement = Vector3.up * speed;
		}
	}

	else if(isHorizontal){
		if(gameObject.transform.position.x > position.x + maxDistance + 1 || gameObject.transform.position.z < position.z + minDistance - 1){
			movement = Vector3.left * speed;
		}
		else if(gameObject.transform.position.x < position.x + minDistance - 1 || gameObject.transform.position.z > position.z + maxDistance + 1){
			movement = Vector3.right * speed;
		}
	}

	transform.Translate(movement);
}
