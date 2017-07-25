var TOTAL_KEY_COUNT = 76;

var layers = [];

eachElem('.key',function(e){
    e.addEventListener('click', selectKey);
});
disableForm('#form', true);

function deselectKeys() {
    eachElem('.key',function(e){
        removeClass(e, 'selected');
    });
    disableForm('#form', true);
}

function selectKey() {
    deselectKeys();
    addClass(this, 'selected');
    disableForm('#form', false);
}

function disableForm(selector, disable) {
    eachElem(selector + ' input',function(e){
        e.disabled = disable;
    });
}

function newLayer(defaultMacro) {
    layers.push(Array(TOTAL_KEY_COUNT).map(function(){
        return {
            caption: "",
            macro:   defaultMacro,
        };
    }));
}






function removeClass(elem, className) {
    elem.className = elem.className.split(' ').filter(function(cl){
        return cl !== className;
    }).join(' ');
}

function addClass(elem, className) {
    removeClass(elem, className);
    elem.className += (' ' + className);
}

function eachElem(selector, cb) {
    var elems = document.querySelectorAll(selector);
    var i;
    for(i=0;i<elems.length;i++) {
        cb(elems[i]);
    }
}
