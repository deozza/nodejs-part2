# Nodejs-part2

Une application de démo pour le deuxième cours de nodejs.

## Sommaire

- [Nodejs-part2](#nodejs-part2)
  * [Sommaire](#sommaire)
  * [Prérequis](#pr-requis)
    + [Sur Unix](#sur-unix)
      - [MacOS](#macos)
      - [Ubuntu/Debian](#ubuntu-debian)
      - [Arch](#arch)
    + [Sur Windows](#sur-windows)
    + [Avec Docker](#avec-docker)
  * [Routes](#routes)

## Prérequis

Il faudra avoir d'installé sur sa machine : 
 * nodejs et npm pour interpréter l'application
 * un terminal bash pour lancer l'application
 * un client HTTP (comme Postman) pour utiliser l'application

### Sur Unix 

#### MacOS

*Installer nodejs*


 * [installer nodejs](https://nodejs.org/dist/v12.18.4/node-v12.18.4.pkg)

*Terminal*

 * utiliser le terminal intégré à MacOS
  * utiliser le finder

*Client HTTP*

 * [installer postman](https://dl.pstmn.io/download/latest/osx)

#### Ubuntu/Debian

*Installer nodejs*

```bash
sudo apt-get install nodejs npm
```

*Terminal*

 * utiliser le terminal gnome intégré

`ctrl+alt+t`

*Client HTTP*

```bash
sudo snap install postman
```

#### Arch

*Installer nodejs*

```bash
sudo pacman nodejs -S
```

*Terminal*

 * utiliser le terminal intégré

`ctrl+alt+t`

*Client HTTP*

```bash
sudo pacman postman -S
```

### Sur Windows

*Installer nodejs*

 * [installer postman](https://nodejs.org/dist/v12.18.4/node-v12.18.4-x86.msi)

*Terminal*

 * [installer CMDER](https://github.com/cmderdev/cmder/releases/download/v1.3.16/cmder_mini.zip)

*Client HTTP*

 * [installer Postman](https://dl.pstmn.io/download/latest/win64)

### Avec Docker

*Lancer l'application dans un container*

```bash
# allumer le container
docker-compose up -d --build

# allumer l'application
docker-compose exec nodejs_chatbot_cours node index.js 
```

## Routes

L'application est disponible à l'adresse `127.0.0.1:3000` .

`GET` /get?{url}

*Description*

Renvoi un message d'accueil personnalisé en fonction du nom entré en paramètre.

*Paramètres URL*

| Paramètre | Obligatoire | Type     |                  Exemple                         |
|-----------|-------------|----------|------------------------------------------------- |
| url       | `oui`       | `string` | https://jsonplaceholder.typicode.com/photos/1    |

*Exemple de requête*

`127.0.0.1:3000/get?name=https://jsonplaceholder.typicode.com/photos/1`

*Exemple de retour*

```json
{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}
```