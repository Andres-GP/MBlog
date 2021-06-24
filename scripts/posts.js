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


//Select and preview image
var files = [];

document.getElementById('selectPostMediaInput').onchange = function (e){
        files = e.target.files;
        reader = new FileReader();
        reader.onload = function(){
            var previewField = document.getElementById('prePublishPostImage')
            previewField.src = reader.result;
        }
        reader.readAsDataURL(files[0]);
    }


//Submit image & generate image URL
var submitButton = document.getElementById('selectPostMediaInput');

submitButton.addEventListener('change', function submitImg(e){
    var file = e.target.files[0];
    var storageRef = firebase.storage().ref('PostsImgs/' + file.name);
    var task = storageRef.put(file);
    console.log('media sent');

    task.snapshot.ref.getDownloadURL()
     .then(function imgURL(url) {
        console.log(url)
        sessionStorage.setItem('newPostImg', url)
    })
})






//3.Mandar la url producida en (Submit image & generate image URL) al src de la imagen del innerHTML