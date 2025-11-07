# React Fundamentos — Código fuente explicado (Semana 4)

> **Basado en fuentes oficiales y modernas:**
>
> - [React Docs v18+ (react.dev)](https://react.dev/learn)
> - [Vite Docs](https://vitejs.dev/guide/)
> - [MDN Web Docs](https://developer.mozilla.org/)
> - [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🧱 1. Creación del proyecto con Vite

Vite es un _build tool_ moderno que usa ES Modules y Hot Module Replacement (HMR), ideal para React moderno.

```bash
# Crear un nuevo proyecto React con Vite
yarn create vite my-react-app --template react
# o con npm
npm create vite@latest my-react-app -- --template react

cd my-react-app
npm install
npm run dev
```

**Referencia oficial:** [https://vitejs.dev/guide/](https://vitejs.dev/guide/)

---

## ⚙️ 2. Estructura base del proyecto

```bash
src/
├── components/
│   ├── Header.jsx
│   ├── Card.jsx
│   └── Counter.jsx
├── assets/
│   └── images/...
├── App.jsx
└── main.jsx
```

**Buenas prácticas (React.dev):**

- Componentes en **PascalCase**.
- Archivos en **camelCase** o **kebab-case**.
- Mantener el **mínimo estado necesario**.
- JSX limpio, semántico y declarativo.

---

## 🧩 3. main.jsx – Punto de entrada de la SPA

```jsx
// main.jsx
// Importa React, el DOM renderer y el componente raíz (App)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// React 18 usa createRoot para inicializar el renderizado concurrente
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**Explicación:**

- React renderiza una **SPA (Single Page Application)** dentro de un solo `index.html`.
- `createRoot()` permite aprovechar el render concurrente y mejoras de rendimiento.

**Referencia:** [ReactDOM.createRoot — React Docs](https://react.dev/reference/react-dom/client/createRoot)

---

## 🧩 4. App.jsx – Composición de componentes

```jsx
// App.jsx
import Header from "./components/Header";
import Card from "./components/Card";
import Counter from "./components/Counter";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <Header title="EcoHuerta 🌿" subtitle="Learn sustainable crops" />

      <section className="grid md:grid-cols-3 gap-4 w-full max-w-5xl">
        <Card title="Tomato" description="Warm-season crop rich in lycopene." />
        <Card title="Lettuce" description="Cool-season leafy vegetable." />
        <Card title="Carrot" description="Root crop high in beta-carotene." />
      </section>

      <Counter />
    </main>
  );
}
```

**Explicación:**

- `App` **compone** tres componentes reutilizables.
- La **UI se describe declarativamente** (no se manipula el DOM manualmente).
- Tailwind aplica diseño responsive y limpio.

**Referencia:** [Declarative UI — React.dev](https://react.dev/learn/thinking-in-react)

---

## 🧩 5. Header.jsx – Componente funcional con props

```jsx
// Header.jsx
export default function Header({ title, subtitle }) {
  return (
    <header className="text-center bg-green-600 text-white rounded-2xl p-6 shadow-md w-full max-w-5xl">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-lg opacity-90">{subtitle}</p>
    </header>
  );
}
```

**Explicación:**

- Desestructura `props` directamente en los parámetros.
- React vuelve a renderizar si cambian las props.
- Cada componente React **describe** cómo debería lucir la UI según sus datos actuales.

**Referencia:** [Passing Props — React.dev](https://react.dev/learn/passing-props-to-a-component)

---

## 🧩 6. Card.jsx – Reutilización y `props.children`

```jsx
// Card.jsx
export default function Card({ title, description, children }) {
  return (
    <article className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition w-full">
      <h2 className="text-xl font-semibold mb-2 text-green-700">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <div>{children}</div>
    </article>
  );
}
```

**Explicación:**

- Usa `props.children` para anidar contenido personalizado dentro de la tarjeta.
- El patrón **composición** evita crear componentes rígidos.

**Referencia:** [Composition — React.dev](https://react.dev/learn/passing-props-to-a-component#children)

---

## 🧩 7. Counter.jsx – Estado y renderizado reactivo

```js
// Counter.jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <section className="text-center p-4 bg-white rounded-xl shadow w-60">
      <h3 className="text-2xl font-bold mb-3">Counter: {count}</h3>
      <div className="flex justify-center gap-4">
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          –
        </button>
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          +
        </button>
      </div>
    </section>
  );
}
```

**Explicación detallada:**

- `useState()` crea una **variable reactiva** (`count`) con una función actualizadora (`setCount`).
- Cada vez que se llama `setCount()`, React **re-renderiza** el componente.
- React usa un modelo de **Virtual DOM**, comparando el árbol anterior con el nuevo y aplicando sólo los cambios necesarios.

**Referencia:**

- [useState Hook — React.dev](https://react.dev/reference/react/useState)
- [Render and Commit Phases — React.dev](https://react.dev/learn/render-and-commit)

---

## 🧠 8. JSX y mentalidad declarativa

JSX permite escribir markup dentro de JS.
React actualiza automáticamente la UI cuando el estado cambia — tú **describes qué quieres**, no **cómo actualizarlo**.

**Ejemplo conceptual:**

```jsx
// Declarativo
<button onClick={() => setCount(count + 1)}>Click me</button>;

// Imperativo (sin React)
const btn = document.createElement("button");
btn.addEventListener("click", () => {
  count++;
  document.querySelector("#value").innerText = count;
});
```

**Referencia:** [Declarative UI — React.dev](https://react.dev/learn/keeping-components-pure)

---

## 🌿 9. Buenas prácticas modernas

✅ Nombres de componentes en **PascalCase**.  
✅ Un componente = una responsabilidad.  
✅ `props` claras, sin abusar del estado.  
✅ Estado local con `useState`, efectos con `useEffect`.  
✅ Evitar mutar el estado directamente.  
✅ Mantener JSX simple y expresivo.  
✅ Documentar el propósito de cada componente.

**Referencia:** [React Component Guidelines — react.dev](https://react.dev/learn/thinking-in-react)

---

## 📘 10. Resultado final (SPA con flujo unidireccional)

```jsx
// Flujo de datos de arriba hacia abajo (parent → child)
<App>
  ├── <Header /> → recibe props (title, subtitle) ├── <Card /> → recibe props
  (title, description) └── <Counter /> → maneja su propio estado local
</App>
```

**Flujo de datos unidireccional:**

- Props bajan → datos fluyen desde el padre.
- Eventos suben → hijos notifican al padre mediante callbacks.

**Referencia:** [Data Flow — React.dev](https://react.dev/learn/thinking-in-react)

---

## ✅ Conclusión

Este código aplica los principios modernos de React:

- SPA renderizada dentro de un único `root` (Virtual DOM eficiente).
- Componentes funcionales reutilizables y predecibles.
- JSX declarativo + flujo unidireccional.
- Estado manejado con `useState`.
- Diseño con Tailwind CSS.

**Fuentes oficiales consultadas:**

- [React.dev (2025)](https://react.dev/learn)
- [Vite Guide](https://vitejs.dev/guide/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs – JSX & Events](https://developer.mozilla.org/)
