// import twilio from 'twilio';


function calculateAmount() {
    const destination = document.getElementById("destination").value;
    let amount;
    
    switch (destination) {
      case "destination1":
        amount = 5;
        break;
      case "destination2":
        amount = 7;
        break;
      case "destination3":
        amount = 10;
        break;
      case "destination4":
        amount = 13;
        break;
      case "destination5":
        amount = 15;
        break;
      default:
        amount = 0;
    }
    
    document.getElementById("amount").value = amount;
  }


function redirectToPage() {
  console.log("ok");
  window.location.href = "payment.html";
}

function redirectToPage1() {
    window.location.href = "otp.html";
  }

  function redirectToPage2() {
    window.location.href = "payment_success.html";
  }
  function generateReferenceId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    const referenceId = `${timestamp}-${random}`;
    return referenceId;
  }

function sendOTP(){
  var inputValue = document.getElementById("otp").value;

  var expectedValue1 = "58693";
  var expectedValue2 = "87152";
  var expectedValue3 = "12364";
  var expectedValue4 = "69875";
  var expectedValue5 = "61214";

  if(inputValue === expectedValue1 || inputValue === expectedValue2 || inputValue === expectedValue3 || inputValue === expectedValue4 || inputValue === expectedValue5){  
  // Display success message4
  // console.log(inputValue);
  // if(inputValue === expectedValue1 || expectedValue2 || expectedValue3 || expectedValue4 || expectedValue5 ){
    // window.location.href("payment_success.html");
    
    console.log(inputValue, expectedValue1);
    // alert(expectedValue1)
    // alert(inputValue)
    // document.getElementById("result").innerHTML = "Success";
    console.log("Success!!");
    window.location.href = "payment_success.html";
    alert("The Location details are sent to your phone number!")
  }
  else {
    // Display error message
    // document.getElementById("result").innerHTML = "Error! The entered value does not match the expected value.";
    alert("Error! The entered value does not match the expected value.");
}
}





// function generateOtp(){
//     // Generate a random 6-digit OTP
//   const OTP = Math.floor(Math.random() * 900000) + 100000;

//   // Replace the placeholders with your own SMS API credentials and phone number
//   const accountSid = 'AC842e14dfee7bb86109608392f7de6bde';
//   const authToken = '974541374566945f1e3bb510f7808e06';
//   const client = (accountSid, authToken);
//   const phoneNumber = '+15077087573';

//   // Send the OTP to the phone number
//   client.messages
//     .create({
//       body: `Your OTP is: ${OTP}`,
//       from: '+15077087573', // Replace with your Twilio phone number
//       to: phoneNumber
//     })
//     .then(message => console.log(message.sid)); // For testing purposes, log the SMS SID to the console
// }
// Your Twilio account SID, auth token, and Twilio phone number      

  // Your Twilio phone number
  // Function to send OTP via server-side endpoint
// async function sendOTP(toNumber, otp) {
//   try {
//     const response = await fetch('/send-otp', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ toNumber, otp })
//     });
//     if (response.ok) {
//       console.log(`OTP sent successfully to ${toNumber}.`);
//     } else {
//       console.error(`Failed to send OTP: ${response.status} ${response.statusText}`);
//     }
//   } catch (error) {
//     console.error('Error sending OTP:', error);
//   }
// }

// // Generate a random OTP
// const generateOTP = () => {
//   const digits = '0123456789';
//   let otp = '';
//   for (let i = 0; i < 6; i++) {
//     otp += digits[Math.floor(Math.random() * digits.length)];
//   }
//   return otp;
//   console.log(otp);

// };

// Call the sendOTP function when a button is clicked

  // // Add event listener for sendOTPBtn button click
  // document.getElementById('sendOTPBtn').addEventListener('click', () => {
  //   // Your code to send the OTP here
  //   const toNumber = '+919361255475'; // Replace with the recipient's phone number
  //   const otp = generateOTP(); // Generate a random OTP
  //   sendOTP(toNumber, otp); // Send OTP via server-side proxy
  // });
  

