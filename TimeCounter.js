#pragma strict

private var textHolder : String;
static var timerHolder : int;
private var textSender : String;

function Start () {

}

function Update () {
	textHolder = "Time : ";
	timerHolder = Time.timeSinceLevelLoad;
	textSender = null;
	textSender = textHolder + timerHolder.ToString();
	GetComponent.<UnityEngine.UI.Text>().text = null;
	GetComponent.<UnityEngine.UI.Text>().text = textSender;
}