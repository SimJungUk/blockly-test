'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray(
[
    {
        "type": "console_print",
        "message0": "console print %1",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME",
            "check": "String"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Block for printing the user message",
        "helpUrl": "https://ahnbk.com"
      },
]);