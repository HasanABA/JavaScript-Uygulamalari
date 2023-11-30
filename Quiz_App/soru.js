function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}



Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap
}



let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilemez?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilemez?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "d")
];