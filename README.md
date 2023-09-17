# HNG-Internship

## STAGE ONE

**Objective**
- Create and host an endpoint using any programming language of your choice. The endpoint should take two GET request query parameters and return specific information in JSON format.

**Requirements**
The information required includes:
- Slack name
- Current day of the week
- Current UTC time (with validation of +/-2)
- Track
- The GitHub URL of the file being run
- The GitHub URL of the full source code.
- A Status Code of Success
- JSON
{
  "slack_name": "example_name",
  "current_day": "Monday",
  "utc_time": "2023-08-21T15:04:05Z",
  "track": "backend",
  "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
  "github_repo_url": "https://github.com/username/repo",
  “status_code”: 200
}

**Acceptance Criteria**
- Endpoint Creation: Provide a publicly accessible endpoint.
- GET Parameters: The endpoint should accept two GET request query parameters: slack_name and track.
       E.g.: http://example.com/api?slack_name=example_name&track=backend.
- Slack Name: The response should include the slack_name passed as a GET request query parameter.
- Current Day of the Week: Display the current day of the week in full (e.g., Monday, Tuesday, etc.).
- Current UTC Time: Return the current UTC time, accurate within a +/-2 minute window.
- Track: The response should display the track of the you signed up for (Backend). This will be based on the track GET parameter passed to the endpoint.
- GitHub File URL: Include a direct link to the specific file in the GitHub repository that's being executed.
- GitHub Repo URL: Include a link to the main page of the GitHub repository containing the project's entire source code.
- Status Code: Return 200 as Integer.
- JSON Format: The endpoint's response should adhere to the specified JSON format.

## STAGE TWO

**Objective:** 
Build a simple REST API capable of CRUD operations on a resource, say, a "person". The chosen programming language should interface with any chosen database of your choice.

**1. REST API Development:**
- Develop an API with endpoints for:
- CREATE: Adding a new person.  =>/api
- READ: Fetching details of a person.  => /api/user_id
- UPDATE: Modifying details of an existing person => /api/user_id
- DELETE: Removing a person => /api/user_id
- Ensure all interactions with the database are secure and free from common vulnerabilities (e.g., SQL injections).
  
**2. Database Modelling: (Bonus)**
- UML Diagram: Design and present a UML (Unified Modeling Language) diagram that represents the structure and relationships of your API's classes and models.
  
**3. Testing:**
- Using tools like Postman or (scripts written in Python using the requests library) that tests each CRUD operation in your API.
This  should:
- Add a new person (e.g., "Mark Essien").
- Fetch details of a person
- Modify the details of an existing person.
- Remove a person
  
**4. Dynamic Parameter Handling:**
- Your API should be flexible enough to handle dynamic input. If we provide a name (or other details), your backend should be able to process operations using that name.
- Example: If we pass "Mark Essien", we should be able to perform all CRUD operations on "Mark Essien".
- Add validation – field should only be strings; integers or any other data type should not be allowed.
  
**5. GitHub Repository:**
- Create a GitHub repository for this project.
- Ensure the repository contains:
- A detailed README.md file explaining how to set up, run, and use the API.
- The source code for the API.
- UML diagrams (or links to view them).
  
**6. Documentation:**
- Provide a documentation file (e.g., DOCUMENTATION.md in your GitHub repo) that outlines:
- Standard formats for requests and responses for each endpoint.
- Sample usage of the API, including example requests and expected responses.
- Any known limitations or assumptions made during development.
- Instructions for setting up and deploying the API locally or on a server.
  
**7. Hosting**
- Using the same Server used in the Stage One task (or another server, if possible), modify it accordingly to  host your endpoint with a URL like this https://theirdomain.com/api
- Test extensively with various testing tools to make sure it is accessible before submitting
