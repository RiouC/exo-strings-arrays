
# Table of Contents

1.  [Analyse Fréquentielle](#org6ac703b)
2.  [(Optionnel : récupérer les arguments de la ligne de commande)](#orgbea9331)
3.  [Variables](#org777fed4)
    1.  [text](#org812fc79)
    2.  [key](#org9fcbf2b)
    3.  [alphabet](#orga8ea9ec)
    4.  [etaoinshrdlu](#org6a47725)
    5.  [freqLetterCode](#orgff273ff)
    6.  [keys](#org1635e03)
4.  [Fonctions](#orgb1b514a)
    1.  [encryptChar](#org1b2a1d2)
    2.  [cypher](#orgb6d46d7)
    3.  [decypher](#orge779e00)
    4.  [listDecypher](#org70a13ba)



<a id="org6ac703b"></a>

# Analyse Fréquentielle

[Fréquence d'apparition des lettres en français](https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres_en_fran%C3%A7ais)   
[Letter Frequency](https://en.wikipedia.org/wiki/Letter_frequency)   
[Etaoin shrdlu](https://en.wikipedia.org/wiki/Etaoin_shrdlu)   


<a id="orgbea9331"></a>

# (Optionnel : récupérer les arguments de la ligne de commande)

    process.argv

Retourne le tableau des arguments passés en ligne de commande  

    process.argv[0]

Pour récupérer le premier argument.  


<a id="org777fed4"></a>

# Variables


<a id="org812fc79"></a>

## text

Un tableau dont chaque élément est un caractère (majuscule) ou bien un espace.  


<a id="org9fcbf2b"></a>

## key

La clé (sous la forme d'un nombre).  
Cette variable n'est utile que pour chiffrer uniquement !  


<a id="orga8ea9ec"></a>

## alphabet

Un tableau de 26 éléments. Chaque "case" représente le nombre de fois qu'une lettre est présente dans le texte.  
Example :  
alphabet[0] est la première case du tableau, la valeur représente le nombre de 'A' dans le texte chiffré.  
alphabet[1] est la deuxième case du tableau, la valeur représente le nombre de 'B' dans le texte chiffré.  
…  
alphabet[25] est la vingt-sixième case du tableau, la valeur représente le nombre de 'Z' dans le texte chiffré.  


<a id="org6a47725"></a>

## etaoinshrdlu

Un tableau avec les lettres les plus fréquentes en anglais. (De longueur 12)  


<a id="orgff273ff"></a>

## freqLetterCode

C'est l'index du tableau alphabet pour la lettre la plus présente dans le texte chiffré.  


<a id="org1635e03"></a>

## keys

Un tableau de même longueur que etaoinshrdlu qui contient les décalages (clés) les plus probables.  


<a id="orgb1b514a"></a>

# Fonctions


<a id="org1b2a1d2"></a>

## encryptChar


<a id="orgb6d46d7"></a>

## cypher


<a id="orge779e00"></a>

## decypher


<a id="org70a13ba"></a>

## listDecypher

