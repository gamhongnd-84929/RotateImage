
var _timer; 
var _arrImg1 = ["img/beach2.jpg", "img/beach3.jpg","img/beach1.jpg"];
var _arrImg2 = ["img/beach3.jpg", "img/beach1.jpg","img/beach2.jpg"];
var _arrImg3 = ["img/beach1.jpg", "img/beach2.jpg","img/beach3.jpg"];
var _index = 0

function change() {
    var _timerDate = new Date();
    var _second = 0;
    var _second = document.getElementById("second").value;
    _timerDate.setSeconds(_timerDate.getSeconds()+_second);

    var _image1 = document.getElementById("img1");
    var _image2 = document.getElementById("img2");
    var _image3 = document.getElementById("img3");

    var _millisecond = _second*1000;

    clearInterval(_timer);

    _timer = setInterval(function() {
        _image1.src = _arrImg1[_index];
        _image2.src = _arrImg2[_index];
        _image3.src = _arrImg3[_index];

        _index++;
        

        if(_index==3)
        {
            _index = 0;
        }
    }, _millisecond)

    
}