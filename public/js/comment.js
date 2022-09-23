async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('texarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')
    
    console.log(comment_text, post_id);
    // const response = await fetch('/api/comments', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         comment_text,
    //     })
    // })
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);