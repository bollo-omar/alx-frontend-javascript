export default function getResponseFromAPI(){
	return Promise.resolve({
		status :  200,
		body : 'working'
	});
}
