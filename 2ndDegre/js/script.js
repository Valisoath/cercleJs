function calculate() {
    // Récupérer les valeurs de a, b et c depuis les inputs
    var aInput = document.getElementById('a').value.trim();
    var bInput = document.getElementById('b').value.trim();
    var cInput = document.getElementById('c').value.trim();

    // Vérifier si les inputs sont vides ou non numériques
    if (aInput === '' || isNaN(aInput)) {
        alert("Veuillez entrer une valeur numérique pour 'a'.");
        return;
    }

    if (bInput === '' || isNaN(bInput)) {
        alert("Veuillez entrer une valeur numérique pour 'b'");
        return;
    }

    if (cInput === '' || isNaN(cInput)) {
        alert("Veuillez entrer une valeur numérique pour 'c'");
        return;
    }

    // Convertir les valeurs en nombres
    var a = parseFloat(aInput);
    var b = parseFloat(bInput);
    var c = parseFloat(cInput);

    // Calculer le discriminant Δ = b^2 - 4ac
    var discriminant = b * b - 4 * a * c;

    // Déterminer les solutions en fonction du discriminant
    if (discriminant > 0) {
        var x1 = (- b + Math.sqrt(discriminant)) / (2 * a);
        var x2 = (- b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('result').innerHTML = `Les solutions sont x₁ = ${x1.toFixed(2)} et x₂ = ${x2.toFixed(2)}`;
    } else if (discriminant === 0) {
        var x = -b / (2 * a);
        document.getElementById('result').innerHTML = `La solution double est x₁ = x₂ = ${x.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = "L'équation n'a pas de solution réelle.";
    }
}

