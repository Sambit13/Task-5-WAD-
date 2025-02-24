<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Registration</title>
    <style>
        .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
        }
        .form-group input {
            width: 100%;
            padding: 8px;
        }
        .btn {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
        #loginSection {
            display: none;  /* Hide login section initially */
        }
    </style>
</head>
<body>
    <div class="container">
        <div id="registerSection">
            <h2>Register</h2>
            <form id="registerForm">
                <div class="form-group">
                    <label for="registerName">Name:</label>
                    <input type="text" id="registerName" required>
                </div>
                <div class="form-group">
                    <label for="registerEmail">Email:</label>
                    <input type="email" id="registerEmail" required>
                </div>
                <div class="form-group">
                    <label for="registerPassword">Password:</label>
                    <input type="password" id="registerPassword" required>
                </div>
                <button type="submit" class="btn">Register</button>
            </form>
        </div>

        <div id="loginSection">
            <h2>Login</h2>
            <form id="loginForm">
                <div class="form-group">
                    <label for="loginEmail">Email:</label>
                    <input type="email" id="loginEmail" required>
                </div>
                <div class="form-group">
                    <label for="loginPassword">Password:</label>
                    <input type="password" id="loginPassword" required>
                </div>
                <button type="submit" class="btn">Login</button>
            </form>
        </div>
    </div>

    <script>
        // Handle Registration
        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userData = {
                name: document.getElementById('registerName').value,
                email: document.getElementById('registerEmail').value,
                password: document.getElementById('registerPassword').value
            };

            // Store user data in localStorage as JSON
            let users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('Registration successful! Please login.');
            this.reset();
            
            // Hide registration section and show login section
            document.getElementById('registerSection').style.display = 'none';
            document.getElementById('loginSection').style.display = 'block';
        });

        // Handle Login
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const loginEmail = document.getElementById('loginEmail').value;
            const loginPassword = document.getElementById('loginPassword').value;

            // Get users from localStorage
            let users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Check if user exists
            const user = users.find(u => u.email === loginEmail && u.password === loginPassword);
            
            if (user) {
                alert('Login successful! Welcome ' + user.name);
                this.reset();
            } else {
                alert('Invalid email or password');
            }
        });
    </script>
</body>
</html>
