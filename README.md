# 🚦 Status Code APIs (Express.js with Switch Case)

This is a simple Express.js application that exposes 7 API endpoints, each returning a different HTTP status code using a centralized switch-case block.

---

### 📁 Project Structure

<img width="181" height="200" alt="image" src="https://github.com/user-attachments/assets/f44701a8-7dfe-46fb-bd01-75ecc4a1bce1" />

### 🧑‍💻 Step 1: Made a GET request
```bash
GET http://localhost:3000/api500
```
### Step 2: Request goes to  Express server
The Node.js process is running on server.js file.

Express listens on port 3000



### 🚦 Step 3: Express matches the route

app.get('/api500', (req, res) => {
  res.status(500).json({
    status: 500,
    message: 'Internal Server Error - Something went wrong on the server.'
  });
});


Express checks all .get() routes.

It sees a match with /api500.


### Step 4: Response is prepared
The response is built:

Status code: 500

Body: JSON with status and message

### Step 5: Response is sent back to the client (Postman/curl)
Express sends the response over HTTP.

Output in Postman:
<img width="1530" height="824" alt="image" src="https://github.com/user-attachments/assets/2fba7646-f98f-448f-802e-a345b253d0ab" />

### Summary
<img width="238" height="324" alt="image" src="https://github.com/user-attachments/assets/e3bac669-c5a8-433c-abb7-4db5017bcaff" />



### 📡 Available API Endpoints


| Endpoint  | Status Code | Description                                             |
| --------- | ----------- | ------------------------------------------------------- |
| `/api200` | 200         | OK - Everything is working fine                         |
| `/api400` | 400         | Bad Request - Invalid client request                    |
| `/api404` | 404         | Not Found - Resource does not exist                     |
| `/api500` | 500         | Internal Server Error - Server-side issue               |
| `/api501` | 501         | Not Implemented - Not supported functionality           |
| `/api502` | 502         | Bad Gateway - Invalid upstream server response          |
| `/api503` | 503         | Service Unavailable - Temporary overload or maintenance |

### Testing with curl.exe
curl.exe -i http://localhost:3000/api200


curl.exe -i http://localhost:3000/api400


curl.exe -i http://localhost:3000/api404


curl.exe -i http://localhost:3000/api500


curl.exe -i http://localhost:3000/api501


curl.exe -i http://localhost:3000/api502


curl.exe -i http://localhost:3000/api503

<img width="958" height="407" alt="image" src="https://github.com/user-attachments/assets/8c6058b6-8b27-4a35-b8e1-c6592cc5a8fc" />




