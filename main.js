var photos = [
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/06/59561066699cf_Rc7GiRs__700.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/06/adorable-cute-raccoons-68-595642de22445__700.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/06/59563c8d5e2dd__700.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/06/5956109a5c185_sdzga5qxzuky__700.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/06/adorable-cute-raccoons-52-59561ef26a4a2__700.gif",
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/06/adorable-cute-raccoons-6-595639c4ec755__700.jpg",
    "https://static.boredpanda.com/blog/wp-content/uploads/2017/06/adorable-cute-raccoons-52-595632e9a3c3e__700.jpg",
    "https://static.scientificamerican.com/sciam/cache/file/0B4ED7B8-6C6A-4031-BEE1253D115FD0CC_source.jpg?w=590&h=800&9717A2E2-EE9D-4CD5-A52BB4E3ED51CBF4"
]
var imgCount = 0;
var content = $("#primary-inner");
var contentParent = content.parent();

var photoUrl = "https://static.scientificamerican.com/sciam/cache/file/0B4ED7B8-6C6A-4031-BEE1253D115FD0CC_source.jpg?w=590&h=800&9717A2E2-EE9D-4CD5-A52BB4E3ED51CBF4"
var image = $('<img>').attr("src", photoUrl).attr("style", "height: 500px")

content.remove();

contentParent.prepend('<div>').addClass("beautText").text("Remember the reward!").append("<br>").append(image)

image.on("click", function() {
    if (imgCount < photos.length) {
        imgCount += 1
    } else if (imgCount === photos.length) {
        imgCount = 0;
    }
    console.log(imgCount)
    image.attr("src", photos[imgCount])
})

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
console.log(getRandomArbitrary(0, 99))