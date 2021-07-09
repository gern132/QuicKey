class dataBase {
    static create(profile) {
        return fetch('https://quickey-project-app-default-rtdb.europe-west1.firebasedatabase.app/profile.json', {
            method: 'POST',
            body: JSON.stringify(profile),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response) 
        })
    }
}
export default '*'