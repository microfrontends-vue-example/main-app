# main-app

This is the main (Host) application that integrates multiple remote apps using Module Federation (based on Vue 3 + Vite).

## Features

- Connects remote apps:
    - `product-card-app`
    - `cart-app`
    - `admin-app`
- Shares global state using Pinia
- Handles routing and authentication
- Guards admin routes with middleware
- Loads remote components dynamically via `vite-plugin-federation`

## Technologies

- Vue 3
- Vite
- Pinia
- Vue Router
- Module Federation (originjs plugin)

## Project structure