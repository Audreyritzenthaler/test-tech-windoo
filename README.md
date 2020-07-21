# test-tech-windoo

Merci de cloner le projet (git clone), faire un npm i
Pensez à la variable d'environnement utilisé (vous avez un .env.sample pour vous indiquer la marche à suivre)
Pour démarrer le back ; nodemon server.js (ou node server.js)
Pour démarrer le front ; npm start

# Enoncé de l'exercice ;

## Backend

Créer un projet avec une seule route /api/ideas qui renvoie un tableau d'idées aléatoires (entre 10 et 50). Pas de base de données. Une idée est un object avec ces caractéristiques:

    id: int
    title: string
    createdAt: datetime
    author: string
    score: int (positive)

### Les contraintes sont les suivantes:

    renvoyer un tableau en JSON
    utiliser Faker (https://github.com/marak/Faker.js/) pour générer les phrases
    les dates doivent être aléatoire dans les 6 derniers mois
    les ids se suivent et sont uniques
    le score est compris entre 0 et 50

## Frontend

Créer un projet React avec https://github.com/facebook/create-react-app et récupérer les idées depuis le point d'api Symfony, les mettre en forme et ajouter des filtres et tris:

    tri par date (ASC et DESC) avec la fonction "sort" en javascript
    tri par score (ASC et DESC) avec la fonction "sort" en javascript
    filtre par titre avec la fonction "filter" en javascript: étant donné un champ de texte, je veux récupérer les idées dont le titre contient le texte inscrit. Utiliser https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/includes

Les deux projets sont à rendre dans le même répertoire Github sous 10 jours. Le temps indicatif à passer sur l'exercice est d'environ 30min à 1h par partie, selon ton niveau. Si jamais tu dépasses trop le temps imparti, tu peux ne rendre qu'une seule partie du projet
