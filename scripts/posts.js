const postGeneratorForm = document.querySelector('#postGeneratorForm');

const postsGroup = document.querySelector('#postGroup');

const savepostGeneratorFormText = (postText) => 
    db.collection('posts').doc().set({
      postText,
    })

const getPost = () => db.collection('posts').get();

const onGetPosts = (callback) => db.collection('posts').onSnapshot(callback);

window.addEventListener('DOMContentLoaded', async (e) => {
    //const querySnapshot = await getPost();
    onGetPosts((querySnapshot) => {
        postsGroup.innerHTML = '';
        querySnapshot.forEach(doc => {
            postsGroup.innerHTML += `
            <div class="post">
                <div class="post__textContainer">
                  <p class="post__textContainer__text">${doc.data().postText}</p>
                </div>
                <div class="post__imgContainer">
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
