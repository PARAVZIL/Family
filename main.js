var images = ["C:/Users/user/Downloads/ADVC78template-main/Photos/102903968-cute-father-cartoon-vector-illustration-graphic-design.webp","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Grandfather", "Dad", "Brother", "Sister", "Mom"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
