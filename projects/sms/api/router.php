<?php

$basePath = realpath(__DIR__ . '/..');

if ($basePath === false) {
    http_response_code(500);
    echo 'Application directory not found.';
    return;
}

$requestPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

// Normalize index route
if ($requestPath === '/' || $requestPath === '') {
    $target = $basePath . '/index.php';
} else {
    // Prevent directory traversal and map to PHP files under project root
    $target = realpath($basePath . $requestPath);

    if ($target === false || strncmp($target, $basePath, strlen($basePath)) !== 0) {
        http_response_code(404);
        echo 'Not Found';
        return;
    }

    // Support pretty URLs without the .php suffix
    if (!is_file($target) && substr($requestPath, -4) !== '.php') {
        $candidate = $basePath . $requestPath . '.php';
        if (is_file($candidate)) {
            $target = realpath($candidate);
        }
    }
}

if ($target && is_file($target)) {
    require $target;
    return;
}

http_response_code(404);
echo 'Not Found';

