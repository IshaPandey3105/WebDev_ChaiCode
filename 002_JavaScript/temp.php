<!DOCTYPE html>
<html>
<head>
    <title>Welcome Form</title>
</head>
<body>

    <h2>Enter Your Name</h2>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
        <label>Name:</label>
        <input type="text" name="name" required>
        <input type="submit" value="Submit">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = htmlspecialchars($_POST["name"]);
        echo "<h3>Welcome, $name! Glad to see you here.</h3>";
    }
    ?>

</body>
</html>
