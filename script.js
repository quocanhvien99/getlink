function get(event) {
	event.preventDefault();
	const btn = document.getElementsByClassName('get')[0];
	const loading = document.getElementsByClassName('lds-facebook')[0];
	const result = document.getElementsByClassName('result')[0];
	const file_info = document.getElementsByClassName('file-info')[0];
	const download = document.getElementById('linkvip');

	btn.classList.toggle('hide');
	loading.classList.toggle('hide');

	const url = document.getElementById('url').value;
	let id;
	let index = url.indexOf('file') + 5;
	if (index == 4) return window.alert('Đường dẫn không đúng !');
	let index1 = url.indexOf('?', index);
	let index2 = url.indexOf('/', index);
	if (index1 != -1 || index2 != -1) {
		id = url.slice(url.indexOf('file') + 5, index1);
	} else {
		id = url.slice(url.indexOf('file') + 5);
	}

	axios.get(`https://api-quocanh.herokuapp.com/fshare/${id}`).then((res) => {
		const linkvip = res.data.location;

		btn.classList.toggle('hide');
		loading.classList.toggle('hide');
		file_info.innerHTML = res.data.filename;
		result.classList.remove('hide');
		download.setAttribute('href', linkvip);
	});
}
