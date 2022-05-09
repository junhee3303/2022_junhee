function save(data) { 
    localstorate.setItem('dat2a',data);
    sessionStorage.setItem('data2',data);
}

save('bye') ;