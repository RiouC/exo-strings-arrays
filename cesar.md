
# Table of Contents

1.  [Analyse Fréquentielle](#org8dbfc62)
2.  [(Optionnel : récupérer les arguments de la ligne de commande)](#org36d6014)
3.  [Variables](#orgbee1510)
    1.  [text](#orgc885270)
    2.  [key](#org12bd49c)
    3.  [alphabet](#org7ee79b4)
    4.  [etaoinshrdlu](#org0fb105b)
    5.  [freqLetterCode](#org10c29a8)
    6.  [keys](#orgaffaae1)
4.  [Fonctions](#orgc1928f7)
    1.  [encryptChar](#org3b26e4a)
    2.  [cypher](#org261026c)
    3.  [decypher](#org091409a)
    4.  [listDecypher](#orgdd5cd7f)



<a id="org8dbfc62"></a>

# Analyse Fréquentielle

[Fréquence d'apparition des lettres en français](https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres_en_fran%C3%A7ais)   
[Letter Frequency](https://en.wikipedia.org/wiki/Letter_frequency)   
[Etaoin shrdlu](https://en.wikipedia.org/wiki/Etaoin_shrdlu)   


<a id="org36d6014"></a>

# (Optionnel : récupérer les arguments de la ligne de commande)

    process.argv

Retourne le tableau des arguments passés en ligne de commande  

    process.argv[0]

Pour récupérer le premier argument.  


<a id="orgbee1510"></a>

# Variables


<a id="orgc885270"></a>

## text

Un tableau dont chaque élément est un caractère (majuscule) ou bien un espace.  


<a id="org12bd49c"></a>

## key

La clé (sous la forme d'un nombre).  
Cette variable n'est utile que pour chiffrer uniquement !  


<a id="org7ee79b4"></a>

## alphabet

Un tableau de 26 éléments. Chaque "case" représente le nombre de fois qu'une lettre est présente dans le texte.  
Example :  
alphabet[0] est la première case du tableau, la valeur représente le nombre de 'A' dans le texte chiffré.  
alphabet[1] est la deuxième case du tableau, la valeur représente le nombre de 'B' dans le texte chiffré.  
…  
alphabet[25] est la vingt-sixième case du tableau, la valeur représente le nombre de 'Z' dans le texte chiffré.  


<a id="org0fb105b"></a>

## etaoinshrdlu

Un tableau avec les lettres les plus fréquentes en anglais. (De longueur 12)  


<a id="org10c29a8"></a>

## freqLetterCode

C'est l'index du tableau alphabet pour la lettre la plus présente dans le texte chiffré.  


<a id="orgaffaae1"></a>

## keys

Un tableau de même longueur que etaoinshrdlu qui contient les décalages (clés) les plus probables.  
Cette variable n'est utile que pour dechiffrer uniquement !  


<a id="orgc1928f7"></a>

# Fonctions


<a id="org3b26e4a"></a>

## encryptChar

Paramètres :  

-   c : charactère
-   n : nombre entier

Renvoie : Le code décimal ASCII de c + n, en restant entre 'A' et 'Z'  

Fonction qui chiffre un caractère c en le décalant de n.  


<a id="org261026c"></a>

## cypher

Paramètres :  

-   tab : tableau de charactères
-   key : nombre entier

Renvoie : une chaine de charactère  

Fonction qui chiffre un message à partir du tableau tab avec la clé key.  


<a id="org091409a"></a>

## decypher

L'inverse de la fonction cypher.  


<a id="orgdd5cd7f"></a>

## listDecypher

Paramètre :  

-   tab : tableau de charactères

Renvoie : rien, affiche 12 textes déchiffrés avec les 12 clés générées.  

Déchiffre le texte chiffré avec les clés les plus probables (hypothèse : texte en anglais).  

