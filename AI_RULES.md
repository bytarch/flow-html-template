
# HTML Template Rules

**🚨 IMPORTANT — PROJECT SCOPE**
This is **always** a full **HTML + CSS + TailwindCSS + JavaScript (ES6+)** project. No TypeScript, no other frameworks.
If you include external libraries or assets, they **must** be linked via a **CDN** — never through npm, package managers, or build tools.

## Tech Stack Overview

The template is built using the following core technologies:

* **Markup**: HTML5. All HTML files, including the main `index.html`, are located in the `src` directory.

* **Styling**: Tailwind CSS (via CDN) for a utility-first approach. Custom CSS is stored in the `styles` folder.

* **Scripting**: **JavaScript (ES6+) only** — absolutely no TypeScript. All JavaScript files are stored in the `scripts` folder.

* **Icons**: Lucide Icons (via CDN), a comprehensive library of lightweight SVG icons.

* **Animations**: Tailwind's animation capabilities and native CSS animations.

## Library Usage Guidelines

To ensure consistency and a streamlined workflow, follow these guidelines:

1. **UI Components**:

   * **Primary Choice**: Create all UI elements using semantic HTML and style them with Tailwind CSS utility classes.

   * **Component Scripting**: All interactive or dynamic UI components must be implemented in **JavaScript (ES6+)** — no TypeScript.

   * **CDN Requirement**: Any additional UI-related libraries must be included **via CDN** in `index.html`.

   * **Avoid**: Heavy third-party UI frameworks (e.g., Bootstrap, Materialize) that conflict with Tailwind CSS.

2. **Styling**:

   * **Primary Choice**: Exclusively use Tailwind CSS utility classes.

   * For global styles, base styling, or complex custom styles, use a dedicated stylesheet within the `src/styles` folder.

   * **Avoid**: CSS-in-JS libraries or embedding extensive `<style>` blocks within HTML.

3. **Icons**:

   * **Primary Choice**: Use icons from the **Lucide Icons** library via CDN.
   * You may include them inline as SVG or generate them dynamically with JavaScript.

4. **JavaScript & Logic**:

   * **Primary Choice**: Write all code in modern **ES6+ JavaScript** — never in TypeScript.

   * **CDN Requirement**: All external JavaScript libraries must be included via CDN.

   * **Modularity**: Organize code into separate, well-commented files. Use `<script type="module">` for imports.

   * **Avoid**: Large, monolithic JS files.

5. **Forms**:

   * **Management**: Use native HTML form elements (`<form>`, `<input>`, `<button>`) and handle all logic/validation with vanilla JavaScript.

   * **Avoid**: Large form libraries unless a specific requirement exists — and then only via CDN.

6. **Data Fetching**:

   * **Client-Side**: Use the native **`fetch` API** for all client-side data retrieval.

7. **Animations**:

   * Use **Tailwind animation classes** (`animate-*`) for simple effects.
   * Use native **CSS transitions** or **keyframes** for advanced animations.

8. **Utility Functions**:

   * Place general-purpose helper functions in a separate file (e.g., `src/scripts/utils.js`) for reusability.

---

