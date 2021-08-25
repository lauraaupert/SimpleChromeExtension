//const content = document.getElementById("primary-inner");
//content.parentNode.removeChild(content)

var content = $("#primary-inner");
var contentParent = content.parent();
content.remove();
var photoUrl = "https://static.scientificamerican.com/sciam/cache/file/0B4ED7B8-6C6A-4031-BEE1253D115FD0CC_source.jpg?w=590&h=800&9717A2E2-EE9D-4CD5-A52BB4E3ED51CBF4"
var image = $('<img>').attr("src", photoUrl)
contentParent.append(image)
// contentParent.append('<img id="theImg" src="https://static.scientificamerican.com/sciam/cache/file/0B4ED7B8-6C6A-4031-BEE1253D115FD0CC_source.jpg?w=590&h=800&9717A2E2-EE9D-4CD5-A52BB4E3ED51CBF4" />')