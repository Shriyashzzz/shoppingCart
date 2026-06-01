# Shopping Cart App

Browse. Filter. Add to cart. You know the drill.

---

## Live Demo

[shoppingcart.vercel.app](https://shopping-cart-shriyashzzzs-projects.vercel.app/)

---

## Preview

![App Preview](./src/assets/preview.png)

---

## What it does

- gives product categories to browse
- Filter by category, sort by price
- Add to cart with custom quantity
- Cart state shared across pages via outlet context
- Light / Dark mode
- Fully responsive

---

## Stack

| Tech            | Why                            |
| --------------- | ------------------------------ |
| React           | obviously                      |
| React Router v7 | nested routes + outlet context |
| CSS Modules     | scoped styles, no conflicts    |
| Vite            | fast                           |
| DummyJSON       | free mock API                  |

---

## Run it locally

```bash
git clone https://github.com/Shriyashzzz/shoppingCart.git
cd shoppingCart
npm install
npm run dev
```

---

## What I actually learned

- Custom hooks with `AbortController` cleanup
- Rules of Hooks the hard way (hooks after early returns 💀)
- CSS nesting is case-sensitive on Linux but not macOS (never again)
- `FormData` API for form inputs
- Outlet context for shared cart state across routes

---

## What's next

- Persist cart to `localStorage`
- Checkout flow
- Product detail pages
- Tests

---

## Credits

- [The Odin Project](https://www.theodinproject.com/)
- [DummyJSON](https://dummyjson.com/)

---

_Educational / portfolio project._
