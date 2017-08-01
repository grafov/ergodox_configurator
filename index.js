var TOTAL_KEY_COUNT = 76;

// Default status
var st = {
    currentLayer:0,
    currentKey:undefined,
    layers:[
        ["KC_EQUAL", "KC_1", "KC_2", "KC_3", "KC_4", "KC_5", "KC_LEFT", "KC_DELETE", "KC_Q", "KC_W", "KC_E", "KC_R", "KC_T", "TG(1)", "KC_CAPSLOCK", "KC_A", "KC_S", "KC_D", "KC_F", "KC_G", "KC_LSHIFT", "CTL_T(KC_Z)", "KC_X", "KC_C", "KC_V", "KC_B", "KC_TRANSPARENT", "LT(1,KC_GRAVE)", "KC_QUOTE", "LCTL(KC_LALT)", "KC_LEFT", "KC_RIGHT", "ALT_T(KC_APPLICATION)", "KC_LGUI", "KC_HOME", "KC_SPACE", "KC_BSPACE", "KC_END", "KC_RIGHT", "KC_6", "KC_7", "KC_8", "KC_9", "KC_0", "KC_MINUS", "TG(1)", "KC_Y", "KC_U", "KC_I", "KC_O", "KC_P", "KC_BSLASH", "KC_H", "KC_J", "KC_K", "KC_L", "LT(2,KC_SCOLON)", "KC_F12", "MEH_T(KC_NO)", "KC_N", "KC_M", "KC_COMMA", "KC_DOT", "CTL_T(KC_SLASH)", "KC_RSHIFT", "KC_UP", "KC_DOWN", "KC_LBRACKET", "KC_RBRACKET", "MO(1)", "KC_LALT", "CTL_T(KC_ESCAPE)", "KC_PGUP", "KC_PGDOWN", "KC_TAB", "KC_ENTER"],
        ["KC_ESCAPE", "KC_F1", "KC_F2", "KC_F3", "KC_F4", "KC_F5", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_EXLM", "KC_AT", "KC_LCBR", "KC_RCBR", "KC_PIPE", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_HASH", "KC_DLR", "KC_LPRN", "KC_RPRN", "KC_GRAVE", "KC_TRANSPARENT", "KC_PERC", "KC_CIRC", "KC_LBRACKET", "KC_RBRACKET", "KC_TILD", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "RGB_MOD", "KC_TRANSPARENT", "KC_TRANSPARENT", "RGB_VAD", "RGB_VAI", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_F6", "KC_F7", "KC_F8", "KC_F9", "KC_F10", "KC_F11", "KC_TRANSPARENT", "KC_UP", "KC_7", "KC_8", "KC_9", "KC_ASTR", "KC_F12", "KC_DOWN", "KC_4", "KC_5", "KC_6", "KC_PLUS", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_AMPR", "KC_1", "KC_2", "KC_3", "KC_BSLASH", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_DOT", "KC_0", "KC_EQUAL", "KC_TRANSPARENT", "RGB_TOG", "RGB_SLD", "KC_TRANSPARENT", "KC_TRANSPARENT", "RGB_HUD", "RGB_HUI"],
        ["KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MS_UP", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MS_LEFT", "KC_MS_DOWN", "KC_MS_RIGHT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MS_BTN1", "KC_MS_BTN2", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MEDIA_PLAY_PAUSE", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MEDIA_PREV_TRACK", "KC_MEDIA_NEXT_TRACK", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_AUDIO_VOL_UP", "KC_AUDIO_VOL_DOWN", "KC_AUDIO_MUTE", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_WWW_BACK"],
    ],
};

var captionMapping = {
    KC_TRANSPARENT: "",
    KC_A: 'A',
    KC_B: 'B',
    KC_C: 'C',
    KC_D: 'D',
    KC_E: 'E',
    KC_F: 'F',
    KC_G: 'G',
    KC_H: 'H',
    KC_I: 'I',
    KC_J: 'J',
    KC_K: 'K',
    KC_L: 'L',
    KC_M: 'M',
    KC_N: 'N',
    KC_O: 'O',
    KC_P: 'P',
    KC_Q: 'Q',
    KC_R: 'R',
    KC_S: 'S',
    KC_T: 'T',
    KC_U: 'U',
    KC_V: 'V',
    KC_W: 'W',
    KC_X: 'X',
    KC_Y: 'Y',
    KC_Z: 'Z',
    KC_1: '1',
    KC_2: '2',
    KC_3: '3',
    KC_4: '4',
    KC_5: '5',
    KC_6: '6',
    KC_7: '7',
    KC_8: '8',
    KC_9: '9',
    KC_0: '0',

    KC_ENTER:      '⤶',
    KC_ESCAPE:     'Esc',
    KC_BSPACE:     '←bspace',
    KC_TAB:        'Tab',
    KC_SPACE:      'Space',
    KC_MINUS:      '-',
    KC_EQUAL:      '=',
    KC_LBRACKET:   '[{',
    KC_RBRACKET:   ']}',        /* 0x30 */
    KC_BSLASH:     '\\|',          /* \ (and |) */
    // KC_NONUS_HASH: '',      /* Non-US # and ~ (Typically near the Enter key) */
    KC_SCOLON:     ';:',          /* ; (and :) */
    KC_QUOTE:      '" \'',           /* ' and " */
    KC_GRAVE:      '`~',           /* Grave accent and tilde */
    KC_COMMA:      ',',           /* , and < */
    KC_DOT:        '.',             /* . and > */
    KC_SLASH:      '?',           /* / and ? */
    KC_CAPSLOCK:   'CapsLock',

    KC_F1:  'F1',
    KC_F2:  'F2',
    KC_F3:  'F3',
    KC_F4:  'F4',
    KC_F5:  'F5',
    KC_F6:  'F6',
    KC_F7:  'F7',
    KC_F8:  'F8',
    KC_F9:  'F9',
    KC_F10: 'F10',
    KC_F11: 'F11',
    KC_F12: 'F12',

    KC_PSCREEN:    'PrtScn',
    KC_SCROLLLOCK: 'ScrollLc',
    KC_PAUSE:      'Pause',
    KC_INSERT:     'Ins',
    KC_HOME:       'Home',
    KC_PGUP:       'PgUp',
    KC_DELETE:     'Del',
    KC_END:        'End',
    KC_PGDOWN:     'PgDn',
    KC_RIGHT:      '→',
    KC_LEFT:       '←',
    KC_DOWN:       '↓',
    KC_UP:         '↑',
    KC_NUMLOCK:    'NumLc',

    KC_KP_SLASH:    'Num/',
    KC_KP_ASTERISK: 'Num*',
    KC_KP_MINUS:    'Num-',
    KC_KP_PLUS:     'Num+',
    KC_KP_ENTER:    'NumEnter',
    KC_KP_1:        'Num1',
    KC_KP_2:        'Num2',
    KC_KP_3:        'Num3',
    KC_KP_4:        'Num4',
    KC_KP_5:        'Num5',
    KC_KP_6:        'Num6',
    KC_KP_7:        'Num7',
    KC_KP_8:        'Num8',
    KC_KP_9:        'Num9',
    KC_KP_0:        'Num0',
    KC_KP_DOT:      'Num.',

    KC_LCTRL:  'LCtrl',
    KC_LSHIFT: 'LShift',
    KC_LALT:   'LAlt',
    KC_LGUI:   'LGui',
    KC_RCTRL:  'RCtrl',
    KC_RSHIFT: 'RShift',
    KC_RALT:   'RAlt',
    KC_RGUI:   'RGui',

    KC_TILD: '~', // KC_TILDE    tilde ~
    KC_EXLM: '!', // KC_EXCLAIM  exclamation mark !
    KC_AT:   '@', //       at sign @
    KC_HASH: '#', //     hash sign #
    KC_DLR:  '$', //  KC_DOLLAR   dollar sign $
    KC_PERC: '%', // KC_PERCENT  percent sign %
    KC_CIRC: '^', // KC_CIRCUMFLEX   circumflex ^
    KC_AMPR: '&', // KC_AMPERSAND    ampersand &
    KC_ASTR: '*', // KC_ASTERISK asterisk *
    KC_LPRN: '(', // KC_LEFT_PAREN   left parenthesis (
    KC_RPRN: ')', // KC_RIGHT_PAREN  right parenthesis )
    KC_UNDS: '_', // KC_UNDERSCORE   underscore _
    KC_PLUS: '+', //     plus sign +
    KC_LCBR: '{', // KC_LEFT_CURLY_BRACE left curly brace {
    KC_RCBR: '}', // KC_RIGHT_CURLY_BRACE    right curly brace }
    KC_LT:   '<', //
    KC_LABK: '<', //   KC_LEFT_ANGLE_BRACKET   left angle bracket <
    KC_GT:   '>', //
    KC_RABK: '>', //   KC_RIGHT_ANGLE_BRACKET  right angle bracket >
    KC_COLN: ':', // KC_COLON    colon :
    KC_PIPE: '\\', //     pipe `\ `
    KC_QUES: '?', // KC_QUESTION question mark ?
    KC_DQT:  '"', //
    KC_DQUO: '"', //  KC_DOUBLE_QUOTE double quote "

    KC_MS_UP:    { img: 'mouse_move_up.svg'    },
    KC_MS_DOWN:  { img: 'mouse_move_down.svg'  },
    KC_MS_RIGHT: { img: 'mouse_move_right.svg' },
    KC_MS_LEFT:  { img: 'mouse_move_left.svg'  },
    KC_MS_BTN1:  { img: 'mouse_button_left.svg'  },
    KC_MS_BTN2:  { img: 'mouse_button_right.svg' },
};

var htmlElems = {
    macroInput  : document.getElementById('macro'),
    idElem      : document.getElementById('id'),
    layersHolder: document.getElementById('layers'),
};

var ifaceKeys = (new Array(TOTAL_KEY_COUNT)).fill(0);
ifaceKeys.forEach(function(elem, i, arr){
    arr[i] = document.getElementById("key" + i);
});

eachElem('.key',function(e){
    e.addEventListener('click', selectKey);
});
disableForm('#form', true);

function applyStatus() {
    if (st.currentLayer < 0 || st.currentLayer >= st.layers.length) {
        st.currentLayer = 0;
    }

    deleteChildren(htmlElems.layersHolder);
    st.layers.forEach(function(layer, i){
        var div = document.createElement('div');
        setText(div, 'Layer '+i);
        if (i === st.currentLayer) {
            addClass(div, 'selected');
        }
        div.addEventListener('click', function(){
            st.currentLayer = i;
            applyStatus();
        });
        htmlElems.layersHolder.appendChild(div);
    });

    deselectKeys();
    st.layers[st.currentLayer].forEach(function(macro, i){
        setKeyMacro(i, macro);
    });

    if (st.currentKey !== undefined) {
        disableForm('#form', false);
        setText(htmlElems.idElem, st.currentKey);
        htmlElems.macroInput.value = st.layers[st.currentLayer][st.currentKey];

        addClass(document.getElementById('key'+st.currentKey), 'selected');
    } else {
        deleteChildren(htmlElems.idElem);
        htmlElems.macroInput.value = '';
        disableForm('#form', true);
    }
}

function setKeyMacro(keyId, macro) {
    var node = ifaceKeys[keyId];
    var mapped = captionMapping[macro];

    deleteChildren(node);
    if (mapped === undefined) {
        setText(node, macro);
    } else {
        if (typeof(mapped) === 'string') {
            setText(node, captionMapping[macro]);
        } else {
            if (mapped.img !== undefined) {
                var img = document.createElement('img');
                img.src = 'images/' + mapped.img;
                if (mapped.imgWidth !== undefined) {
                    img.width = mapped.imgWidth;
                }
                img.style.maxWidth = '40px';
                img.style.maxHeight = '40px';
                node.appendChild(img);
            }
        }
    }
}

function deselectKeys() {
    eachElem('.key',function(e){
        removeClass(e, 'selected');
    });
    disableForm('#form', true);
}

function selectKey() {
    st.currentKey = this.getAttribute('data-num');
    applyStatus();
}

function disableForm(selector, disable) {
    eachElem(selector + ' input',function(e){
        e.disabled = disable;
    });
}

function macroInputChanged() {
    st.layers[st.currentLayer][st.currentKey] = htmlElems.macroInput.value;
    applyStatus();
}

htmlElems.macroInput.addEventListener('change', macroInputChanged);

applyStatus();



// ######################### Library #########################

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

function deleteChildren(elem) {
    while (elem.firstChild) elem.removeChild(elem.firstChild);
}

function setText(elem, text) {
    deleteChildren(elem);
    elem.appendChild(document.createTextNode(text));
}
