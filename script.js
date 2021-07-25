function get(event) {
	event.preventDefault();
	const btn = document.getElementsByClassName('get')[0];
	const loading = document.getElementsByClassName('lds-facebook')[0];

	btn.classList.toggle('hide');
	loading.classList.toggle('hide');

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
		btn.classList.toggle('hide');
		loading.classList.toggle('hide');
		window.location.href = res.data.location;
	});
}
