    let Name = prompt('Enter your name');
    let sic = prompt('Enter your SIC');
    let roll = prompt('Enter your roll');

    document.write(
      "<h1><u>Students Details</u></h1>",
      "<strong>Name:</strong> " + Name + "<br>",
      "<strong>SIC:</strong> " + sic + "<br>",
      "<strong>Roll:</strong> " + roll + "<br>"
    );

    let a = parseInt(prompt('Enter first Number'));
    let b = parseInt(prompt('Enter second Number'));
    document.write(
      "<h1><u>Addition, Substraction, Multiplication, Divison of Two Numbers</u></h1>",
      "<strong>Number1:</strong> " + a + "<br>",
      "<strong>Number2:</strong> " + b + "<br>",
      "<strong>Their Sum: </strong> " + (a + b) + "<br>",
      "<strong>Their Difference: </strong> " + (a - b) + "<br>",
      "<strong>Their Product: </strong> " + (a * b) + "<br>",
      "<strong>Their Quotient: </strong> " + (a / b) + "<br>"
    );

    let m = parseInt(prompt('Enter first Number'));
    let n = parseInt(prompt('Enter second Number'));
    document.write(
      "<h1><u>Swapping Demo</u></h1>",
      "<h2><u>Values Before Swapping</u></h2>",
      "<strong>Number1:</strong> " + m + "<br>",
      "<strong>Number2:</strong> " + n + "<br>"
    );
    
    m = m+n;
    n = m-n;
    m = m-n;

    document.write(
      "<h2><u>Values After Swapping</u></h2>",
      "<strong>Number1:</strong> " + m + "<br>",
      "<strong>Number2:</strong> " + n + "<br>"
    );