// Description: Auto load images, placing the correct number of photos in each column
function loadImages(name, num)
{
	var curNum = 1;
	for(var numCol = 0; numCol < 3; numCol++)
	{
		var colDiv = document.createElement("div");
		colDiv.className =  "col";
	
		var responsiveDiv = document.createElement("div");
		responsiveDiv.className = "responsive";
		
		colDiv.appendChild(responsiveDiv);
		
		for (var i = 1; i <= num/3; i++)
		{	
			var galleryDiv = document.createElement("div");
			galleryDiv.className = "gallery";
			responsiveDiv.appendChild(galleryDiv);
			var image1 = new Image();
			var aLink = document.createElement("a");
		
			aLink.href = "Photos/Gallery/" + name + "/" + name + " (" + curNum + ").jpg";
			image1.src = "Photos/Gallery/" + name + "/" + name + " (" + curNum + ").jpg";

			galleryDiv.appendChild(aLink);
			aLink.appendChild(image1);
			
			curNum++;
		}
		document.body.appendChild(colDiv);
	}
}





// Pause the looping background video using button
/*function pause()
{
	if (document.getElementById("myVideo").paused) 
	{
		document.getElementById("myVideo").play();
		document.getElementById("pauseBtn").innerHTML = "Pause";
	} 
	else {
		document.getElementById("myVideo").pause();
		document.getElementById("pauseBtn").innerHTML = "Play";
	}
	
	if (document.getElementById("video2").paused) 
	{
		document.getElementById("video2").play();
		document.getElementById("pauseBtn").innerHTML = "Pause";
	} 
	else {
		document.getElementById("video2").pause();
		document.getElementById("pauseBtn").innerHTML = "Play";
	}
}
*/



