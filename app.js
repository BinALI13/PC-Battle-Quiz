/*-------------------------------- Constants --------------------------------*/
const questions = [
  {
    question: "Your GPU gets very hot while gaming. What should you check first?",
    choices: [
      "Increase GPU voltage",
      "Check the fans and case airflow",
      "Increase RAM speed",
      "Change the SSD"
    ],
    correctAnswer: "Check the fans and case airflow"
  },

  {
    question: "What is the main reason for undervolting a GPU?",
    choices: [
      "Get more VRAM",
      "Reduce heat and power usage",
      "Increase storage",
      "Increase monitor resolution"
    ],
    correctAnswer: "Reduce heat and power usage"
  },

  {
    question: "You undervolt your GPU and your games start crashing. What should you do?",
    choices: [
      "Lower the voltage more",
      "Increase the voltage a little",
      "Remove RAM",
      "Change the monitor"
    ],
    correctAnswer: "Increase the voltage a little"
  },

  {
    question: "Which upgrade normally gives the biggest FPS improvement in GPU-heavy games?",
    choices: [
      "Faster SSD",
      "Better GPU",
      "RGB fans",
      "Better keyboard"
    ],
    correctAnswer: "Better GPU"
  },

  {
    question: "Your CPU is at 100% usage while your GPU is only around 50%. What is probably happening?",
    choices: [
      "CPU bottleneck",
      "GPU overheating",
      "SSD problem",
      "Monitor problem"
    ],
    correctAnswer: "CPU bottleneck"
  },

  {
    question: "What happens when you increase the GPU power limit?",
    choices: [
      "The GPU is allowed to use more power",
      "The GPU gets more VRAM",
      "Your CPU gets faster",
      "Your RAM capacity increases"
    ],
    correctAnswer: "The GPU is allowed to use more power"
  },

  {
    question: "You overclock your GPU and start seeing strange pixels on the screen. What should you do?",
    choices: [
      "Increase the overclock",
      "Reduce the GPU or memory overclock",
      "Increase screen brightness",
      "Overclock the CPU"
    ],
    correctAnswer: "Reduce the GPU or memory overclock"
  },

  {
    question: "Which GPU temperature shows the hottest measured area of the GPU chip?",
    choices: [
      "Room temperature",
      "Hotspot or Junction temperature",
      "SSD temperature",
      "Case temperature"
    ],
    correctAnswer: "Hotspot or Junction temperature"
  },

  {
    question: "Your PC shuts down when the GPU is under heavy load. Which component should you check?",
    choices: [
      "Mouse",
      "PSU",
      "Keyboard",
      "Speakers"
    ],
    correctAnswer: "PSU"
  },

  {
    question: "Which RAM setup is usually better for gaming?",
    choices: [
      "16GB single-channel",
      "16GB dual-channel",
      "4GB single-channel",
      "They are always exactly the same"
    ],
    correctAnswer: "16GB dual-channel"
  },

  {
    question: "Your game takes a long time to load from an HDD. What upgrade would help?",
    choices: [
      "SSD",
      "More RGB",
      "Bigger CPU cooler",
      "New mouse"
    ],
    correctAnswer: "SSD"
  },

  {
    question: "Your GPU core temperature is normal but the hotspot is much higher. What could be the problem?",
    choices: [
      "Poor cooler contact or thermal interface issue",
      "Slow internet",
      "Low SSD space",
      "Keyboard driver"
    ],
    correctAnswer: "Poor cooler contact or thermal interface issue"
  },

  {
    question: "Which GPU is generally the most powerful for gaming?",
    choices: [
      "RTX 5090",
      "RTX 4060",
      "GTX 1650",
      "GTX 1050 Ti"
    ],
    correctAnswer: "RTX 5090"
  },

  {
    question: "Your PC has 8GB RAM and becomes slow when gaming with Discord and Chrome open. What should you upgrade?",
    choices: [
      "RAM to 16GB or more",
      "Mouse",
      "Monitor cable",
      "RGB lights"
    ],
    correctAnswer: "RAM to 16GB or more"
  },

  {
    question: "You want lower GPU temperatures without losing much performance. What should you try?",
    choices: [
      "Increase voltage",
      "Undervolt the GPU",
      "Disable the fans",
      "Max out the power limit"
    ],
    correctAnswer: "Undervolt the GPU"
  },

  {
    question: "Your GPU is running at 100% usage while gaming. Is that always bad?",
    choices: [
      "Yes, always",
      "No, it can be normal",
      "It means the GPU is broken",
      "It means the SSD is full"
    ],
    correctAnswer: "No, it can be normal"
  },

  {
    question: "Which change will normally increase GPU temperature?",
    choices: [
      "Lower voltage",
      "Higher voltage and power",
      "Lower FPS",
      "Lower graphics settings"
    ],
    correctAnswer: "Higher voltage and power"
  },

  {
    question: "Your GPU driver keeps crashing after an overclock. What should you try first?",
    choices: [
      "Increase the overclock",
      "Return the GPU to stock settings",
      "Reinstall Windows immediately",
      "Overclock the RAM"
    ],
    correctAnswer: "Return the GPU to stock settings"
  },

  {
    question: "Which PC would normally perform better in games?",
    choices: [
      "Ryzen 7 5700X with RTX 4070",
      "Ryzen 7 5700X with GTX 1050 Ti",
      "Ryzen 7 5700X without a dedicated GPU",
      "All perform the same"
    ],
    correctAnswer: "Ryzen 7 5700X with RTX 4070"
  },

  {
    question: "What can happen when a game needs more VRAM than your GPU has available?",
    choices: [
      "Stuttering or lower performance",
      "More FPS",
      "Faster internet",
      "More CPU cores"
    ],
    correctAnswer: "Stuttering or lower performance"
  },

  {
    question: "What does GPU core clock represent?",
    choices: [
      "How fast the GPU core operates",
      "Amount of storage",
      "PSU wattage",
      "Monitor refresh rate"
    ],
    correctAnswer: "How fast the GPU core operates"
  },

  {
    question: "Which program is commonly used for GPU monitoring and tuning?",
    choices: [
      "MSI Afterburner",
      "Microsoft Word",
      "Paint",
      "Calculator"
    ],
    correctAnswer: "MSI Afterburner"
  },

  {
    question: "Your game runs at good FPS but sometimes freezes for a very short moment. What is this called?",
    choices: [
      "Stuttering",
      "Overvolting",
      "Rendering",
      "Dual-channel"
    ],
    correctAnswer: "Stuttering"
  },

  {
    question: "What is thermal throttling?",
    choices: [
      "Hardware lowers its speed because it is too hot",
      "The GPU adds more VRAM",
      "The CPU downloads drivers",
      "The fans permanently stop"
    ],
    correctAnswer: "Hardware lowers its speed because it is too hot"
  },

  {
    question: "Which case fan setup is normally better?",
    choices: [
      "Proper intake and exhaust airflow",
      "No fans",
      "Blocked fans",
      "All fans turned off"
    ],
    correctAnswer: "Proper intake and exhaust airflow"
  },

  {
    question: "What can increasing GPU memory clock improve?",
    choices: [
      "Memory bandwidth and performance",
      "Physical VRAM capacity",
      "CPU core count",
      "SSD capacity"
    ],
    correctAnswer: "Memory bandwidth and performance"
  },

  {
    question: "What can happen if you overclock VRAM too much?",
    choices: [
      "Artifacts or crashes",
      "More storage",
      "The CPU gets more cores",
      "The monitor becomes larger"
    ],
    correctAnswer: "Artifacts or crashes"
  },

  {
    question: "Which storage is normally better for loading Windows and games?",
    choices: [
      "NVMe SSD",
      "HDD",
      "DVD",
      "USB 2.0 drive"
    ],
    correctAnswer: "NVMe SSD"
  },

  {
    question: "Your CPU gets very hot immediately under load. What should you check first?",
    choices: [
      "CPU cooler installation",
      "GPU VRAM",
      "Keyboard",
      "Monitor"
    ],
    correctAnswer: "CPU cooler installation"
  },

  {
    question: "What is thermal paste used for?",
    choices: [
      "Help transfer heat from the CPU to the cooler",
      "Increase RAM speed",
      "Increase storage",
      "Increase CPU cores"
    ],
    correctAnswer: "Help transfer heat from the CPU to the cooler"
  },

  {
    question: "Which is generally better for heavy multitasking?",
    choices: [
      "32GB RAM",
      "8GB RAM",
      "4GB RAM",
      "2GB RAM"
    ],
    correctAnswer: "32GB RAM"
  },

  {
    question: "Your GPU is hot because your PC case has poor airflow. What should you do?",
    choices: [
      "Improve intake and exhaust airflow",
      "Increase GPU voltage",
      "Disable the fans",
      "Remove the CPU cooler"
    ],
    correctAnswer: "Improve intake and exhaust airflow"
  },

  {
    question: "What does FPS mean?",
    choices: [
      "Frames Per Second",
      "Fast Power System",
      "Fan Performance Speed",
      "Frame Power Storage"
    ],
    correctAnswer: "Frames Per Second"
  },

  {
    question: "Which monitor can properly display up to 144 frames per second?",
    choices: [
      "144Hz monitor",
      "60Hz monitor",
      "30Hz monitor",
      "24Hz monitor"
    ],
    correctAnswer: "144Hz monitor"
  },

  {
    question: "What is the safer way to start GPU overclocking?",
    choices: [
      "Increase settings slowly and test stability",
      "Max out everything immediately",
      "Turn off the fans",
      "Use maximum voltage immediately"
    ],
    correctAnswer: "Increase settings slowly and test stability"
  },

  {
    question: "You increase GPU core clock by 200 MHz and the game crashes. What should you do next?",
    choices: [
      "Increase it another 200 MHz",
      "Lower the core clock and test again",
      "Disable the GPU fan",
      "Increase monitor refresh rate"
    ],
    correctAnswer: "Lower the core clock and test again"
  },

  {
    question: "After undervolting, your GPU uses less power but gives almost the same FPS. Is this a good result?",
    choices: [
      "Yes",
      "No",
      "The GPU is broken",
      "You need to reinstall Windows"
    ],
    correctAnswer: "Yes"
  },

  {
    question: "When tuning a GPU, why should you test after every small change?",
    choices: [
      "To check stability and temperatures",
      "To increase storage",
      "To make Windows boot faster",
      "To increase RAM capacity"
    ],
    correctAnswer: "To check stability and temperatures"
  },

  {
    question: "Your GPU is stable at 1100 mV. You change it to 950 mV and it starts crashing. What should you do?",
    choices: [
      "Increase the voltage slightly and test again",
      "Drop it immediately to 700 mV",
      "Increase VRAM clock to maximum",
      "Turn off the GPU fans"
    ],
    correctAnswer: "Increase the voltage slightly and test again"
  },

  {
    question: "Which result would be considered a good GPU tune?",
    choices: [
      "Stable performance, reasonable temperature, and efficient power use",
      "Highest clock even if games crash",
      "Maximum voltage all the time",
      "Fans turned off for less noise"
    ],
    correctAnswer: "Stable performance, reasonable temperature, and efficient power use"
  }
];



/*-------------------------------- Variables --------------------------------*/
let currentQuastion = null;
let allanswer = null ;
let timeLeft = 15;
let timerInterval = null;
let scorePlay = 0 ; 
/* -------------------------------cashed Elements ----------------------------- */
 const toShow = document.querySelector('#textQ')
 const answer = document.querySelectorAll('.answerBtn')
const timer = document.querySelector('#timer');
const Score = document.querySelector('score-play')
/*-------------------------------- Functions --------------------------------*/
function showQ(){

const random = Math.floor(Math.random () * questions.length); 
currentQuastion = questions[random]
console.log(currentQuastion)
toShow.textContent = currentQuastion.question

}

function choicesAnswerQ(){
const random = Math.floor(Math.random () * currentQuastion.choices.length); 
allanswer = currentQuastion.choices


answer.forEach((oneAnswer, index)=>{
    oneAnswer.textContent = allanswer[index]

})

answer.textContent = allanswer.choices

}
function checkAnswer(event) {

  const userAnswer = event.target;

  if (userAnswer.textContent === currentQuastion.correctAnswer) {

    userAnswer.style.backgroundColor = "green";

  } else {

    answer.forEach((oneAnswer) => {

      if (oneAnswer.textContent === currentQuastion.correctAnswer) {
        oneAnswer.style.backgroundColor = "green";
      } else {
        oneAnswer.style.backgroundColor = "red";
      }

    });

  }

}







function startTimer() {

  timeLeft = 15;

  timer.textContent = timeLeft;

  timerInterval = setInterval(() => {

    timeLeft--;

    timer.textContent = timeLeft;

    if (timeLeft === 0) {

      clearInterval(timerInterval);

      console.log("Time is over!");

    }

  }, 1000);
}


startTimer();
showQ();
choicesAnswerQ();
console.log('space')
console.log(allanswer)

/*----------------------------- Event Listeners -----------------------------*/

answer.forEach((oneAnswer) => {

  oneAnswer.addEventListener('click', checkAnswer);

});