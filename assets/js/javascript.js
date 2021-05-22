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



$(document).ready(function () {

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

        localStorage.setItem(buttonVal, fieldInput)


        // val buttonval
        // $(fieldval[val=buttonval].val
        //save
        
    });
});
//page loads, all saved text inputs are shown
// all entered text inputs are set when save is clicked 