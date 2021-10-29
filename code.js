function calcular() {
    var p = window.document.querySelector('input#peso')
    var a = window.document.querySelector('input#altura')
    var res = window.document.querySelector('div#res')
    var pe = Number(p.value)
    var al = Number(a.value)
    var re = pe / (al**2)
    res.innerHTML = `Seu IMC: ${re.toFixed(2)}`
}