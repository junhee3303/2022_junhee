function save(data) { 
    localstorate.setItem('data',data);
    sessionStorage('data',data);
}

export { save };