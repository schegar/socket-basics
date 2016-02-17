var name = getQueryVariable("name") || "Anonymus";
var room = getQueryVariable("room");
var socket = io();

$(".room-title").text(room);

socket.on("connect", function () {
	console.log(name + " connected to room " + room + " on socket.io server!");	
	socket.emit("joinRoom", {
		name: name,
		room: room
	});
})

socket.on("message", function (message) {
	var timestamp = moment.utc(message.timestamp).local().format("HH:mm:ss");
	var $message = $(".messages");

	console.log("Message: " + message.text + "\n" +
				"Time:    " + timestamp);

	$message.append("<p><strong>" + message.name + " " + timestamp + "</strong");
	$message.append("<p>" + message.text + "</p>")
	//jQuery(".messages").append("<p><strong>" + timestamp + "</strong> " +  message.text + "</p>")
})

var $form = jQuery("#message-form");

$form.on("submit", function (event) {
	event.preventDefault();

	var $message = $form.find("input[name=message]")

	socket.emit("message", {
		name: name,
		text: $message.val()
	});

	$message.val("");
})