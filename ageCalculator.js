function calculateAge() {
    let dob = document.getElementById('dob').value;
    let result = document.getElementById('result');

    if (!dob) {
        result.innerHTML = "<span class='error'>Please enter your date of birth</span>";
        return;
    }

    let dobDate = new Date(dob);
    let today = new Date();
    let ageYears = today.getFullYear() - dobDate.getFullYear();
    let ageMonths = today.getMonth() - dobDate.getMonth(); 
    let ageDays = today.getDate() - dobDate.getDate();
    
    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    
    result.innerHTML = `Your age is: <b>${ageYears} years, ${ageMonths} months, and ${ageDays} days</b>`;
}


