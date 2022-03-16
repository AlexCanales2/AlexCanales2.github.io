var likeCount = [0, 0, 0, 0, 0, 0];
function likePhoto(num){
     likeCount[num]++;
   console.log(likeCount);
   document.getElementById("likeCount" + num).innerHTML = likeCount[num];
}

var user = {
  "name": 'Alex',
  "name_last" : 'Canales',
  "followers" : ["Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham","Jacob Pham"],
  "profile_pic": "https://64.media.tumblr.com/72877304ec2235e1a3cbffe41c577c5d/910e23050426630f-dd/s1280x1920/1bb980ee29b44f385b9b40e39ed5966edfad202e.jpg",

}

setTimeout(function(){ document.getElementById("name").innerHTML = user.name;});
setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;});
setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;});
setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);});