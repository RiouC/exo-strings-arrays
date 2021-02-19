
# Table of Contents

1.  [Analyse Fréquentielle](#org8d377df)
2.  [(Optionnel : récupérer les arguments de la ligne de commande)](#org4ff72af)
3.  [Variables](#orgdd953ec)
    1.  [text](#org9646c44)
    2.  [key](#orgfd7456f)
    3.  [alphabet](#orgb7c7b36)
    4.  [etaoinshrdlu](#orgbfe6d9d)
    5.  [freqLetterCode](#orgda49c9b)
    6.  [keys](#orgf21bdfe)
4.  [Fonctions](#org2ba7d3a)
    1.  [encryptChar](#orgdceb403)
    2.  [cypher](#org370c58e)
    3.  [decypher](#org924af41)
    4.  [listDecypher](#org1e10870)

[asciinema](https://asciinema.org/a/0njIqEMp5DKaKJkdlFfiRF1iI)  


<a id="org8d377df"></a>

# Analyse Fréquentielle

[Fréquence d'apparition des lettres en français](https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres_en_fran%C3%A7ais)   
[Letter Frequency](https://en.wikipedia.org/wiki/Letter_frequency)   
[Etaoin shrdlu](https://en.wikipedia.org/wiki/Etaoin_shrdlu)   

[ASCII](https://fr.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange)   


<a id="org4ff72af"></a>

# (Optionnel : récupérer les arguments de la ligne de commande)

    process.argv

Retourne le tableau des arguments passés en ligne de commande  

    process.argv[0]

Pour récupérer le premier argument.  


<a id="orgdd953ec"></a>

# Variables


<a id="org9646c44"></a>

## text

Un tableau dont chaque élément est un caractère (majuscule) ou bien un espace.  


<a id="orgfd7456f"></a>

## key

La clé (sous la forme d'un nombre).  
Cette variable n'est utile que pour chiffrer uniquement !  


<a id="orgb7c7b36"></a>

## alphabet

Un tableau de 26 éléments. Chaque "case" représente le nombre de fois qu'une lettre est présente dans le texte.  
Example :  
alphabet[0] est la première case du tableau, la valeur représente le nombre de 'A' dans le texte chiffré.  
alphabet[1] est la deuxième case du tableau, la valeur représente le nombre de 'B' dans le texte chiffré.  
…  
alphabet[25] est la vingt-sixième case du tableau, la valeur représente le nombre de 'Z' dans le texte chiffré.  


<a id="orgbfe6d9d"></a>

## etaoinshrdlu

Un tableau avec les lettres les plus fréquentes en anglais. (De longueur 12)  


<a id="orgda49c9b"></a>

## freqLetterCode

C'est l'index du tableau alphabet pour la lettre la plus présente dans le texte chiffré.  


<a id="orgf21bdfe"></a>

## keys

Un tableau de même longueur que etaoinshrdlu qui contient les décalages (clés) les plus probables.  
Cette variable n'est utile que pour dechiffrer uniquement !  


<a id="org2ba7d3a"></a>

# Fonctions


<a id="orgdceb403"></a>

## encryptChar

Paramètres :  

-   c : charactère
-   n : nombre entier

Renvoie : Le code décimal ASCII de c + n, en restant entre 'A' et 'Z'  

Fonction qui chiffre un caractère c en le décalant de n.  


<a id="org370c58e"></a>

## cypher

Paramètres :  

-   tab : tableau de charactères
-   key : nombre entier

Renvoie : une chaine de charactère  

Fonction qui chiffre un message à partir du tableau tab avec la clé key.  


<a id="org924af41"></a>

## decypher

L'inverse de la fonction cypher.  


<a id="org1e10870"></a>

## listDecypher

Paramètre :  

-   tab : tableau de charactères

Renvoie : rien, affiche 12 textes déchiffrés avec les 12 clés générées.  

Déchiffre le texte chiffré avec les clés les plus probables (hypothèse : texte en anglais).  

