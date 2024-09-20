# PokeAPI Connector

Este es un proyecto backend desarrollado en **Node.js** utilizando el framework **NestJS**. La API conecta con la [PokéAPI](https://pokeapi.co/) y permite obtener información sobre Pokémon mediante tres endpoints diferentes.

## Descripción del Proyecto

Este proyecto consume datos de la PokéAPI y los expone a través de una API RESTful que ofrece tres funcionalidades:

1. **Listar los primeros 100 Pokémon**: Devuelve los primeros 100 Pokémon con su nombre y URL.
2. **Obtener un Pokémon por ID**: Devuelve el nombre y los tipos de un Pokémon dado su ID.
3. **Obtener un Pokémon por ID con traducciones**: Devuelve el nombre, los tipos y sus traducciones al español y japonés de un Pokémon dado su ID.

### Endpoints Disponibles

1. **Listar los primeros 100 Pokémon**  
   - URL: [GET /api/pokemon](https://pokeapi-klsierraj-kevin-sierras-projects.vercel.app/api/pokemon)  
   - Ejemplo de respuesta:
     ```json
     {
       "results": [
         {
           "name": "bulbasaur",
           "url": "https://pokeapi.co/api/v2/pokemon/1/"
         },
         {
           "name": "ivysaur",
           "url": "https://pokeapi.co/api/v2/pokemon/2/"
         },
         ...
       ]
     }
     ```

2. **Obtener un Pokémon por ID**  
   - URL: [GET /api/pokemon/:id](https://pokeapi-klsierraj-kevin-sierras-projects.vercel.app/api/pokemon/1)  
   - Ejemplo de respuesta:
     ```json
     {
       "name": "bulbasaur",
       "types": [
         {
           "slot": 1,
           "type": {
             "name": "grass"
           }
         },
         {
           "slot": 2,
           "type": {
             "name": "poison"
           }
         }
       ]
     }
     ```

3. **Obtener un Pokémon con traducciones de tipos**  
   - URL: [GET /api/pokemonAndTypes/:id](https://pokeapi-klsierraj-kevin-sierras-projects.vercel.app/api/pokemonAndTypes/1)  
   - Ejemplo de respuesta:
     ```json
     {
       "name": "bulbasaur",
       "types": [
         {
           "slot": 1,
           "type": "grass",
           "translations": [
             {
               "language": "es",
               "name": "Planta"
             },
             {
               "language": "ja",
               "name": "くさ"
             }
           ]
         },
         {
           "slot": 2,
           "type": "poison",
           "translations": [
             {
               "language": "es",
               "name": "Veneno"
             },
             {
               "language": "ja",
               "name": "どく"
             }
           ]
         }
       ]
     }
     ```

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/klsierraj/pokeapi.git
   ```bash
   cd pokeapi-connector
   ```bash
   npm install
   ```bash
   npm run start

## Tests

Se han implementado tests utilizando **Jest** para garantizar que las funcionalidades clave del proyecto funcionen correctamente.

### Ejecutar Pruebas

Para ejecutar las pruebas, usa el siguiente comando:
```bash
npm run test
