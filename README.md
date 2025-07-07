# 🧩 Proyecto React: Pokédex con PokéAPI

En este proyecto construiremos una Pokédex usando React, Bootstrap y la PokéAPI. Aprenderemos a estructurar componentes, usar `useEffect` para llamadas a API, y trabajar con servicios separados.

---

## 🚀 Tecnologías utilizadas

- React + Vite
- Bootstrap
- PokéAPI
- Fetch API
- Hooks: `useState`, `useEffect`

---

## 🧱 Estructura del proyecto

```
src/
├── components/
│   ├── PokemonCard.jsx       # Tarjeta individual de Pokémon
│   └── PokemonList.jsx       # Lista de todos los Pokémon
├── services/
│   └── pokeapi.js            # Funciones para consumir PokéAPI
├── App.jsx
└── main.jsx
```

---

## 📦 Instalación del proyecto

```bash
npm create vite@latest pokedex 
cd pokedex
npm install
npm install bootstrap
```

---

## ⚙️ Importaciones necesarias en `main.jsx`

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 🔌 Servicio para consumir la API

`src/services/pokeapi.js`

```js
const API_URL = 'https://pokeapi.co/api/v2';

export async function getPokemons(limit = 20, offset = 0) {
  const response = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
  const data = await response.json();
  return data.results;
}

export async function getPokemonByUrl(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
```

---


## 🎯 Conceptos clave aprendidos

- Uso de `useEffect` para llamadas iniciales a API
- `Promise.all` para ejecutar múltiples peticiones en paralelo
- Separación de lógica de negocio en un archivo de servicios
- Renderizado de listas con `.map()` y componentes individuales

---

## 🌟 Extensiones sugeridas

- Agregar paginación
- Agregar barra de búsqueda por nombre
- Mostrar detalles en un modal
- Filtrar por tipo (agua, fuego, etc.)
