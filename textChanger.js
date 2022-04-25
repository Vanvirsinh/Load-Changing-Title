
function textLoader(arr, time) {
    
    var textChangerElmt = document.getElementById('textChanger');
    
    var j = 0;

    function wordLoader(word, timing) {

        var i = 0;
        var myInterval = setInterval(function () {
            var wordArray = word.split('');
            if (i < wordArray.length) {
                textChangerElmt.innerText += wordArray[i];
                i++;
            } else {
                i = 0;
                textChangerElmt.innerText = '';
                clearInterval(myInterval);
                wordLoader(arr[j], timing);
            }
        }, timing);
        if (j < arr.length - 1) {
            j++;
        } else {
            j = 0;
        }
    }

    wordLoader(arr[0], time);

}
