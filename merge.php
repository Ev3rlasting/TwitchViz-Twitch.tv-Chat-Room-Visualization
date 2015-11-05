<?php
$filename = "viewers.txt";
$handle = fopen($filename,"r") or die ("Unable to open file");
$json=array();
while(!feof($handle))
{
  $line = fgets($handle);
  $raw = json_decode($line,true);
  array_push($json,$raw);
}
fclose($handle);
array_pop($json);
$json = json_encode($json);
echo $json;
$filename="viewers.json";
$handle = fopen($filename,"w") or die ("Unable to open file");
fwrite($handle,$json);
fclose($handle);


$filename = "transcript.txt";
$handle = fopen($filename,"r") or die ("Unable to open file");
$json=array();
while(!feof($handle))
{
  $line = fgets($handle);
  $raw = json_decode($line,true);
  array_push($json,$raw);
}
fclose($handle);
array_pop($json);
$json = json_encode($json);
echo $json;
$filename="transcript.json";
$handle = fopen($filename,"w") or die ("Unable to open file");
fwrite($handle,$json);
fclose($handle);

$filename = "frequency.txt";
$handle = fopen($filename,"r") or die ("Unable to open file");
$json=array();
while(!feof($handle))
{
  $line = fgets($handle);
  $raw = json_decode($line,true);
  array_push($json,$raw);
}
fclose($handle);
array_pop($json);
$json = json_encode($json);
echo $json;
$filename="frequency.json";
$handle = fopen($filename,"w") or die ("Unable to open file");
fwrite($handle,$json);
fclose($handle);
?>
