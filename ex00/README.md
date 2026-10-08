# Project 04 - Exercise 00: Personal Portfolio (Capstone)

This project is an authentic, fully responsive personal developer portfolio built from scratch as part of the Web Piscine capstone. It synthesizes all core web development disciplines learned across the curriculum: semantic HTML5 structure, modern CSS styling, dynamic JavaScript DOM manipulation, and Git version control.

## Features
- **Semantic HTML5 Architecture:** Clean landmarks (`header`, `main`, `section`, `aside`, `footer`) structured for accessibility and screen readers.
- **Modern CSS3 Design System:** Utilizes CSS variables (`:root`) for easy theme management, custom design tokens, Flexbox layouts, grid card components, and smooth transitions.
- **Dynamic JavaScript (ES6+):** 
  - **Theme Switcher:** Toggles seamlessly between Light and Dark modes dynamically via DOM manipulation and `data-theme` attributes on the root element.
  - **Back-to-Top Button:** Interactive scroll listener that appears conditionally and scrolls smoothly back to the top.
  - **Contact Form Validation:** Validates user inputs cleanly with strict equality, providing dynamic feedback messages without dangerous innerHTML or page reloads.
- **Mobile-Responsive:** Fully adaptable across all screen sizes using CSS media queries and flexible containers.

## Technologies Used
- HTML5
- CSS3 (Flexbox, Media Queries, Variables)
- JavaScript (ES6+, DOM API)
- Git & GitHub for Version Control

## Project Structure
```text
ex00/
├── index.html       # Main HTML document structure
├── style.css        # Custom design system and responsive styles
├── script.js        # JavaScript interactivity and event handling
├── assets/          # Images and media files (e.g., profile photo)
└── README.md        # Project documentation
