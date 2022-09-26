async function deletePostHandler(event) {
    event.preventDefault();

    const id = querySelector('.hidden-id').innerHTML;

    if (id) {
        const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    } else {
        console.log('No id');
    }
}

document.querySelector('.post').addEventListener('delete', deletePostHandler);