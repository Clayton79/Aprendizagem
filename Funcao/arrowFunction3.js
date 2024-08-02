let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis (global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparacomThis (global)
comparacomThis (obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)