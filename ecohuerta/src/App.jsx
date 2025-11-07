import { useState } from 'react'
import './index.css'
import Header from "./componet/Header";
import Card from "./componet/Card";
import Counter from "./componet/Counter";
import Footer from "./componet/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
      <Header title="EcoHuerta 🌿" subtitle="Learn sustainable crops" />

      <section className="grid md:grid-cols-3 gap-4 w-full max-w-5xl">
        <Card title="Tomato" description="Warm-season crop rich in lycopene." />
        <Card title="Lettuce" description="Cool-season leafy vegetable." />
        <Card title="Carrot" description="Root crop high in beta-carotene." />
      </section>

      <Counter />

      <footer />
    </main>
  )
}

export default App
