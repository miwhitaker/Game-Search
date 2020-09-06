function handleClick () {
    
    parseInt(document.getElementById('systemsmenu').value);

    var result = parseInt(document.getElementById('systemsmenu').value);
    var genre = document.getElementById('genresmenu').value;


    if (result === 100) {location.assign("xb_all.html?genre=" + genre)}
    else if (result === 200) {location.assign("ps4_all.html?genre=" + genre)}
    else if (result === 300) {location.assign("switch_all.html?genre=" + genre)};
}
    


    




