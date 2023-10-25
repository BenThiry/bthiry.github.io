<?php
$folderList = '';
$directories = glob('*', GLOB_ONLYDIR);

foreach ($directories as $folder) {
    if ($folder !== 'pdfs') { // Exclude specific folder
        $folderList .= "<li><a href='$folder/index.html'>$folder</a></li>";
    }
}

echo $folderList;
?>
