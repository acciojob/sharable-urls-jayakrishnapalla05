// your code here
function update(){
	const heading=document.getElementById('url');
	const name=document.getElementById("name").value;
    const year=document.getElementById("year").value;
	let url='';

	if(name === '' && year === ''){
		url="https://localhost:8080/";
	}
	else if(name! == '' && year === '')
	{
		url="https://localhost:8080/"+"?name="+name;
	}
	else if(name === '' && year!== ''){
		url="https://localhost:8080/"+"?year="+year;
	}
	else if(name!=='' && year !== ''){
		url="https://localhost:8080/"+"?name="+name+"&year="+year;
	}
	heading.textContent='url';
}