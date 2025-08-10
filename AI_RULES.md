# HTML Template Rules

This document outlines the technology stack and specific library usage guidelines for a standard HTML template project. Adhering to these rules will help maintain consistency, improve collaboration, and ensure the code is clean, efficient, and easy to maintain.

## Tech Stack Overview

The template is built using the following core technologies:

* **Markup**: HTML5. All HTML files, including the main index.html, are located in the src directory.

* **Styling**: Tailwind CSS, included via a CDN, for a utility-first approach. Custom CSS is stored in the `styles` folder.

* **Scripting**: JavaScript (ES6+), for all dynamic functionality. All JavaScript files are stored in the `scripts` folder.

* **Icons**: Lucide Icons, included via a CDN, which is a comprehensive library of lightweight SVG icons.

* **Animations**: Tailwind's animation capabilities and native CSS animations.

## Library Usage Guidelines

To ensure consistency and a streamlined workflow, please follow these guidelines:

1.  **UI Components**:

    * **Primary Choice**: Create all UI elements using semantic HTML and style them with Tailwind CSS utility classes.

    * **Avoid**: Introducing heavy, third-party UI component libraries (e.g., Bootstrap, Materialize) that may conflict with Tailwind CSS.

2.  **Styling**:

    * **Primary Choice**: Exclusively use Tailwind CSS utility classes for styling elements directly in the HTML. For global styles, base styling, or complex custom styles that are not possible with Tailwind, use a dedicated stylesheet within the `src/styles` folder.

    * **Avoid**: Using CSS-in-JS libraries or embedding extensive `<style>` blocks within the HTML body.

3.  **Icons**:

    * **Primary Choice**: Use icons from the **Lucide Icons** library. You can include them as inline SVGs directly in your HTML or use the library's JavaScript to dynamically create them, as seen in the provided template.

4.  **JavaScript & Logic**:

    * **Primary Choice**: Write all new code using modern **ES6+ JavaScript**. All JavaScript files should be stored in the `src/scripts` folder.

    * **Modularity**: Organize your JavaScript into separate, well-commented files and link them using `<script type="module">` for a clean, modular structure.

    * **Avoid**: Writing large, monolithic JavaScript files.

5.  **Forms**:

    * **Management**: Use native HTML form elements (`<form>`, `<input>`, `<button>`) and handle all logic and validation with **vanilla JavaScript**.

    * **Avoid**: Using complex form validation libraries unless a specific need arises.

6.  **Data Fetching**:

    * **Client-Side**: Use the native **`fetch` API** for all client-side data retrieval from an API.

7.  **Animations**:

    * Use **Tailwind's animation classes** (`animate-*`) for simple, pre-built animations and native **CSS transitions and keyframe animations** for more complex effects.

8.  **Utility Functions**:

    * General-purpose helper functions should be placed in a separate JavaScript file within the `scripts` folder (e.g., `src/scripts/utils.js`) to promote reusability.