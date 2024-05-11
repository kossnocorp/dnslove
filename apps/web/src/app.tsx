import { createSignal } from "solid-js";
import "./app.css";
import { Editor } from "@dl/editor/Editor.jsx";

export default function App() {
  const [count, setCount] = createSignal(0);

  return (
    <main class="bg-neutral-950 text-white h-screen py-12">
      <section class="max-w-xl mx-auto text-center space-y-12 py-10 px-8 bg-black rounded-xl">
        <div class="space-y-2">
          <h1 class="text-neutral-50 font-bold text-3xl">DNS Love</h1>
          <h2 class="text-neutral-500 font-semibold text-xl">
            Sweet DNS records editor
          </h2>
        </div>

        <label class="block space-y-4">
          <div class="text-xl text-neutral-400">
            Enter your domain to get started
          </div>

          <input
            type="text"
            placeholder="example.com"
            class="w-full px-5 py-4 text-2xl text-center rounded-lg bg-neutral-900 focus:outline-none"
            autofocus
          />
        </label>
      </section>

      <section class="max-w-xl mx-auto space-y-4">
        <Editor />
      </section>
    </main>
  );
}
