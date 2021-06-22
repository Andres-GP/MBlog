const postGeneratorForm = document.querySelector('#postGeneratorForm');

const postsGroup = document.querySelector('#postGroup');

const savepostGeneratorFormText = (postText) => 
    db.collection('posts').doc().set({
      postText,
    })

const getPost = () => db.collection('posts').get();

const onGetPosts = (callback) => db.collection('posts').onSnapshot(callback);

window.addEventListener('DOMContentLoaded', async (e) => {
    onGetPosts((querySnapshot) => {
        postsGroup.innerHTML = '';
        querySnapshot.forEach(doc => {
            postsGroup.innerHTML += `
            <div class="postContainer">
               <div class="postMain">
                   <div class="post__textContainer">
                     <p class="post__textContainer__text">${doc.data().postText}</p>
                   </div>
                   <div class="post__imgContainer">
                      <img id="postImg" class="post__imgContainer__img">
                   </div>
               </div> 
            </div>
            `;
        })
    })
})

postGeneratorForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    //Post text
    const postText = postGeneratorForm['postGeneratorText'].value;
    //Save Data (Text)
    await savepostGeneratorFormText(postText);

    await getPost();
    //Clear Form
    postGeneratorForm.reset();
    //Modal Close
    postGenerator.classList.remove('blogMain__postBackground__postGenerator-active');

    console.log('data sent')
})

/*
//Upload and publish image
var ImgName, ImgUrl;
var files = [];

document.getElementById('selectPostMedia').onclick = function (e) {
    var input = document.createElement('input');
    input.type='file';

    input.onchange = e => {
        files = e.target.files;
        reader = new FileReader();
        reader.onload = function(){
            document.getElementById('prePublishPostImage').src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }
    input.click();
}

document.getElementById('submitAndPublishButton').onclick = function(){
    ImgName = document.getElementById('postGeneratorText').value;
    var uploadMedia = firebase.storage().ref('Images/'+ImgName+".png").put(files[0]);

    uploadMedia.on('state_changed',
    function uploadData (){
        uploadMedia.snapshot.ref.getDownloadURL().then(function(url){
            ImgUrl = url;

        firebase.database().ref('Pictures/'+ImgName).set({
            Name: ImgName,
            Link: ImgUrl
        });
          alert('image added succesfully')
         }
       );
    });   
}

*/

async function uploadAndPublishFile() {
    inputFile = document.getElementById("selectPostMedia");
    if (inputFile.files.length == 0) {
        alert("Please select an image or video");
        return
    } else {
        let file = inputFile.files[0];
        let storageRef = firebase.storage().ref(file.name);
        await storageRef.put(file);
        console.log("Download done");
    }
}



