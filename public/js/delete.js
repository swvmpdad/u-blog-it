async function deletePostHandler(event) {
    event.preventDefault();

    id = event.target.dataset;

    if (id) {
        console.log(id);
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

document.querySelector('.posts').addEventListener('delete', deletePostHandler);