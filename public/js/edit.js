async function postFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('textarea[name="post-title"]').value.trim();

    const post_content = document.querySelector('textarea[name="post-body"]').value.trim();

    const id = document.getElementById('post-id').innerHTML;
    
    if (title && post_content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                post_content
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', postFormHandler);