document.getElementById('calorie-form').onsubmit = function(event) {
    event.preventDefault();

    var age = parseInt(document.getElementById('age').value);
    var weight = parseInt(document.getElementById('weight').value);
    var height = parseInt(document.getElementById('height').value);
    var gender = document.getElementById('gender').value;
    var activityLevel = document.getElementById('activity').value;

    var bmr, calories;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    switch(activityLevel) {
        case 'sedentary':
            calories = bmr * 1.2;
            break;
        case 'light':
            calories = bmr * 1.375;
            break;
        case 'moderate':
            calories = bmr * 1.55;
            break;
        case 'active':
            calories = bmr * 1.725;
            break;
        case 'veryActive':
            calories = bmr * 1.9;
            break;
        default:
            calories = bmr;
    }

    document.getElementById('result').innerHTML = 'Your daily calorie needs: ' + calories.toFixed(2) + ' calories';
};
