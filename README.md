# main-app

Host application for the microfrontend system, responsible for routing, layout, and runtime integration of remote applications via Module Federation.

---

## Role

- Acts as the system shell (entry point)
- Handles routing and navigation across microfrontends
- Composes remote microfrontends into a unified UI
- Manages shared state (Pinia)
- Controls authentication and route guards

---

## Integration

- Dynamically loads remote applications:
  - `product-card-app`
  - `cart-app`
  - `admin-app`
- Uses Module Federation for runtime composition of remote applications
- Resolves shared dependencies across microfrontends

---

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- Module Federation (vite-plugin-federation)

---

## Development

```bash
yarn
yarn dev
```

Application runs on http://localhost:3000

## Part of system

This application is part of the microfrontend system:  
[Microfrontends Vue Lab](https://github.com/Artem-Makarchenko-Dev/microfrontends-vue-lab)