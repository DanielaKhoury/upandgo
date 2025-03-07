window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  //for the card_back_1
var card_front_1 = document.querySelector("[data-acc-text='card_front_1']");
var card_back_1 = document.querySelector("[data-acc-text='card_back_1']");

let card_back_1_timeline = gsap.timeline();

card_back_1_timeline.set(card_front_1, {rotateY:90});
card_back_1_timeline.to(card_back_1, {rotateY:90, duration:0.3});
card_back_1_timeline.to(card_front_1, {rotateY:0, duration:0.3});
}

window.Script2 = function()
{
  //for the card_front_1

var card_front_1 = document.querySelector("[data-acc-text='card_front_1']");
var card_back_1 = document.querySelector("[data-acc-text='card_back_1']");

let card_front_1_timeline = gsap.timeline();

card_front_1_timeline.set(card_back_1, {rotateY:-90});
card_front_1_timeline.to(card_front_1, {rotateY:-90, duration:0.3});
card_front_1_timeline.to(card_back_1, {rotateY:0, duration:0.3});
}

window.Script3 = function()
{
  //for the card_back_2
var card_front_2 = document.querySelector("[data-acc-text='card_front_2']");
var card_back_2 = document.querySelector("[data-acc-text='card_back_2']");

let card_back_2_timeline = gsap.timeline();

card_back_2_timeline.set(card_front_2, {rotateY:90});
card_back_2_timeline.to(card_back_2, {rotateY:90, duration:0.3});
card_back_2_timeline.to(card_front_2, {rotateY:0, duration:0.3});
}

window.Script4 = function()
{
  //for the card_front_2

var card_front_2 = document.querySelector("[data-acc-text='card_front_2']");
var card_back_2 = document.querySelector("[data-acc-text='card_back_2']");

let card_front_2_timeline = gsap.timeline();

card_front_2_timeline.set(card_back_2, {rotateY:-90});
card_front_2_timeline.to(card_front_2, {rotateY:-90, duration:0.3});
card_front_2_timeline.to(card_back_2, {rotateY:0, duration:0.3});
}

window.Script5 = function()
{
  //for the card_back_3
var card_front_3 = document.querySelector("[data-acc-text='card_front_3']");
var card_back_3 = document.querySelector("[data-acc-text='card_back_3']");

let card_back_3_timeline = gsap.timeline();

card_back_3_timeline.set(card_front_3, {rotateY:90});
card_back_3_timeline.to(card_back_3, {rotateY:90, duration:0.3});
card_back_3_timeline.to(card_front_3, {rotateY:0, duration:0.3});
}

window.Script6 = function()
{
  //for the card_front_3

var card_front_3 = document.querySelector("[data-acc-text='card_front_3']");
var card_back_3 = document.querySelector("[data-acc-text='card_back_3']");

let card_front_3_timeline = gsap.timeline();

card_front_3_timeline.set(card_back_3, {rotateY:-90});
card_front_3_timeline.to(card_front_3, {rotateY:-90, duration:0.3});
card_front_3_timeline.to(card_back_3, {rotateY:0, duration:0.3});
}

window.Script7 = function()
{
  //for the card_back_4
var card_front_4 = document.querySelector("[data-acc-text='card_front_4']");
var card_back_4 = document.querySelector("[data-acc-text='card_back_4']");

let card_back_4_timeline = gsap.timeline();

card_back_4_timeline.set(card_front_4, {rotateY:90});
card_back_4_timeline.to(card_back_4, {rotateY:90, duration:0.3});
card_back_4_timeline.to(card_front_4, {rotateY:0, duration:0.3});
}

window.Script8 = function()
{
  //for the card_front_4

var card_front_4 = document.querySelector("[data-acc-text='card_front_4']");
var card_back_4 = document.querySelector("[data-acc-text='card_back_4']");

let card_front_4_timeline = gsap.timeline();

card_front_4_timeline.set(card_back_4, {rotateY:-90});
card_front_4_timeline.to(card_front_4, {rotateY:-90, duration:0.3});
card_front_4_timeline.to(card_back_4, {rotateY:0, duration:0.3});
}

window.Script9 = function()
{
  // Set SystemDate variable in Storyline
var m_names = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
if (dd < 10) { dd = '0' + dd; }
var date = m_names[mm] + ' ' + dd + ', ' + yyyy;
var player = GetPlayer();
player.SetVar("SystemDate", date);
console.log('SystemDate set:', date);
}

window.Script10 = function()
{
  // Retrieve Player Variables from Storyline
var player = GetPlayer();
var learnerName = player.GetVar("learnerName");
var learnerLastName = player.GetVar("learnerLastName");
var learnerCity = player.GetVar("learnerCity");
var systemDate = player.GetVar("SystemDate");

// Debugging logs to check if variables exist
console.log("Learner Name:", learnerName);
console.log("Learner Last Name:", learnerLastName);
console.log("Learner City:", learnerCity);
console.log("System Date:", systemDate);

// Ensure systemDate is set, fallback to today's date if missing
if (!systemDate || systemDate === "") {
    var today = new Date();
    systemDate = today.toLocaleDateString();
}

// Delay execution to ensure Storyline variables are set
setTimeout(() => {
    Constructpdf();
}, 1000);

async function Constructpdf() {
    await loadMods();
    await fillForm();
}

async function loadMods() {
    console.log("Loading PDF-lib...");
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
    console.log("PDF-lib Loaded!");
}

async function fillForm() {
    const { PDFDocument } = PDFLib;
    const formUrl = "your_certificate_template.pdf";
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Debugging: Check if field names exist
    console.log("PDF Fields:", form.getFields().map(f => f.getName()));

    // Get form fields
    const nameField = form.getTextField("NameField");
    const lastNameField = form.getTextField("LastnameField");
    const cityField = form.getTextField("CityField");
    const dateField = form.getTextField("DateField");

    // Fill form fields
    nameField.setText(learnerName);
    lastNameField.setText(learnerLastName);
    cityField.setText(learnerCity);
    dateField.setText(systemDate);

    var filename = learnerName + ".pdf";

    // Save and download the filled PDF
    const pdfBytes = await pdfDoc.save();
    await import("https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js")
        .then(({default: saveAs}) => {
            const blob = new Blob([pdfBytes], {type: "application/octet-stream"});
            saveAs(blob, filename);
        })
        .catch(err => console.log("SaveAs Error:", err));
}
}

window.Script11 = function()
{
  // Set SystemDate variable in Storyline
var m_names = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
if (dd < 10) { dd = '0' + dd; }
var date = m_names[mm] + ' ' + dd + ', ' + yyyy;
var player = GetPlayer();
player.SetVar("SystemDate", date);
console.log('SystemDate set:', date);
}

window.Script12 = function()
{
  // Retrieve Player Variables from Storyline
var player = GetPlayer();
var learnerName = player.GetVar("learnerName");
var learnerLastName = player.GetVar("learnerLastName");
var learnerCity = player.GetVar("learnerCity");
var systemDate = player.GetVar("SystemDate");

// Debugging logs to check if variables exist
console.log("Learner Name:", learnerName);
console.log("Learner Last Name:", learnerLastName);
console.log("Learner City:", learnerCity);
console.log("System Date:", systemDate);

// Ensure systemDate is set, fallback to today's date if missing
if (!systemDate || systemDate === "") {
    var today = new Date();
    systemDate = today.toLocaleDateString();
}

// Delay execution to ensure Storyline variables are set
setTimeout(() => {
    Constructpdf();
}, 1000);

async function Constructpdf() {
    await loadMods();
    await fillForm();
}

async function loadMods() {
    console.log("Loading PDF-lib...");
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
    console.log("PDF-lib Loaded!");
}

async function fillForm() {
    const { PDFDocument } = PDFLib;
    const formUrl = "your_certificate_template.pdf";
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Debugging: Check if field names exist
    console.log("PDF Fields:", form.getFields().map(f => f.getName()));

    // Get form fields
    const nameField = form.getTextField("NameField");
    const lastNameField = form.getTextField("LastnameField");
    const cityField = form.getTextField("CityField");
    const dateField = form.getTextField("DateField");

    // Fill form fields
    nameField.setText(learnerName);
    lastNameField.setText(learnerLastName);
    cityField.setText(learnerCity);
    dateField.setText(systemDate);

    var filename = learnerName + ".pdf";

    // Save and download the filled PDF
    const pdfBytes = await pdfDoc.save();
    await import("https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js")
        .then(({default: saveAs}) => {
            const blob = new Blob([pdfBytes], {type: "application/octet-stream"});
            saveAs(blob, filename);
        })
        .catch(err => console.log("SaveAs Error:", err));
}
}

window.Script13 = function()
{
  // Set SystemDate variable in Storyline
var m_names = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
if (dd < 10) { dd = '0' + dd; }
var date = m_names[mm] + ' ' + dd + ', ' + yyyy;
var player = GetPlayer();
player.SetVar("SystemDate", date);
console.log('SystemDate set:', date);
}

window.Script14 = function()
{
  // Retrieve Player Variables from Storyline
var player = GetPlayer();
var learnerName = player.GetVar("learnerName");
var learnerLastName = player.GetVar("learnerLastName");
var learnerCity = player.GetVar("learnerCity");
var systemDate = player.GetVar("SystemDate");

// Debugging logs to check if variables exist
console.log("Learner Name:", learnerName);
console.log("Learner Last Name:", learnerLastName);
console.log("Learner City:", learnerCity);
console.log("System Date:", systemDate);

// Ensure systemDate is set, fallback to today's date if missing
if (!systemDate || systemDate === "") {
    var today = new Date();
    systemDate = today.toLocaleDateString();
}

// Delay execution to ensure Storyline variables are set
setTimeout(() => {
    Constructpdf();
}, 1000);

async function Constructpdf() {
    await loadMods();
    await fillForm();
}

async function loadMods() {
    console.log("Loading PDF-lib...");
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
    console.log("PDF-lib Loaded!");
}

async function fillForm() {
    const { PDFDocument } = PDFLib;
    const formUrl = "your_certificate_template.pdf";
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Debugging: Check if field names exist
    console.log("PDF Fields:", form.getFields().map(f => f.getName()));

    // Get form fields
    const nameField = form.getTextField("NameField");
    const lastNameField = form.getTextField("LastnameField");
    const cityField = form.getTextField("CityField");
    const dateField = form.getTextField("DateField");

    // Fill form fields
    nameField.setText(learnerName);
    lastNameField.setText(learnerLastName);
    cityField.setText(learnerCity);
    dateField.setText(systemDate);

    var filename = learnerName + ".pdf";

    // Save and download the filled PDF
    const pdfBytes = await pdfDoc.save();
    await import("https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js")
        .then(({default: saveAs}) => {
            const blob = new Blob([pdfBytes], {type: "application/octet-stream"});
            saveAs(blob, filename);
        })
        .catch(err => console.log("SaveAs Error:", err));
}
}

window.Script15 = function()
{
  // Set SystemDate variable in Storyline
var m_names = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
if (dd < 10) { dd = '0' + dd; }
var date = m_names[mm] + ' ' + dd + ', ' + yyyy;
var player = GetPlayer();
player.SetVar("SystemDate", date);
console.log('SystemDate set:', date);
}

window.Script16 = function()
{
  // Retrieve Player Variables from Storyline
var player = GetPlayer();
var learnerName = player.GetVar("learnerName");
var learnerLastName = player.GetVar("learnerLastName");
var learnerCity = player.GetVar("learnerCity");
var systemDate = player.GetVar("SystemDate");

// Debugging logs to check if variables exist
console.log("Learner Name:", learnerName);
console.log("Learner Last Name:", learnerLastName);
console.log("Learner City:", learnerCity);
console.log("System Date:", systemDate);

// Ensure systemDate is set, fallback to today's date if missing
if (!systemDate || systemDate === "") {
    var today = new Date();
    systemDate = today.toLocaleDateString();
}

// Delay execution to ensure Storyline variables are set
setTimeout(() => {
    Constructpdf();
}, 1000);

async function Constructpdf() {
    await loadMods();
    await fillForm();
}

async function loadMods() {
    console.log("Loading PDF-lib...");
    await import("https://unpkg.com/pdf-lib/dist/pdf-lib.js");
    console.log("PDF-lib Loaded!");
}

async function fillForm() {
    const { PDFDocument } = PDFLib;
    const formUrl = "your_certificate_template.pdf";
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(formPdfBytes);
    const form = pdfDoc.getForm();

    // Debugging: Check if field names exist
    console.log("PDF Fields:", form.getFields().map(f => f.getName()));

    // Get form fields
    const nameField = form.getTextField("NameField");
    const lastNameField = form.getTextField("LastnameField");
    const cityField = form.getTextField("CityField");
    const dateField = form.getTextField("DateField");

    // Fill form fields
    nameField.setText(learnerName);
    lastNameField.setText(learnerLastName);
    cityField.setText(learnerCity);
    dateField.setText(systemDate);

    var filename = learnerName + ".pdf";

    // Save and download the filled PDF
    const pdfBytes = await pdfDoc.save();
    await import("https://unpkg.com/tiny-save-as/dist/tiny-save-as.esm.js")
        .then(({default: saveAs}) => {
            const blob = new Blob([pdfBytes], {type: "application/octet-stream"});
            saveAs(blob, filename);
        })
        .catch(err => console.log("SaveAs Error:", err));
}
}

};
