# Bienvenue !

Bien qu'en React, donc pas optimisé pour le SEO, j'avais 2 à 3 appels par mois sur un segment où les clients achètent en général leur cuisine avec la pose.

Mon activité est surtout de la sous-traitance.  
Mais quelques appels tout de même...

#### Essayons d'en profiter !

J'ai donc décidé d'améliorer le référencement de mon site de présentation en passant sur **NextJS 14**.  
Ça ne coûte rien 😅

#### Au menu :

Un site relativement simple aux données statiques.

Pour la maintenabilité et l'évolution des propositions comme les photos, les données sont sous forme de tableaux (dossier *datas*), sur lesquels nous mappons.

Un formulaire de contact relié à MailJet a été mis en place.  
Validation par retour de mail au client que sa demande a bien été prise en compte.  
La logique du formulaire est dans des routes API.

Projet simple et rapide à mettre en place puisque statique.

### Les Technos utilisées :

- **NextJS 14** : pour sa structure et le déploiement automatique et facilité par Vercel (une DX d'enfer 🚀).
- **TailwindCSS** et **Sass** : pour un style rapide à mettre en place.
- **ShadCNUI** : ça facilite la vie quand on a besoin de composants UX/UI.
- **Framer Motion** : pour de légères animations.
- **Axios** et **ReactHookForm** : pour gérer les infos récupérées du formulaire de contact.
- **Sonner** : pour les toast que je trouve super sympa !
