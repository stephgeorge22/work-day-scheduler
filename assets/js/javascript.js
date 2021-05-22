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
            $(".task[value = "+colorCode+"]").css({'background-color':'gray'});
        }

        // if hour = present hour then red
        else if (colorCode === nowTime) {
            $(".task[value = "+colorCode+"]").css({'background-color':'red'});
        }
        // if hour > present then green 
        else {
            $(".task[value = "+colorCode+"]").css({'background-color':'green'});
        }
    });
};

checkTime();

// create form field 

// create save button linked to form field 

// create save function 
    //when save button is clicked, input is stored in local storage
$(document).ready(function () {
        
    $('#saveBtn').click(function () {
        // val inputVal = get value from input taskfield
        $('#taskField').each(function() {
            var inputVal = $(this).val();
        });

        //local storage
        localStorage.setItem("input", inputVal);

        //display local storage
        var inputField = localStorage.getItem("input");
        
        document.getElementById("taskField").innerHTML = inputField;
    });
});