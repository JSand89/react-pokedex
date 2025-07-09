# 📦 Proyecto React Pokédex con Tailwind y React Router

Este proyecto es una Pokédex básica construida con **React + Vite**, usando **Tailwind CSS** para estilos y **React Router** para navegación entre vistas.

---

## 🚀 Instalación del Proyecto

```bash
npm create vite@latest pokedex
cd pokedex
npm install
```

Elige `React` como framework y `JavaScript` como lenguaje.

---

## 🎨 Tailwind + React + Vite

Seguir la documentación oficial de instalación:  
👉 [https://tailwindcss.com/docs/installation/using-vite](https://tailwindcss.com/docs/installation/using-vite)

### Archivos clave:

#### `main.jsx`

Asegúrate de importar Tailwind en el punto de entrada:

```jsx
import './index.css'
```

#### `index.css`

```css
import @import "tailwindcss";
```

---

## 💡 ¿Cómo funciona Tailwind?

Tailwind te permite usar clases utilitarias directamente en tu JSX. Por ejemplo:

```jsx
<div className="bg-blue-500 text-white p-4 rounded shadow">
  Hola mundo con Tailwind
</div>
```

- `bg-blue-500`: fondo azul
- `text-white`: texto blanco
- `p-4`: padding
- `rounded`: bordes redondeados
- `shadow`: sombra

Puedes construir interfaces responsivas fácilmente:

```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {/* tarjetas aquí */}
</div>
```

---

## 🧭 Navegación con React Router

### 1. Instalación

```bash
npm install react-router-dom
```

### 2. Envolvemos `App` con `BrowserRouter` en `main.jsx`

```jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>
```

### 3. Definimos las rutas en `App.jsx`

```jsx
import { Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonPage from './components/PokemonPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokemonList />} />
      <Route path="/pokemon/:name" element={<PokemonPage />} />
    </Routes>
  );
}
```

### 4. Navegamos desde una tarjeta

```jsx
import { Link } from 'react-router-dom';

<Link to={`/pokemon/${pokemon.name}`}>
  <div className="...">...</div>
</Link>
```

### 5. Vista de detalle con botón "Volver"

```jsx
import { useParams, useNavigate } from 'react-router-dom';

const navigate = useNavigate();
const { name } = useParams();

<button onClick={() => navigate(-1)}>
  ← Volver
</button>
```

---

## ✅ ¿Qué se logra?

- Una Pokédex responsive con Tailwind
- Navegación entre la lista y el detalle de Pokémon
- Uso práctico de `useParams`, `useNavigate`, y `Link`

---
