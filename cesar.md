
# Table of Contents

1.  [Analyse Fréquentielle](#orgb455f08)
2.  [(Optionnel : récupérer les arguments de la ligne de commande)](#org71877e3)
3.  [Variables](#org3ea6fee)
    1.  [text](#orgdee814b)
    2.  [key](#orgec79aee)
    3.  [alphabet](#org265f775)
    4.  [etaoinshrdlu](#org729b05f)
    5.  [freqLetterCode](#orgae09a9d)
    6.  [keys](#org1bbeff2)
4.  [Fonctions](#org9347273)
    1.  [encryptChar](#org96db576)
    2.  [cypher](#org2f042b5)
    3.  [decypher](#orgdab7166)
    4.  [listDecypher](#orgc7e4c83)

[asciinema](https://asciinema.org/a/0njIqEMp5DKaKJkdlFfiRF1iI)  


<a id="orgb455f08"></a>

# Analyse Fréquentielle

[Fréquence d'apparition des lettres en français](https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres_en_fran%C3%A7ais)   
[Letter Frequency](https://en.wikipedia.org/wiki/Letter_frequency)   
[Etaoin shrdlu](https://en.wikipedia.org/wiki/Etaoin_shrdlu)   


<a id="org71877e3"></a>

# (Optionnel : récupérer les arguments de la ligne de commande)

    process.argv

Retourne le tableau des arguments passés en ligne de commande  

    process.argv[0]

Pour récupérer le premier argument.  


<a id="org3ea6fee"></a>

# Variables


<a id="orgdee814b"></a>

## text

Un tableau dont chaque élément est un caractère (majuscule) ou bien un espace.  


<a id="orgec79aee"></a>

## key

La clé (sous la forme d'un nombre).  
Cette variable n'est utile que pour chiffrer uniquement !  


<a id="org265f775"></a>

## alphabet

Un tableau de 26 éléments. Chaque "case" représente le nombre de fois qu'une lettre est présente dans le texte.  
Example :  
alphabet[0] est la première case du tableau, la valeur représente le nombre de 'A' dans le texte chiffré.  
alphabet[1] est la deuxième case du tableau, la valeur représente le nombre de 'B' dans le texte chiffré.  
…  
alphabet[25] est la vingt-sixième case du tableau, la valeur représente le nombre de 'Z' dans le texte chiffré.  


<a id="org729b05f"></a>

## etaoinshrdlu

Un tableau avec les lettres les plus fréquentes en anglais. (De longueur 12)  


<a id="orgae09a9d"></a>

## freqLetterCode

C'est l'index du tableau alphabet pour la lettre la plus présente dans le texte chiffré.  


<a id="org1bbeff2"></a>

## keys

Un tableau de même longueur que etaoinshrdlu qui contient les décalages (clés) les plus probables.  
Cette variable n'est utile que pour dechiffrer uniquement !  


<a id="org9347273"></a>

# Fonctions


<a id="org96db576"></a>

## encryptChar

Paramètres :  

-   c : charactère
-   n : nombre entier

Renvoie : Le code décimal ASCII de c + n, en restant entre 'A' et 'Z'  

Fonction qui chiffre un caractère c en le décalant de n.  


<a id="org2f042b5"></a>

## cypher

Paramètres :  

-   tab : tableau de charactères
-   key : nombre entier

Renvoie : une chaine de charactère  

Fonction qui chiffre un message à partir du tableau tab avec la clé key.  


<a id="orgdab7166"></a>

## decypher

L'inverse de la fonction cypher.  


<a id="orgc7e4c83"></a>

## listDecypher

Paramètre :  

-   tab : tableau de charactères

Renvoie : rien, affiche 12 textes déchiffrés avec les 12 clés générées.  

Déchiffre le texte chiffré avec les clés les plus probables (hypothèse : texte en anglais).  

