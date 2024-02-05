// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1Paragraph = document.getElementById("choosenNoun1");
const choosenVerbParagraph = document.getElementById("choosenVerb");
const choosenAdjectiveParagraph = document.getElementById("choosenAdjective");
const choosenNoun2Paragraph = document.getElementById("choosenNoun2");
const choosenSettingParagraph = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyParagraph = document.getElementById("story");

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher","The elephant","The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like","kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking","a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog","bug","worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass","in my shoe"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    choosenNoun1Paragraph.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
    choosenVerbParagraph.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    choosenAdjectiveParagraph.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    choosenNoun2Paragraph.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    choosenSettingParagraph.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// Concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1Paragraph.textContent} ${choosenVerbParagraph.textContent} ${choosenAdjectiveParagraph.textContent} ${choosenNoun2Paragraph.textContent}  ${choosenSettingParagraph.textContent}.`;
    storyParagraph.textContent = story;
}

// Grabbing random element from arrays, concatenate and display
function random_on_click() {
    const randomStory = `${getRandomElement(nouns1)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(nouns2)}  ${getRandomElement(settings)}.`;
    storyParagraph.textContent = randomStory;
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener("click", noun1_on_click);
verbButton.addEventListener("click", verb_on_click);
adjectiveButton.addEventListener("click", adjective_on_click);
noun2Button.addEventListener("click", noun2_on_click);
settingButton.addEventListener("click", setting_on_click);
playbackButton.addEventListener("click", playback_on_click);
randomButton.addEventListener("click", random_on_click);

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
// ... (previous constants)

// Constants for p tag to display query selectors
// ... (previous constants)

// Constants for final buttons and p tags
// ... (previous constants)

// Variables for pre-defined arrays
// ... (previous arrays)

// Variables for count to grab array elements
// ... (previous counts)

// Student information
const studentId = "200530613";
const studentName = "Aryan Jamwal"; // Replace with your actual name

/* Functions
-------------------------------------------------- */
// ... (previous functions)

// Function to dynamically add student information
function showStudentInfo() {
    const studentInfoParagraph = document.getElementById("studentId");
    studentInfoParagraph.textContent = `Student ID: ${studentId} | Name: ${studentName}`;
}

/* Event Listeners
-------------------------------------------------- */
// ... (previous event listeners)

// Event listener for the new button to show student information
const showStudentInfoButton = document.getElementById("showStudentInfo");
showStudentInfoButton.addEventListener("click", showStudentInfo);
