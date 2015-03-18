var myPlaylist = ["1. Con thuogn rau dang moc sau he",
                    "2. Kiep Ve Sau",
                    "3. Nhat Ky",
                    "4. Dem thanh ca buon"];

//While loop
document.writeln("1 While loop =================></br>");
var i = 0;
while(i < myPlaylist.length)
{
    document.writeln("</br>" + myPlaylist[i]);
    i++;
}

document.writeln("</br></br>2 Do While loop =================></br>");
do {
    document.write("Print at least once</br>");
}
while(false);

document.writeln("</br>3 For loop =================></br>");
for (var i = 0; i < myPlaylist.length; i++)
{
    document.write(myPlaylist[i]+"</br>");
}

document.writeln("</br>4 Backward For loop =================></br>");
for (var i = myPlaylist.length-1; i >= 0; i--)
{
    document.write(myPlaylist[i]+"</br>");
}
document.writeln("</br>5 For each loop =================></br>");
for (i in myPlaylist)
{
    document.write(myPlaylist[i] + "</br>");
}