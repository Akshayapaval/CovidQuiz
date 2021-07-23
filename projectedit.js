//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "Is Ebola still around 2021?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Maybe",
        optionD: "Don't Know",
        correctOption: "optionB"
    },

    {
        question: "Is vaccination ready for delta plus?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Not found",
        optionD: "Don't Know",
        correctOption: "optionA"
    },

    {
        question: "Where did the Delta variant come from?",
        optionA: "China",
        optionB: "Germany",
        optionC: "India",
        optionD: "Africa",
        correctOption: "optionC"
    },

    {
        question: "Is delta plus dangerous ? ",
        optionA: "Yes",
        optionB: "No",
        optionC: "Maybe",
        optionD: "Don't Know",
        correctOption: "optionA"
    },

    {
        question: "How contagious is the Delta variant than alpha?",
        optionA: "30% more",
        optionB: "10% more",
        optionC: "90% more",
        optionD: "60% more",
        correctOption: "optionD"
    },

    {
        question: "Is the Delta variant resistant to vaccines?",
        optionA: "Moderately resistant to vaccines only to the vaccinated",
        optionB: "Not moderately resistant to vaccines",
        optionC: "Maybe moderately resistant to vaccines",
        optionD: "Moderately resistant to vaccines",
        correctOption: "optionD"
    },

    {
        question: "Symptoms of  delta plus?",
        optionA: "Skin rash,sore throat,loss of smell,shortness of breath",
        optionB: "Chest pain ,Pain or discomfort in the jaw, neck",
        optionC: "Losing weight,Having an enlarged thyroid gland",
        optionD: "None of the Above",
        correctOption: "optionA"
    },

    {
        question: "Is there treatment for  delta plus?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Maybe",
        optionD: "Don't Know",
        correctOption: "optionB"
    },

    {
        question: "Can the COVID-19 survive in drinking water?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Maybe",
        optionD: "Don't Know",
        correctOption: "optionB"
    },

    {
        question: "What kind of mask is recommended to prevent COVID-19 transmission?",
        optionA: "single layer mask",
        optionB: "fabric mask",
        optionC: "Masks with exhalation valves",
        optionD: "Masks with gaps around the sides of the face",
        correctOption: "optionB"
    },

    {
        question: "How long should a COVID-19 patient be under home isolation for?",
        optionA: "Max 3",
        optionB: "Max 7",
        optionC: "Max 10",
        optionD: "Max 20",
        correctOption: "optionC"
    },

    {
        question: "Where was the first case of the coronavirus disease observed?",
        optionA: "India",
        optionB: "China",
        optionC: "Canada",
        optionD: "America",
        correctOption: "optionB"
    },


    {
        question: "Minimum distance to be kept from each other to avoid COVID-19?",
        optionA: "1m",
        optionB: "7m",
        optionC: "3m",
        optionD: "2m",
        correctOption: "optionA"
    },

    {
        question: "What are the organs most affected by COVID-19?",
        optionA: "Heart",
        optionB: "Lungs",
        optionC: "Brain",
        optionD: "Kidney",
        correctOption: "optionB"
    },

    {
        question: "Can COVID-19 be transmitted through water?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Maybe",
        optionD: "Don't Know",
        correctOption: "optionB"
    },

    {
        question: "When should fabric face masks be worn?",
        optionA: "On public transport",
        optionB: "Crowded place",
        optionC: "In small shops",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Does corona affect animals /pets?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Maybe",
        optionD: "Don't Know",
        correctOption: "optionA"
    },

    {
        question: "What does the 19 in COVID-19 refer to?",
        optionA: "There are 19 variants of the coronavirus",
        optionB: "There are 19 symptoms of coronavirus disease",
        optionC: "This is the 19th coronavirus pandemic",
        optionD: "The coronavirus and the disease it causes were identified in 2019",
        correctOption: "optionD"
    },

    {
        question: "The percentage of alcohol in hand sanitizer to kill the coronavirus",
        optionA: "30%",
        optionB: "45%",
        optionC: "60%",
        optionD: "80%",
        correctOption: "optionC"
    },

    {
        question: "Which of these is not a common COVID-19 symptom?",
        optionA: "Blurred vision",
        optionB: "A cough",
        optionC: "Unusual fatigue",
        optionD: "Fever",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is/are the symptoms of Black Fungus?",
        optionA: "Facial Swelling",
        optionB: "Nasal Congestion",
        optionC: "Headache",
        optionD: "All of above",
        correctOption: "optionD"
    },

    {
        question: " Which cells are found in COVID-19 patients for long-term immunity?",
        optionA: "D-Cell",
        optionB: "P-Cell",
        optionC: "T-Cell",
        optionD: "Endothelial Cells",
        correctOption: "optionC"
    },

    {
        question: "Mild Symptoms of Novel coronavirus are?",
        optionA: "Fever",
        optionB: "Cough",
        optionC: "Shortness of breath",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Can the COVID-19 survive in drinking water?",
        optionA: "Yes",
        optionB: "No",
        optionC: "No evidence",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "Does UV light kill COVID-19?",
        optionA: "Yes",
        optionB: "No",
        optionC: "Maybe",
        optionD: "Don't Know",
        correctOption: "optionA"
    },

    {
        question: "Which stage of infection is most dangerous?",
        optionA: "5-6 days",
        optionB: "6-7 days",
        optionC: "8-9 days",
        optionD: "2-3 days",
        correctOption: "optionD"
    },

    {
        question: "Which is the false about getting over the flu faster?",
        optionA: "Stay home and take rest",
        optionB: "Drink more water",
        optionC: "Avoid social distancing",
        optionD: "Get salty",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}