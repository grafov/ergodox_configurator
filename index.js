var TOTAL_KEY_COUNT = 76;

// Default status
var st = {
    currentLayer:0,
    currentKey:undefined,
    // layers:[
    //     ["KC_EQUAL", "KC_1", "KC_2", "KC_3", "KC_4", "KC_5", "KC_LEFT", "KC_DELETE", "KC_Q", "KC_W", "KC_E", "KC_R", "KC_T", "TG(1)", "KC_CAPSLOCK", "KC_A", "KC_S", "KC_D", "KC_F", "KC_G", "KC_LSHIFT", "CTL_T(KC_Z)", "KC_X", "KC_C", "KC_V", "KC_B", "KC_TRANSPARENT", "LT(1,KC_GRAVE)", "KC_QUOTE", "LCTL(KC_LALT)", "KC_LEFT", "KC_RIGHT", "ALT_T(KC_APPLICATION)", "KC_LGUI", "KC_HOME", "KC_SPACE", "KC_BSPACE", "KC_END", "KC_RIGHT", "KC_6", "KC_7", "KC_8", "KC_9", "KC_0", "KC_MINUS", "TG(1)", "KC_Y", "KC_U", "KC_I", "KC_O", "KC_P", "KC_BSLASH", "KC_H", "KC_J", "KC_K", "KC_L", "LT(2,KC_SCOLON)", "KC_F12", "MEH_T(KC_NO)", "KC_N", "KC_M", "KC_COMMA", "KC_DOT", "CTL_T(KC_SLASH)", "KC_RSHIFT", "KC_UP", "KC_DOWN", "KC_LBRACKET", "KC_RBRACKET", "MO(1)", "KC_LALT", "CTL_T(KC_ESCAPE)", "KC_PGUP", "KC_PGDOWN", "KC_TAB", "KC_ENTER"],
    //     ["KC_ESCAPE", "KC_F1", "KC_F2", "KC_F3", "KC_F4", "KC_F5", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_EXLM", "KC_AT", "KC_LCBR", "KC_RCBR", "KC_PIPE", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_HASH", "KC_DLR", "KC_LPRN", "KC_RPRN", "KC_GRAVE", "KC_TRANSPARENT", "KC_PERC", "KC_CIRC", "KC_LBRACKET", "KC_RBRACKET", "KC_TILD", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "RGB_MOD", "KC_TRANSPARENT", "KC_TRANSPARENT", "RGB_VAD", "RGB_VAI", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_F6", "KC_F7", "KC_F8", "KC_F9", "KC_F10", "KC_F11", "KC_TRANSPARENT", "KC_UP", "KC_7", "KC_8", "KC_9", "KC_ASTR", "KC_F12", "KC_DOWN", "KC_4", "KC_5", "KC_6", "KC_PLUS", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_AMPR", "KC_1", "KC_2", "KC_3", "KC_BSLASH", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_DOT", "KC_0", "KC_EQUAL", "KC_TRANSPARENT", "RGB_TOG", "RGB_SLD", "KC_TRANSPARENT", "KC_TRANSPARENT", "RGB_HUD", "RGB_HUI"],
    //     ["KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MS_UP", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MS_LEFT", "KC_MS_DOWN", "KC_MS_RIGHT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MS_BTN1", "KC_MS_BTN2", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MEDIA_PLAY_PAUSE", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MEDIA_PREV_TRACK", "KC_MEDIA_NEXT_TRACK", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_AUDIO_VOL_UP", "KC_AUDIO_VOL_DOWN", "KC_AUDIO_MUTE", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_WWW_BACK"],
    // ],
layers:[
    ["KC_EQUAL", "KC_1", "KC_2", "KC_3", "KC_4", "KC_5", "KC_LEFT", "KC_DELETE", "KC_Q", "KC_W", "KC_E", "KC_R", "KC_T", "TG(2)", "TG(1)", "KC_A", "KC_S", "KC_D", "KC_F", "KC_G", "KC_LSHIFT", "CTL_T(KC_Z)", "KC_X", "KC_C", "KC_V", "KC_B", "KC_TRANSPARENT", "LT(2,KC_GRAVE)", "KC_QUOTE", "LCTL(KC_LALT)", "KC_LEFT", "KC_RIGHT", "ALT_T(KC_APPLICATION)", "KC_LGUI", "KC_HOME", "KC_SPACE", "KC_BSPACE", "KC_END", "KC_RIGHT", "KC_6", "KC_7", "KC_8", "KC_9", "KC_0", "KC_MINUS", "TG(2)", "KC_Y", "KC_U", "KC_I", "KC_O", "KC_P", "KC_BSLASH", "KC_H", "KC_J", "KC_K", "KC_L", "LT(3,KC_SCOLON)", "KC_F12", "MEH_T(KC_NO)", "KC_N", "KC_M", "KC_COMMA", "KC_DOT", "CTL_T(KC_SLASH)", "KC_RSHIFT", "KC_UP", "KC_DOWN", "KC_LBRACKET", "KC_RBRACKET", "MO(2)", "KC_LALT", "CTL_T(KC_ESCAPE)", "KC_PGUP", "KC_PGDOWN", "KC_TAB", "KC_ENTER"],
    ["KC_EQUAL", "KC_1", "KC_2", "KC_3", "KC_4", "KC_5", "KC_LEFT", "KC_DELETE", "ACTION_TAP_DANCE_DOUBLE(й,ё)", "ц", "у", "к", "е", "KC_TRANSPARENT", "TG(1)", "ф", "ы", "в", "а", "п", "KC_LSHIFT", "CTL_T(я)", "ч", "с", "м", "и", "KC_TRANSPARENT", "LT(2,KC_GRAVE)", "KC_QUOTE", "LCTL(KC_LALT)", "KC_LEFT", "KC_RIGHT", "ALT_T(KC_APPLICATION)", "KC_LGUI", "KC_HOME", "KC_SPACE", "KC_BSPACE", "KC_END", "KC_RIGHT", "KC_6", "KC_7", "KC_8", "KC_9", "KC_0", "KC_MINUS", "KC_TRANSPARENT", "н", "г", "ACTION_TAP_DANCE_DOUBLE(ш,щ)", "з", "ACTION_TAP_DANCE_DOUBLE(х,э)", "KC_BSLASH", "р", "о", "л", "д", "ж", "KC_F12", "MEH_T(KC_NO)", "т", "ACTION_TAP_DANCE_DOUBLE(ь,ъ)", "б", "ю", "TD(TD_RUCOMMA)", "KC_RSHIFT", "KC_UP", "KC_DOWN", "KC_LBRACKET", "KC_RBRACKET", "MO(2)", "KC_LALT", "CTL_T(KC_ESCAPE)", "KC_PGUP", "KC_PGDOWN", "KC_TAB", "KC_ENTER"],
    ["KC_ESCAPE", "KC_F1", "KC_F2", "KC_F3", "KC_F4", "KC_F5", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_EXLM", "KC_AT", "KC_LCBR", "KC_RCBR", "KC_PIPE", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_HASH", "KC_DLR", "KC_LPRN", "KC_RPRN", "KC_GRAVE", "KC_TRANSPARENT", "KC_PERC", "KC_CIRC", "KC_LBRACKET", "KC_RBRACKET", "KC_TILD", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_F6", "KC_F7", "KC_F8", "KC_F9", "KC_F10", "KC_F11", "KC_TRANSPARENT", "KC_UP", "KC_7", "KC_8", "KC_9", "KC_ASTR", "KC_F12", "KC_DOWN", "KC_4", "KC_5", "KC_6", "KC_PLUS", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_AMPR", "KC_1", "KC_2", "KC_3", "KC_BSLASH", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_DOT", "KC_0", "KC_EQUAL", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT"],
    ["KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MS_UP", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MS_LEFT", "KC_MS_DOWN", "KC_MS_RIGHT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MS_BTN1", "KC_MS_BTN2", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MEDIA_PLAY_PAUSE", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_MEDIA_PREV_TRACK", "KC_MEDIA_NEXT_TRACK", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_AUDIO_VOL_UP", "KC_AUDIO_VOL_DOWN", "KC_AUDIO_MUTE", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_TRANSPARENT", "KC_WWW_BACK"],
],
};

var exportMapping = {
    'а': 'KC_F',
    'б': 'KC_COMMA',
    'в': 'KC_D',
    'г': 'KC_U',
    'д': 'KC_L',
    'е': 'KC_T',
    'ё': 'KC_GRAVE',
    'ж': 'KC_SCOLON',
    'з': 'KC_P',
    'и': 'KC_B',
    'й': 'KC_Q',
    'к': 'KC_R',
    'л': 'KC_K',
    'м': 'KC_V',
    'н': 'KC_Y',
    'о': 'KC_J',
    'п': 'KC_G',
    'р': 'KC_H',
    'с': 'KC_C',
    'т': 'KC_N',
    'у': 'KC_E',
    'ф': 'KC_A',
    'х': 'KC_LBRACKET',
    'ц': 'KC_W',
    'ч': 'KC_X',
    'ш': 'KC_I',
    'щ': 'KC_O',
    'ъ': 'KC_RBRACKET',
    'ы': 'KC_S',
    'ь': 'KC_M',
    'э': 'KC_QUOTE',
    'ю': 'KC_DOT',
    'я': 'KC_Z',
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

    KC_APPLICATION: 'App',
    KC_NO: '', // No key (like null)

    KC_WWW_BACK: '⇦',
    KC_AUDIO_VOL_UP: '🔊',
    KC_AUDIO_VOL_DOWN: '🔉',
    KC_AUDIO_MUTE: '🔇',
    KC_MEDIA_PREV_TRACK: 'Prev',
    KC_MEDIA_NEXT_TRACK: 'Next',
    KC_MEDIA_PLAY_PAUSE: 'Play-Pause',

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
    explainElem : document.getElementById('explain'),
    layersHolder: document.getElementById('layers'),
    editWidget  : document.getElementById('edit_widget'),
};

var ifaceKeys = (new Array(TOTAL_KEY_COUNT)).fill(0);
ifaceKeys.forEach(function(elem, i, arr){
    arr[i] = document.getElementById("key" + i);
});

eachElem('.key',function(e){
    e.addEventListener('click', selectKey);
});
disableForm('#form', true);

document.getElementById('btn_dump_js').addEventListener('click', function() {
    dumpConfigJs();
});
document.getElementById('btn_dump_c').addEventListener('click', function() {
    dumpConfigC();
});

function resolveKey(kc) {
    var mapped = captionMapping[kc];
    if (mapped !== undefined && typeof(mapped) === 'string') {
        return mapped;
    } else {
        return kc;
    }
}

function applyStatus() {
    if (st.currentLayer < 0 || st.currentLayer >= st.layers.length) {
        st.currentLayer = 0;
    }

    deleteChildren(htmlElems.layersHolder);
    deleteChildren(htmlElems.explainElem);
    deleteChildren(htmlElems.editWidget);
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
        var keyMacro = st.layers[st.currentLayer][st.currentKey];
        htmlElems.macroInput.value = keyMacro;

        var complex = parseComplexMacro(keyMacro);
        if (complex !== undefined && complex.data !== undefined) {
            if (complex.data.explain !== undefined) {
                setText(htmlElems.explainElem, complex.data.explain(complex.params));
            }
            if (complex.data.edit !== undefined) {
                htmlElems.editWidget.appendChild(complex.data.edit(complex.params));
            }
        }

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
        var complex = parseComplexMacro(macro);
        if (complex === undefined) {
            setText(node, macro);
        } else {
            if (complex.data === undefined || complex.data.caption === undefined) {
                setText(node, macro);
            } else {
                setText(node, complex.data.caption(complex.params));
            }
        }
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

var complexMapping = {
    'TG':{
        name: 'Toggle layer on/off',
        explain: function(params) {
            return 'Toggle the layer ' + params[0] + ' on/off';
        },
    },
    'MO':{
        name: 'Momentary switch to layer',
        explain: function(params) {
            return 'Switches to the layer ' + params[0] + ' while holding';
        },
    },
    'LT':{
        name: 'Momentary switch to layer when held and kc when tapped',
        explain: function(params) {
            return 'Switches to the layer ' + params[0] + ' while holding. Acts like the key ' + resolveKey(params[1]) + ' when tapped';
        },
        caption: function(params) {
            return 'L' + params[0] + '/' + resolveKey(params[1]);
        },
    },

    'CTL_T' : GenerateModifierTap('Ctr'    , 'Left control'),
    'SFT_T' : GenerateModifierTap('LShift' , 'Left shift'),
    'ALT_T' : GenerateModifierTap('Alt'    , 'Left alt'),
    'ALGR_T': GenerateModifierTap('AltGr'  , 'AltGr'),
    'GUI_T' : GenerateModifierTap('LGUI'   , 'LGUI'),
    'ALL_T' : GenerateModifierTap('Hyp'    , 'Hyper'),
    'LCAG_T': GenerateModifierTap('CtAlGui', 'Ctrl+Alt+GUI'),
    'MEH_T' : GenerateModifierTap('CtAlSh' , 'Ctrl+Alt+Shift'),

    'LCTL': GenerateModifierCombo('Ctrl'),

    'UC': {
        name: 'Unicode character',
        explain: function(params) {
            return 'Prints the unicode char "' + ConvertUnicode(params[0]) + '" (' + params[0] + ')';
        },
        caption: function(params) {
            return ConvertUnicode(params[0]);
        },
        edit: editWidgetUnicode,
    },

    'ACTION_TAP_DANCE_DOUBLE': {
        name: 'Tapdance with 2 keys',
        explain: function(params) {
            return 'Prints ' + resolveKey(params[0]) + ' when tapped once and ' + resolveKey(params[1]) + ' when tapped twice fast';
        },
        caption: function(params) {
            return resolveKey(params[0]) + '/' + resolveKey(params[1]);
        },
    },
};

function editWidgetUnicode(params) {
    var div = document.createElement('div');

    var span = document.createElement('span');
    setText(span, 'Edit char: ');

    var input = document.createElement('input');
    input.value = ConvertUnicode(params[0]);

    var charUpdated = function() {
        input.value = input.value.substring(0,1);
        htmlElems.macroInput.value = 'UC(' + ConvertUnicode(input.value) + ')';
        macroInputChanged();
    };
    input.addEventListener('change', charUpdated);
    input.addEventListener('keyup', charUpdated);
    
    div.appendChild(span);
    div.appendChild(input);
    return div;
}

function ConvertUnicode(c) {
    if (c.length === 1) {
        return '0x' + c.charCodeAt(0).toString(16);
    } else if (c.startsWith('0x')) {
        return String.fromCharCode( parseInt(c.substring(2), 16) );
    } else {
        return c;
    }
}

function GenerateModifierCombo(firstMod) {
    return {
        name: 'Modifier plus some other key',
        explain: function(params) {
            return 'Presses ' + firstMod + ' with ' + resolveKey(params[0]);
        },
        caption: function(params) {
            return firstMod + '+' + resolveKey(params[0]);
        },
    };
}

function GenerateModifierTap(capModName, fullModName) {
    return {
        name: fullModName + ' when held and kc when tapped',
        explain: function(params) {
            return fullModName + ' when held and ' + resolveKey(params[0]) + ' when tapped';
        },
        caption: function(params) {
            return capModName + '/' + resolveKey(params[0]);
        },
    };
}

function parseComplexMacro(text) {
    var groups = /^([^\(]+)\(([^\)]+)\)$/.exec(text);
    if (groups !== null && groups.length > 0) {
        var name = groups[1];
        var params = groups[2].split(',');
        return {
            data: complexMapping[name],
            name: name,
            params: params,
        };
    } else {
        return undefined;
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

function dumpConfigJs() {
    var text = "layers:[\n";

    st.layers.forEach(function(layer) {
        text += '    [' + layer.map(function(e){
            return '"' + e + '"';
        }).join(', ') + "],\n";
    });

    text += "],\n";

    document.getElementById('config_text').value = text;
}

function dumpConfigC() {
    var text = "";
    var state = {
        tapdances: [],
    };
    st.layers.forEach(function(layer, n) {
        text += '  [' + n + '] = KEYMAP(' + layer.map(function(e){
            Object.keys(exportMapping).forEach(function(key){
                e = e.replace(key, exportMapping[key]);
            });
            return preprocessBeforeC(e, state);
        }).join(', ') + "),\n\n";
    });

    text += "\n\n\n";

    text += "//Tap Dance Declarations\nenum {\n";
    state.tapdances.forEach(function(td, i){
        text += '    ' + td.alias + ' = ' + i + ",\n";
    });
    text += "};\n\n";

    text += "qk_tap_dance_action_t tap_dance_actions[] = {\n";
    state.tapdances.forEach(function(td, i){
        text += '    [' + td.alias + '] = ' + td.macro + ",\n";
    });
    text += "};\n\n";

    document.getElementById('config_text').value = text;
}

function preprocessBeforeC(macro, state) {
    var complex = parseComplexMacro(macro);
    if (complex !== undefined) {
        if (complex.name === 'ACTION_TAP_DANCE_DOUBLE') {
            var alias = 'TD_AUTOGEN_' + state.tapdances.length;
            state.tapdances.push({
                alias: alias,
                macro: macro,
            });
            return 'TD(' + alias + ')';
        }
    }
    return macro;
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
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
    }
}

function setText(elem, text) {
    deleteChildren(elem);
    elem.appendChild(document.createTextNode(text));
}
