function get(event) {
	event.preventDefault();
	const url = document.getElementById('url').value;
	let id;
	let index = url.indexOf('file') + 5;
	let index1 = url.indexOf('?', index);
	let index2 = url.indexOf('/', index);
	if (index1 != -1 || index2 != -1) {
		id = url.slice(url.indexOf('file') + 5, index1);
	} else {
		id = url.slice(url.indexOf('file') + 5);
	}

	axios.get(`https://api-quocanh.herokuapp.com/fshare/${id}`).then((res) => {
		console.log(res.data);
		window.location.href = res.data.location;
	});
}
