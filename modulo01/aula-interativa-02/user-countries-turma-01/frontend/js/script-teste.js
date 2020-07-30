const dados = [];
dados = fetch('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo').then(res => {
    res.json().then(data => {
        console.log(data);
    });
});

console.log(dados);