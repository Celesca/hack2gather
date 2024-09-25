# Hack2gather - Hackathon Team Finder Application Backlogs

Context:

Hack2gather is a new hackathon team finder platform aiming to provide a smooth and user-friendly experience for customers. 
This backlogs aims to implementing essential functionalities using REST APIs for the Hack2gather server.

MVP Scope:
This workshop will focus on building the Minimum Viable Product (MVP) functionalities, prioritizing core features that deliver the most value to customers. This includes:

### Account (Login / Register) Feature:
- Users can register with Email and password (Basic Authentication)
- Users can login with Email and password (Basic Authentication)
- Users can register with Gmail (OAuth2 - Passport.js)
- Users can login with Gmail (OAuth2 - Passport.js)
- Users can comeback in the page without relogin to website with cookies (or Json Web Token)

### Profile Feature: 
- Users can add and remove experiences to their profiles.
- Users can add and remove technical skills to their profiles.
- Users can change their name and surname in their profiles.
- Users can add review and rating to others user profile.
- Users can add and change information about themselves including:
    - Description
    - School / University
    - Degree (E.g. Bachelor's Degree Year 2)
    - Education Field including 3 main types:
      	- Technology Field
      	- Business Field
      	- Marketing Field
      	- Ideate Field
- Users can change their personal preferences
- Users can see lists of their friend in profiles.

### Personal preferences Feature:
- After users register, users will should did the personal perferences first.
- Users can skip the personal preferences at first time.
- Users can did the personal preferences tests anytime.
 
### Connection Feature:
- Users can slide and pick up for the person who have the similar persona.
- Users can Add Friend (Matching) to other person.
- Users can Direct Message to other person.

### Friend Feature:
- Users can see lists of their friends in friend tab
- Users can see the friend request.
- Users can reject or approve the friend request.

### Message Feature:
- Users can send direct message to other people.
- Users can open their message boxes.

### Hackathon Feature:
- Users can see all the hackathons in lists.
- Users can open the hackathon page of each events.
- Users can see all the teams that are currently opened for others.
- Users can opened their teams to invite others including:
	- Team Name
	- Team Member
- Users can receive the invitation through the notifications

### Notification Feature:
- Users can receive the unread messages from others
- Users can approve or reject the invitation from others team.
- Users can opened to see the invatation which need to including:
	- Hackathon Event
 	- Team Name
  	- Approved or Reject Button
- After users approve the invatation, the team message will automatically created and hackathon opened team will closed.

Requirements: Consist with user stories and acceptance criteria as well as technical requirements.

## <div style="color: red;">Future Plan: </div>

- The board (like Pantip) in the hackathon.
- The SLM Chatbot with RAG in the hackathon Q&A.



--- 

# User Stories:


# Story 1:

As a users, I want to login to the system, so that I can view anything in the website.

## Acceptance Criteria:
- The API retrieves the 404 Error or 200 OK.

## Technical Requirements:
- REST API Endpoint: POST /login
- Request Body: Content Type: application/json
- Request Body Example: {"email": "test.owen@gmail.com", "password": "1234"}
- Response: 200 OK with cookies

for example: {"message": "Email or password not matched"} with 404 status code

# Story 2:

As a customers, I want to register my account to the system, so that I can login in the future.

## Acceptance Criteria:
- Returns a 200 OK with the good information
- Returns a 400 Error if some fields are not valid or already have that email.

## Technical Requirements:
- REST API Endpoint: POST /register
- Request Body: Content Type: application/json
- Request Body Example: {"email" : "test.something@gmail.com", "password": "1234", "name": "Folk", "surname": "Kasidit", "degree": "Bachelor"}
- Note That : The education field should be the dropdown and fixed type!
- Response: 200 OK
- Response: 400 with appropriate request body and duplicate email

for example: {"message": "Email already exists"} with 400 status code


Wait for next steps!
-------- 

# Story 3:

As a Product Manager, I want to have pagination for the products, so that I can manage the products more efficiently.

## Acceptance Criteria:
- The API retrieves a list of all products with pagination.
- Each product object includes essential details like id, name, description, price, sku and stock quantity.
- The API supports pagination with query parameters like page and limit.

## Technical Requirements:
- REST API Endpoint: GET /products with query parameters
- Query Parameters: page, limit
- Response: 200 OK with a list of products in JSON format
- Each product object should include id, name, description, price, sku and stock quantity.
- The API should support pagination based on the query parameters.


# Story 4:

As a Shopper, I want to add a specific product to my cart, so that I can purchase the product later.

## Acceptance Criteria:
- The API adds the specified product (identified by its ID) to the user's cart with the provided quantity.
- Returns a 201 Created with a success message if the item is added successfully.
- Returns a 400 Bad Request with an appropriate error message if the request body is invalid (e.g., missing fields or invalid data format).

## Technical Requirements:
- REST API Endpoint: POST /carts/{username}/items
- Path Variable: {username} - Represents the unique user identifier.
- Request Body: Content Type: application/json
- Request Body Example: {"productSku": 1, "quantity": 2}
- Response: 201 Created with a success message if the item is added successfully
- Response: 400 Bad Request with an appropriate error message if the request body is invalid
- any error should be handled and return 400 Bad Request with an appropriate error message if the request body is invalid.
		for example: {"message": "Invalid request body"} with 400 status code


# Story 5:

As a Shopper, I want to apply a promotion code discount to *my cart*, so that I can get a discount on my purchase.

## Acceptance Criteria:
- The API applies the promotion code `FIXEDAMOUNT10` discount to the shopper cart.
- Returns a 200 OK with the updated cart details if the promotion code is applied successfully.

## Technical Requirements:
- REST API Endpoint: POST /carts/{username}/promotions
- Path Variable: {username} - Represents the unique user identifier.
- Request Body: Content Type: application/json
- Request Body Example: {"code": "FIXEDAMOUNT10"}


# Story 6:

As a Shopper, I want to apply a promotion code discount to *specific product* in my cart, so that I can get a discount on my purchase.

## Acceptance Criteria:
- The API applies the promotion code `FIXEDAMOUNT2` discount to the specific product sku `STATIONERY-STAPLER-SWINGLINE` in the shopper cart.
- Returns a 200 OK with the updated cart details if the promotion code is applied successfully.

## Technical Requirements:
- REST API Endpoint: POST /carts/{username}/promotions
- Path Variable: {username} - Represents the unique user identifier.
- Request Body: Content Type: application/json
- Request Body Example: {"code": "FIXEDAMOUNT2", "productSkus": ["STATIONERY-STAPLER-SWINGLINE"]}


# Story 7:

As a Product Owner, I want to limit the discount amount when shopper apply promotion code to the cart, so that I can control the discount amount.

## Acceptance Criteria:
- The API applies the promotion code `THIRTYPERCENTOFFLIMIT200` 30% Discount Up to 200 Baht Off Entire Cart discount to the shopper cart.
- Returns a 200 OK with the updated cart details if the promotion code is applied successfully.

## Technical Requirements:
- REST API Endpoint: POST /carts/{username}/promotions
- Path Variable: {username} - Represents the unique user identifier.
- Request Body: Content Type: application/json
- Request Body Example: {"code": "THIRTYPERCENTOFFLIMIT200"}

# Story 8:

As a Shopper, I want to apply a promotional code to get free product, so that I can get a free item on my purchase.

## Acceptance Criteria:
- The API applies the promotional code `BUY2GET1FREE` to the shopper cart.
- Returns a 200 OK with the updated cart details if the promotional code is applied successfully.

## Technical Requirements:
- REST API Endpoint: POST /carts/{username}/promotions
- Path Variable: {username} - Represents the unique user identifier.
- Request Body: Content Type: application/json
- Request Body Example: {"code": "BUY2GET1FREE"}

# Story 9:

As a Shopper, I want to apply a promotional code to specific product to get discount, so that I can get a discount on my purchase.

## Acceptance Criteria:
- The API applies the promotional code `SPECIFICPRODUCT30OFF` to the specific product sku `MOBILE-APPLE-IPHONE-12-PRO` in the shopper cart.

## Technical Requirements:
- REST API Endpoint: POST /carts/{username}/promotions
- Path Variable: {username} - Represents the unique user identifier.
- Request Body: Content Type: application/json
- Request Body Example: {"code": "SPECIFICPRODUCT30OFF", "productSkus": ["MOBILE-APPLE-IPHONE-12-PRO"]}

# Story 10:
As a Shopper, I want to to have a promotion applied to a product automatically, so that I can get a discount on my purchase.

## Acceptance Criteria:
- The API applies the promotion code discount to the product sku `MOBILE-APPLE-IPHONE-12-PRO` in the shopper cart.
- Returns a 200 OK with the updated cart details if the promotion code is applied successfully.

## Technical Requirements:
- REST API Endpoint: POST /carts/{username}/promotions
- Path Variable: {username} - Represents the unique user identifier.
- Request Body: Content Type: application/json
- Request Body Example: {"productSku": "MOBILE-APPLE-IPHONE-12-PRO"}

# Story 11:

As a Shopper, I want to earn Kpoints for every purchase, so that I can redeem them for discounts on my next purchase.

## Acceptance Criteria:
- The API calculates and adds Kpoints to the user's account based on the amount spent.
- Returns a 200 OK with the updated Kpoints balance if the Kpoints are added successfully.
- Returns a 400 Bad Request with an appropriate error message if the request body is invalid (e.g., missing fields or invalid data format).

## Technical Requirements:
- REST API Endpoint: POST /kpoints/{username}/earn
- Path Variable: {username} - Represents the unique user identifier.
- Request Body: Content Type: application/json
- Request Body Example: {"amount_spent": 100.00}
- Response: 200 OK with the updated Kpoints balance if the Kpoints are added successfully
- Response: 400 Bad Request with an appropriate error message if the request body is invalid
- any error should be handled and return 400 Bad Request with an appropriate error message if the request body is invalid.
		for example: {"message": "Invalid request body"} with 400 status code

# Story 12:

As a Shopper, I want to redeem Kpoints for a discount on my next purchase, so that I can save money on my order.

## Acceptance Criteria:
- The API applies the Kpoints discount to the user's cart based on the number of Kpoints redeemed.
- Returns a 200 OK with the updated cart details if the Kpoints are redeemed successfully.
- Returns a 404 Not Found with an appropriate error message if the Kpoints are insufficient or invalid.

## Technical Requirements:
- REST API Endpoint: POST /carts/{username}/kpoints
- Path Variable: {username} - Represents the unique user identifier.
- Request Body: Content Type: application/json
- Request Body Example: {"kpoints": 100}
- Response: 200 OK with the updated cart details if the Kpoints are redeemed successfully
- Response: 404 Not Found with an appropriate error message if the Kpoints are insufficient or invalid
- any error should be handled and return 404 Not Found with an appropriate error message if the Kpoints are insufficient or invalid.
		for example: {"message": "Insufficient Kpoints"} with 404 status code

# Story 13:

As a Shopper, I want to remove a specific product from my cart, so that I can update my purchase before checking out.

## Acceptance Criteria:
- The API removes the specified product (identified by its ID) from the user's cart.
- Any promotional discounts or Kpoints associated with the removed product should be recalculated and updated.
- Returns a 200 OK with a success message if the item is removed successfully.
- Returns a 404 Not Found with an appropriate error message if the product doesn't exist in the cart.

## Technical Requirements:
- REST API Endpoint: DELETE /carts/{username}/items/{productSku}
- Path Variable: {username} - Represents the unique user identifier.
- Path Variable: {productSku} - Represents the unique product identifier.
- Response: 200 OK with a success message if the item is removed successfully
- Response: 404 Not Found with an appropriate error message if the product doesn't exist in the cart
- any error should be handled and return 404 Not Found with an appropriate error message if the product doesn't exist in the cart.
		for example: {"message": "Product not found in the cart"} with 404 status code

# Story 14:

As a Shopper, I want to view my cart details, so that I can review the products and discounts before checking out.

## Acceptance Criteria:
- The API retrieves the user's cart details including products, quantities, prices, discounts, and total amount.
- Returns a 200 OK with the cart details in JSON format if the cart exists.
- Returns a 404 Not Found with an appropriate error message if the cart doesn't exist.

## Technical Requirements:
- REST API Endpoint: GET /carts/{username}
- Path Variable: {username} - Represents the unique user identifier.
- Response: 200 OK with the cart details in JSON format if the cart exists
- Response: 404 Not Found with an appropriate error message if the cart doesn't exist
- any error should be handled and return 404 Not Found with an appropriate error message if the cart doesn't exist.
		for example: {"message": "Cart not found"} with 404 status code

# Story 15:

As a Shopper, I want to place an order with the items in my cart, so that I can complete my purchase.

## Acceptance Criteria:
- The API creates an order with the items in the user's cart and updates the stock quantity of the products.
- Returns a 201 Created with the order details if the order is placed successfully.
- Returns a 400 Bad Request with an appropriate error message if the cart is empty or the stock quantity is insufficient.

## Technical Requirements:
- REST API Endpoint: POST /orders/{username}
- Path Variable: {username} - Represents the unique user identifier.
- Response: 201 Created with the order details if the order is placed successfully
- Response: 400 Bad Request with an appropriate error message if the cart is empty or the stock quantity is insufficient
- any error should be handled and return 400 Bad Request with an appropriate error message if the cart is empty or the stock quantity is insufficient.
		for example: {"message": "Cart is empty"} with 400 status code
