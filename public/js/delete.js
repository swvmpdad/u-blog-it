function handlePostDelete(event) {

    console.log('Click');

    const id = this.querySelector('.hidden-id').innerHTML;

    if (id) {
        // const response = await fetch(`/api/posts/` + id, {
        // method: 'DELETE',
        // headers: {
        //     'Content-Type': 'application/json'
        // }
        // });

        // if (response.ok) {
        //     document.location.reload();
        // } else {
        //     alert(response.statusText);
        // }
        console.log(id);
    }
}

document.querySelector('.delete').addEventListener('delete', handlePostDelete);