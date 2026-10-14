console.log('Hello World!');
const pushButton = document.getElementById("pushButton")
pushButton.addEventListener("click", function(e){
  console.log(e)
}
)
function onClickPush() {
  console.log('test')
  document.getElementById("bodyContents").text('test')
}