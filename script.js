function isPositiveNumeric(value) {
       return /^\d+$/.test(value);
}

function compute()
{
    // Get the inputs
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate_box").value;
    years = document.getElementById("years").value;

    // Convert to floats to do math and check if inputs are correct
    principal = parseFloat(principal);
    rate = parseFloat(rate);
    years = parseFloat(years);

    // Check if everything is filled in
    if(!isPositiveNumeric(principal) ||
       !isPositiveNumeric(rate) ||
       !isPositiveNumeric(years)){
         console.log('Incorrect inputs.');
         return;
    }

    // Compute the future value of the interest
    growth = 1 + (rate / 100);
    multiplier = Math.pow(growth, years);
    fv = principal * multiplier;

    // Fill in the results section
    document.getElementById("interest_result").hidden = false;
    document.getElementById("result_principal").innerHTML = "$" + principal;
    document.getElementById("result_interest").innerHTML = rate.toFixed(1) + "%";
    document.getElementById("result_fv").innerHTML = "$" + fv.toFixed(1);
    present_year = new Date().getFullYear();
    document.getElementById("result_year").innerHTML = present_year + years;

}

function updateRatePct(called_by){
  // Get input fields as objects
  slider_object = document.getElementById("rate_slider");
  box_object = document.getElementById("rate_box");

  // Get the rate from the input which called it
  if (called_by == "slider"){
    scale = slider_object.value;
    rate = scale / 10;
    // Scale down the rate to a one digit decimal.
    // Default slider value ranges from 0 100.
  } else if (called_by == "box"){
    rate = box_object.value;
    if(!isPositiveNumeric(rate)){
      rate = 0;
    }
  } else {
    rate = 0;
  }

  // Set the rate to each input
  rate = parseFloat(rate);  // Make sure rate is a float.
  slider_object.value = rate * 10;
  // Note: the input slider automatically adjusts when box input is >100.
  box_object.value = rate.toFixed(1);
  // toFixed() formats a number to a fixed-point decimal notation.
}
