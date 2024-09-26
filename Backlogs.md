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

# -- Login Feature --

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
- Request Body Example: {"email" : "test.something@gmail.com", "password": "1234", "name": "Folk", "surname": "Kasidit", "degree": "Bachelor", "education": "Year2"}
- Note That : The education field should be the dropdown and fixed type!
- Response: 200 OK
- Response: 400 with appropriate request body and duplicate email

for example: {"message": "Email already exists"} with 400 status code

# -- Profile Feature --

# Story 3:

As a users, I want to edit my profile.

## Technical Requirements:
- REST API Endpoint: POST /profile/{user_id} with request body
- Path Variable: user_id
- Request Body: Content Type: application/json
- Request Body: experiences, technical skills, name, surname, review, description, school, degree, education field, personal preferences
- Response: 200 OK with a list of information in that user profile

# Story 4:

As a Users, I want to see the list of my friends.

## Technical Requirements:
- REST API Endpoint: GET /friends/{user_id}
- Path Variable : user_id
- Response: 200 OK with the list of friends in that user.

# -- Connection Feature --

# Story 5:

As, a Users, I want to see others profile.

## Technical Requirements:
- REST API Endpoint: GET /connections
- Response: 200 OK with the list of all users in the system
- Normally, I want the pagination but nevermind!

# Story 6:

As a users, I want to add friend to other persons.

## Technical Requirements:
- REST API Endpoint: POST /friends_request/{target_id} with Request Body
- Path Variable: {target_id} - The user we want to added.
- Request Body: Content Type: application/json
- Request Body Example: {"user_id": "XXX-XXX-XXXX"} this is the user_id whom want to add the target_id

# Story 7: ❌ (Folk will handle this Message Feature with Pusher and WebSocket )

As a users can direct messages to others 

## Acceptance Criteria:
- WebSocket Endpoint:

# -- Friend Feature --

# Story 8:

As a users, I want to see the friend request.

## Technical Requirements:
- REST API Endpoint: GET /friend_request/{user_id}
- Path Variable: {user_id}
- Response: 200 OK with the lists of friend request of that users!

# Story 9:

As a users, I want to reject or approved the friend request.

## Technical Requirements:
- REST API Endpoint: POST /friend_request/approve/{user_id}
- Path Variable: {user_id} are the people who will accepted or rejected.
- Request Body: { "status": 1, "target_id": "XXX-XXX-XXXX" }
- When the status 1 is approved and status 0 is rejected
- Response: 200 OK when success and 400 Error when Request body isn't true.

# -- Hackathon Feature --

# Story 10:
As a Users, I want to see all hackathon events

## Technical Requirements:
- REST API Endpoint: GET /hackathons
- Response 200 OK: with list of hackathons

# Story 11:

As a users, I want to enter the hackathon of each events

## Technical Requirements:
- REST API Endpoint: GET /hackathons/{event_id}
- Path Variable: event_id is the primary key of those events
- ⭐ Remember to return the json format of hackathon event object including
	- { "event_id" , "description", "team" : [ ] }
   	- the team object should contains the array of teams and we can accepted
   	- However! In the technicial terms 🥊 I think we shouldn't implemented this feature because I will causes us a lot of time to design the another tables. We will need to talk that we want this feature or just showing the team and let them click to message themselves! ⏰
 
# -- Notification --

# Story 12:

As a users, I want to see the notifications of all systems.

## Technical Requirements:
- REST API Endpoint: GET /notifications/{user_id}
- Path Variable: user_id
- Response: 200 OK and get the lists of all notifications

# Story 13:

As a users, I want to marked it as read message instead of unread notifications.

## Technical Requirements:
- REST API Endpoint: POST /notifications/{user_id} with Request Body
- Path Variable: user_id
- Request Body: { "notification_id" , "123" , "status" : 1 }
- The status 1 is read, and status 0 is unread.
- When opened the notifications all of it will turn into status 1 because users read it.
