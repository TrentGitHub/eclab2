<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $size = filter_input(INPUT_POST, 'size');

    if ($size > 0) {
        echo "<table border='1'>";
        echo "<tr><th></th>"; // The top-left cell is empty
        for ($col = 1; $col <= $size; $col++) {
            echo "<th>" . $col . "</th>";
        }
        echo "</tr>";

        // Generating table rows and data
        for ($row = 1; $row <= $size; $row++) {
            echo "<tr>";
            echo "<th>" . $row . "</th>";
            for ($col = 1; $col <= $size; $col++) {
                echo "<td>" . ($row * $col) . "</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
    } else {
        echo "Positive numbers only.";
    }
}

?>
