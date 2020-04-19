<style>
    <?php include 'css/styles.css'; ?>
</style>

<?php 

// Open the file
if (($file = fopen("sums.csv", "r")) !== FALSE) {

    // Set up the table and header markup
    echo '<table>';
    echo '<thead>';
    echo '<tr>';
    echo '<th>Sum</th>';
    echo '<th>IP Address</th>';
    echo '<th>Date</th>';
    echo '<th>Browser</th>';
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';

    while (($row = fgetcsv($file, 1000, ",")) !== FALSE) {	
        // Print one table row per CSV entry
        echo '<tr>';	
        echo '<td>' . $row['0'] . '</td>';
        echo '<td>' . $row['1'] . '</td>';
        echo '<td>' . $row['2'] . '</td>';
        echo '<td>' . $row['3'] . '</td>';
        echo '</tr>';
    }

    echo '</tbody>';
    echo '</table>';

  fclose($file);
}

?>