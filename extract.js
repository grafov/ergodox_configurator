var list = document.querySelectorAll('.layout > .key');
var text = "";
for(var i=0; i<list.length; i++) {
    text += list[i].getAttribute("data-reactid") + "   ";
    text += list[i].style.cssText;
    text += "\n";
}
