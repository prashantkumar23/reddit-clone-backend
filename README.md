## [Code for frotend](https://github.com/prashantkumar23/reddit-clone-frontend)

# Features:

1. You can browse all existing post (INFINITE SCROLL).
2. You can create a account / login and be able to logout.
3. You can create a community (sub).
4. You can create post in any community.
5. You can Upvote and Downvote on any post
6. You can Search too. (AUTOCOMPLETE SEARCH)
7. You can upload banner image and display image for that community you create
8. You can comment on any post
9. You can Upvote and Downvote on any comment too
10. You can view TOP Community

# TechStack

### Frontend

1. Typescript
2. TailWindCSS (A utility-first CSS framework)
3. NextJS (React framework)
4. SWR (stale-while-revalidate) (Data fetching library)
5. React Context (state management)

### Backend

1. Typescript
2. Nodejs
3. REST Api
4. JWT (for auth cookie based authentication)
5. TypeORM (postgresql)

API Routes:

1. (POST) api/auth/register - for registering new users
2. (POST) api/auth/login - for signing in existing users
3. (GET) api/auth/me - to get the details of current logged in user
4. (GET) api/auth/logout - for sign out

5. (GET) api/users/:username - to get the detail of the user

6. (POST) api/posts/ - to create a post
7. (GET) api/posts/ - to get all post
8. (GET) api/posts/:identifier/:slug - to get a specific post
9. (POST) api/posts/:identifier/:slug/comments - to comment on post
10. (GET) api/posts/:identifier/:slug/comments - to get the all comments of that post

11. (POST) api/subs/ - to create a sub
12. (GET) api/subs/:name - to get the sub
13. (GET) api/subs/search/:name - to do the search
14. (POST) api/subs/:name/image - to upload banner and display image

15. (POST) api/misc/vote - to downvote and upvote on any post or comment
16. (GET) api/misc/top-subs - to the top subs(top community)

Steps to run this repo:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command
