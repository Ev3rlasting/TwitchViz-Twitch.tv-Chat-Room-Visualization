<?php
$filename = "data.csv";
$handle = fopen($filename,"a+") or die ("Unable to open file");
$r = array(0,0,0,0,0);
for ($i=0;$i<5;$i++) {
  $n = rand(0,30);
  $r[$i]=$r[$i]+$n;
}
$line = "Selection".$_POST['selectionNumber'].",".$r[0].",".$r[1].",".$r[2].",".$r[3].",".$r[4];
echo $line;
fwrite($handle,$line."\n");
fclose($handle);
?>
