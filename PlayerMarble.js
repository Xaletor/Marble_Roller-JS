#pragma strict

var speed : float = 10;
private var rigidBody : Rigidbody;
private var meshRenderer : MeshRenderer;
public var materials : Material[];
private static var materialIndex : int;

function Start () {
	rigidBody = GetComponent.<Rigidbody>();
	meshRenderer = GetComponent.<MeshRenderer>();
}

function Update () {
var horizontal : float = Input.GetAxis("Horizontal");
var vertical : float = Input.GetAxis("Vertical");
var speed : float = 10;

rigidBody.AddForce(Vector3(horizontal, 0.0, vertical) * speed);


if(Input.GetKeyDown(KeyCode.C)){
	materialIndex++;
	if(materialIndex >= 12)
	{
		materialIndex = 0;
	}
}

meshRenderer.material = materials[materialIndex];

}