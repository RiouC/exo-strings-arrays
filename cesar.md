
# Table of Contents

1.  [Analyse Fréquentielle](#org09bb4db)
2.  [(Optionnel : récupérer les arguments de la ligne de commande)](#org15a7528)
3.  [Variables](#org02bb875)
    1.  [text](#orga3f3fec)
    2.  [key](#org62d5c03)
    3.  [alphabet](#org4fc5f88)
    4.  [etaoinshrdlu](#org9063270)
    5.  [freqLetterCode](#org67ac755)
    6.  [keys](#org477b820)
4.  [Fonctions](#org5798ea2)
    1.  [encryptChar](#org7c89399)
    2.  [cypher](#org846ff38)
    3.  [decypher](#org9a9cb49)
    4.  [listDecypher](#org7b4c214)

[asciinema](https://asciinema.org/a/S3dGEePp6UpjI2RsAJm03Df3f)  


<a id="org09bb4db"></a>

# Analyse Fréquentielle

[Fréquence d'apparition des lettres en français](https://fr.wikipedia.org/wiki/Fr%C3%A9quence_d%27apparition_des_lettres_en_fran%C3%A7ais)   
[Letter Frequency](https://en.wikipedia.org/wiki/Letter_frequency)   
[Etaoin shrdlu](https://en.wikipedia.org/wiki/Etaoin_shrdlu)   


<a id="org15a7528"></a>

# (Optionnel : récupérer les arguments de la ligne de commande)

    process.argv

Retourne le tableau des arguments passés en ligne de commande  

    process.argv[0]

Pour récupérer le premier argument.  


<a id="org02bb875"></a>

# Variables


<a id="orga3f3fec"></a>

## text

Un tableau dont chaque élément est un caractère (majuscule) ou bien un espace.  


<a id="org62d5c03"></a>

## key

La clé (sous la forme d'un nombre).  
Cette variable n'est utile que pour chiffrer uniquement !  


<a id="org4fc5f88"></a>

## alphabet

Un tableau de 26 éléments. Chaque "case" représente le nombre de fois qu'une lettre est présente dans le texte.  
Example :  
alphabet[0] est la première case du tableau, la valeur représente le nombre de 'A' dans le texte chiffré.  
alphabet[1] est la deuxième case du tableau, la valeur représente le nombre de 'B' dans le texte chiffré.  
…  
alphabet[25] est la vingt-sixième case du tableau, la valeur représente le nombre de 'Z' dans le texte chiffré.  


<a id="org9063270"></a>

## etaoinshrdlu

Un tableau avec les lettres les plus fréquentes en anglais. (De longueur 12)  


<a id="org67ac755"></a>

## freqLetterCode

C'est l'index du tableau alphabet pour la lettre la plus présente dans le texte chiffré.  


<a id="org477b820"></a>

## keys

Un tableau de même longueur que etaoinshrdlu qui contient les décalages (clés) les plus probables.  
Cette variable n'est utile que pour dechiffrer uniquement !  


<a id="org5798ea2"></a>

# Fonctions


<a id="org7c89399"></a>

## encryptChar

Paramètres :  

-   c : charactère
-   n : nombre entier

Renvoie : Le code décimal ASCII de c + n, en restant entre 'A' et 'Z'  

Fonction qui chiffre un caractère c en le décalant de n.  


<a id="org846ff38"></a>

## cypher

Paramètres :  

-   tab : tableau de charactères
-   key : nombre entier

Renvoie : une chaine de charactère  

Fonction qui chiffre un message à partir du tableau tab avec la clé key.  


<a id="org9a9cb49"></a>

## decypher

L'inverse de la fonction cypher.  


<a id="org7b4c214"></a>

## listDecypher

Paramètre :  

-   tab : tableau de charactères

Renvoie : rien, affiche 12 textes déchiffrés avec les 12 clés générées.  

Déchiffre le texte chiffré avec les clés les plus probables (hypothèse : texte en anglais).  

