<?php
// Erlaubt den Zugriff (wichtig für lokale Tests)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$file = 'scores.json';

// 1. WENN EIN NEUER SCORE GEPOSTET WIRD (SPEICHERN)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $newData = json_decode($input, true);

    if ($newData) {
        // Bestehende Scores laden, falls die Datei schon existiert
        $currentData = [];
        if (file_exists($file)) {
            $currentData = json_decode(file_get_contents($file), true) ?: [];
        }

        // Prüfen, ob der Spieler schon existiert
        $name = trim($newData['name']);
        $score = intval($newData['score']);
        $found = false;

        foreach ($currentData as &$user) {
            if (strcasecmp($user['name'], $name) === 0) {
                if ($score > $user['score']) {
                    $user['score'] = $score; // Nur erhöhen, wenn es besser ist
                }
                $found = true;
                break;
            }
        }

        if (!$found) {
            $currentData[] = ['name' => $name, 'score' => $score];
        }

        // Nach Highscore sortieren
        usort($currentData, function($a, $b) {
            return $b['score'] - $a['score'];
        });

        // Top 10 behalten und abspeichern
        $currentData = array_slice($currentData, 0, 10);
        file_put_contents($file, json_encode($currentData, JSON_PRETTY_PRINT));
    }
}

// 2. HIGHSCORES ZURÜCKGEBEN (LESEN)
if (file_exists($file)) {
    echo file_get_contents($file);
} else {
    echo json_encode([]);
}
?>