var nowDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(nowDate);

// each time block is color coded to indicate if time if past(gray), present(red), and future(green)
function checkTime() {
    // 1. assign time to container 
    
    // 2. use moment to get current time 
    var nowTime = moment().format('HH');

    // 3. compare time
    $('.task').each(function() {
        var colorCode = this.attributes[2].nodeValue;

        // if hour < present hour then gray 
        if (colorCode < nowTime) {
            $(".task[value = "+colorCode+"]").css({'background-color':'gray', 'color': 'white'});
        }

        // if hour = present hour then red
        else if (colorCode === nowTime) {
            $(".task[value = "+colorCode+"]").css({'background-color':'#ff6961', 'color': 'white'});
        }
        // if hour > present then green 
        else {
            $(".task[value = "+colorCode+"]").css({'background-color':'#77dd77', 'color': 'white'});
        }
    });
};

checkTime();

$(document).ready(function () {

    // page loads, all saved text inputs are shown
    $('.taskField').each(function() {
        var hour = $(this).parent().attr('value');

        var inputField = localStorage.getItem(hour);
        $(".taskField[name="+hour+"]").val(inputField);
    });

    $('.saveBtn').click(function () {
        //this == button
        var buttonVal = $(this).attr('name');

        // val buttonvval = this.id
        var fieldInput = $(".taskField[name ="+buttonVal+"]").val();

        // store inputs
        localStorage.setItem(buttonVal, fieldInput);
        
    });
});
