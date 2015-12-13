<?php
if($_POST["Type"] == "Viewers")
{
$filename = "viewers.txt";
$handle = fopen($filename,"a+") or die ("Unable to open file");
$data = json_encode(array("Timestamp"=>$_POST["Timestamp"],"Viewers"=>$_POST["Viewers"]));
fwrite($handle,$data."\n");
}
else if($_POST["Type"] == "Message")
{
  $filename = "transcript.txt";
  $handle = fopen($filename,"a+") or die ("Unable to open file");
  $data = json_encode(array("Timestamp"=>$_POST["Timestamp"],"User"=>$_POST["User"],"Message"=>$_POST["Message"]));
  fwrite($handle,$data."\n");
}
else if($_POST["Type"] == "Frequency")
{
  $filename = "frequency.txt";
  $handle = fopen($filename,"a+") or die ("Unable to open file");
  $data = json_encode(array("Timestamp"=>$_POST["Timestamp"],"Frequency"=>$_POST["Frequency"]));
  fwrite($handle,$data."\n");
}
else {
  die("I am done..... Nothing happened");
}
?>
