let displayValue = '';

/** Difference entre var et let:
 * 
 * var x ====> mbola afaka alaina ny valeur ny x
 *             aty ivelan'ny { .... }
 * 
 * let x ====> contraire @ var
 */

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(displayValue);

        /** eval = ahafahana mamoka resultat (manao evaluation)
         *         sy mi-calcul nombre sous forme caractere
         */

        document.getElementById('display').value = result;
        displayValue = String(result);
    } catch (error) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}

function deleteLastCharacter() {
    // slice(start, end)

    /** Exemple: var str = "ABCDEF" 
     * 
     * str.slice(2) : extrait une sous-chaîne de str à partir de l'indice 2 jusqu'à la fin de la chaîne.
     *                ==> reponse : CDEF
     *  
     * str.slice(0,2) : extrait une sous-chaîne de str à partir de l'indice 0 (inclus) jusqu'à l'indice 2 (exclus) de la chaîne.
     *                  ==> reponse : AB
     * 
     * str.slice(0,-2) : extrait une sous-chaîne de str à partir de l'indice 0 (inclus) jusqu'à l'avant-dernier caractère de la chaîne (exclusivement).
     *                   ==> reponse : ABCD
     */

    displayValue = displayValue.slice(0, -1); // effacer le dernier caractere
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue || '0'; // affiche '0' s'il n'y a pas de valeur
}