"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredData = exports.requiredInputs = void 0;
require("reflect-metadata");
var enum_metadata_1 = require("./enums/enum.metadata");
function requiredInputs() {
    var inputsName = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputsName[_i] = arguments[_i];
    }
    return function (target, key, descriptor) {
        Reflect.defineMetadata(enum_metadata_1.metadata.validator, inputsName, target, key);
    };
}
exports.requiredInputs = requiredInputs;
function requiredData(inputs) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            if (!req.body[input]) {
                res.status(422).send("missing property " + input);
                return;
            }
        }
        next();
    };
}
exports.requiredData = requiredData;
