# My Online Book Store - Project Explanation

## Overview

My Online Book Store is a simple online bookstore where users can browse books, add them to their cart, and proceed to checkout. The project demonstrates basic functionalities of an e-commerce website including product listing, cart management, and checkout process.

## Project Structure

The project consists of the following main components:

1. **HTML Files**: These files define the structure and content of the web pages.
2. **CSS File**: The `styles.css` file provides the styling for the web pages, making them look more appealing and user-friendly.
3. **JavaScript File**: The `scripts.js` file contains the functionality for handling the cart operations and checkout process.
4. **Images Folder**: This folder contains the images of the products listed on the website.

## Main Features

### Product Listing

- Each product has its own page with details including an image, name, description, and price.
- The home page lists all available products with a brief description and an "Add to Cart" button for each product.

### Cart Management

- Users can add products to the cart by clicking the "Add to Cart" button on the product pages.
- The cart keeps track of the items added, including the quantity of each product.
- Users can view the contents of their cart by clicking the "Go to Cart" link available on all pages.
- Users can remove items from the cart or reduce the quantity of each product directly from the cart page.

### Checkout Process

- On the checkout page, users can view the final list of items they intend to purchase along with the total cost.
- Users need to fill out their name, address, and card details to complete the purchase.
- Upon clicking the "Complete Purchase" button, the system checks if there are items in the cart and displays a confirmation message if the purchase is successful. If the cart is empty, it prompts the user that there are no items to purchase.
- After a successful purchase, the cart is cleared and the user is redirected to the home page.

## File Descriptions

### index.html

This is the main entry point of the website. It lists all the products available in the store with their names, descriptions, prices, and images. Each product has an "Add to Cart" button to add the product to the shopping cart.

### cart.html

This page displays the contents of the user's shopping cart. It lists all the items added to the cart along with their quantities and prices. Users can remove items or reduce their quantities from this page. The total cost of the items in the cart is also displayed.

### checkout.html

The checkout page lists the final items in the user's cart along with their total cost. Users are required to fill out their personal details such as name, address, and card number to complete the purchase. 

### styles.css

This file contains the styling rules for the website. It includes styles for the header, footer, product listings, cart, and checkout forms. The styles ensure that the website is visually appealing and responsive.

### scripts.js

This file contains the JavaScript code for handling the functionality of the website. It includes functions to add items to the cart, remove items from the cart, update the cart contents, and handle the checkout process. The cart data is stored in the browser's localStorage to persist the cart contents between page reloads.

### images/

This folder contains images of the products listed on the website. Each product page displays an image from this folder.
