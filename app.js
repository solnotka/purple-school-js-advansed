"use strict";

const arrFromObj = [
{ id: 1, name: 'Вася' },
{ id: 2, name: 'Петя' },
{ id: 1, name: 'Вася' },
]

const idSet = new Set(arrFromObj.map((item) => item.id));

const res = [...idSet].map((setId) => arrFromObj.find((item) => item.id === setId))
