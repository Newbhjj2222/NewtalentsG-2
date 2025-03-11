// Function ifasha gufungura cyangwa gufunga div
function toggleDisplay(element) {
    if (element.style.display === 'none' || element.style.display === '' || element.style.display === 'block') {
        element.style.display = 'block'; // Fungura
    } else {
        element.style.display = 'none'; // Funga
    }
}

// Fungura cyangwa funga user-management igihe ukande kuri manage-users link
const manageUsersLink = document.getElementById('manage-users');
const userManagement = document.querySelector('.user-management');

manageUsersLink.addEventListener('click', (event) => {
    event.preventDefault(); // Irinde gufungura page nshya
    toggleDisplay(userManagement); // Fungura cyangwa funga
});

// Fungura cyangwa funga admin-content igihe ukande kuri manage-posts link
const managePostsLink = document.getElementById('manage-posts');
const adminContent = document.querySelector('.admin-content');

managePostsLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(adminContent);
});

// Fungura cyangwa funga topic-content igihe ukande kuri manage-folders link
const manageFoldersLink = document.getElementById('manage-folders');
const topicContent = document.querySelector('.topic-content');

manageFoldersLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(topicContent);
});

// Fungura cyangwa funga ads-content igihe ukande kuri manage-ads link
const manageAdsLink = document.getElementById('manage-ads');
const adsContent = document.querySelector('.ads-content');

manageAdsLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(adsContent);
});

// Fungura cyangwa funga profile-container igihe ukande kuri profile link
const profileLink = document.getElementById('profile');
const profileContainer = document.querySelector('.profile-container');

profileLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(profileContainer);
});

// Fungura cyangwa funga mailbox igihe ukande kuri message link
const messageLink = document.getElementById('message');
const mailbox = document.querySelector('.mailbox');

messageLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(mailbox);
});

// Fungura cyangwa funga ad igihe ukande kuri create-folder link
const createFolderLink = document.getElementById('create-Folder');
const ad = document.querySelector('.ad');

createFolderLink.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleDisplay(ad);
});

// Fungura cyangwa funga editor-container igihe ukande kuri create-post link
const createPostLink = document.getElementById('create-post');
const editorContainer = document.querySelector('.editor-container');

createPostLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(editorContainer);
});


const createAdsLink = document.getElementById('create-ads');
const writingForm= document.querySelector('.writing-form');

createAdsLink.addEventListener('click', (event) => {
    event.preventDefault();
    toggleDisplay(writingForm);
});
// Igihe user akanda ahandi hose, funga content zose zafunguwe
document.addEventListener('click', (event) => {
    if (!manageUsersLink.contains(event.target) && !userManagement.contains(event.target)) {
        userManagement.style.display = 'none';
    }
    if (!managePostsLink.contains(event.target) && !adminContent.contains(event.target)) {
        adminContent.style.display = 'none';
    }
    if (!manageFoldersLink.contains(event.target) && !topicContent.contains(event.target)) {
        topicContent.style.display = 'none';
    }
    if (!manageAdsLink.contains(event.target) && !adsContent.contains(event.target)) {
        adsContent.style.display = 'none';
    }
    if (!profileLink.contains(event.target) && !profileContainer.contains(event.target)) {
        profileContainer.style.display = 'none';
    }
    if (!messageLink.contains(event.target) && !mailbox.contains(event.target)) {
        mailbox.style.display = 'none';
    }
    if (!createFolderLink.contains(event.target) && !ad.contains(event.target)) {
        ad.style.display = 'none';
    }
    if (!createPostLink.contains(event.target) && !editorContainer.contains(event.target)) {
        editorContainer.style.display = 'none';
    }
    if (!createAdsLink.contains(event.target) && !writingForm.contains(event.target)) {
        writingForm.style.display = 'none';
    }
    if (!dashboardLink.contains(event.target) && !dashboard.contains(event.target)) {
        dashboard.style.display = 'none';
    }
});

// Ntifunge igihe user akanda muri ad
ad.addEventListener('click', (event) => {
    event.stopPropagation();
});
const dashboardLink = document.getElementById('dashboard');
const dashboard = document.querySelector('.dashboard');

dashboardLink.addEventListener('click', (event) => {
    event.preventDefault(); // Irinde gufungura page nshya
    toggleDisplay(dashboard); // Fungura cyangwa funga
});

// Fata elements zose zifite class ya "nav-link"
const navLinks = document.querySelectorAll('.nav-link');

// Fungura function yo kwimura class "active"
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Siba class "active" kuri links zose
    navLinks.forEach(link => link.classList.remove('active'));
    // Yongeraho "active" kuri link uriho ubu
    this.classList.add('active');
  });
});

const createNotificationLink = document.getElementById("create-notification");
const notifyForm = document.getElementById("notifyForm");

// Add a click event listener to the create notification link
createNotificationLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Toggle visibility of the notification form
  if (notifyForm.style.display === "none" || notifyForm.style.display === "") {
    notifyForm.style.display = "block"; // Show the form
  } else {
    notifyForm.style.display = "none"; // Hide the form
  }
});

// Add a click event listener to the entire document
document.addEventListener("click", function(event) {
  // Check if the click happened outside of the notification form and the link
  if (!notifyForm.contains(event.target) && event.target !== createNotificationLink) {
    notifyForm.style.display = "none"; // Hide the form if clicked outside
  }
});



const createTvLink = document.getElementById("create-tv");
const notifm = document.getElementById("notifm");

// Add a click event listener to the create notification link
createTvLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Toggle visibility of the notification form
  if (notifm.style.display === "none" || notifm.style.display === "") {
    notifm.style.display = "block"; // Show the form
  } else {
    notifm.style.display = "none"; // Hide the form
  }
});

// Add a click event listener to the entire document
document.addEventListener("click", function(event) {
  // Check if the click happened outside of the notification form and the link
  if (!notifm.contains(event.target) && event.target !== createTvLink) {
    notifm.style.display = "none"; // Hide the form if clicked outside
  }
});

const manageTvLink = document.getElementById("manage-tv");
const notif = document.getElementById("notif");

// Add a click event listener to the create notification link
manageTvLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Toggle visibility of the notification form
  if (notif.style.display === "none" || notif.style.display === "") {
    notif.style.display = "block"; // Show the form
  } else {
    notif.style.display = "none"; // Hide the form
  }
});

// Add a click event listener to the entire document
document.addEventListener("click", function(event) {
  // Check if the click happened outside of the notification form and the link
  if (!notif.contains(event.target) && event.target !== manageTvLink) {
    notif.style.display = "none"; // Hide the form if clicked outside
  }
});

function formatText(command) {
      document.execCommand(command, false, null);
    }

    function changeColor(color) {
      document.execCommand('foreColor', false, color);
    }

    function insertImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Kurema element y'ishusho hamwe na styles zayo
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.width = '60px'; 
      img.style.height = '60px';// Urugero: gukora ishusho ijye ifata 100% y'ubugari
      img.style.borderRadius = '10px'; // Urugero: gutinda imfuruka z'ishusho
      img.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Urugero: kongeraho umwijima ukorera inyuma

      // Gutera ishusho aho hagenwe
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(img);
      }
    };
    reader.readAsDataURL(file);
  }
}

    function insertVideo(event) {
      const file = event.target.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        const videoHTML = `<video controls style="max-width: 54%; height: 70px;"><source src="${url}" type="${file.type}">Your browser does not support videos.</video>`;
        document.getElementById('editor').focus();
        document.execCommand('insertHTML', false, videoHTML);
      }
    }

    function insertLink() {
            let url = prompt("Enter the URL");
            let text = prompt("Enter the display text");
            if (url && text) {
                const link = document.createElement("a");
                link.href = url;
                link.target = "_blank";
                link.textContent = text;

                const selection = window.getSelection();
                if (selection.rangeCount > 0) {
                    const range = selection.getRangeAt(0);
                    range.deleteContents();
                    range.insertNode(link);
                    range.setStartAfter(link);
                    range.setEndAfter(link);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }
        }
        function insertTable() {
        const rows = prompt("Enter number of rows:");
        const cols = prompt("Enter number of columns:");
        if (rows && cols) {
            const table = document.createElement("table");
            for (let i = 0; i < rows; i++) {
                const row = document.createElement("tr");
                for (let j = 0; j < cols; j++) {
                    const cell = document.createElement("td");
                    cell.textContent = " ";
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            table.style.border = "1px solid black";
            table.style.height = "50%"
            table.style.borderCollapse = "collapse";
            const selection = window.getSelection();
            const range = selection.getRangeAt(0);
            range.insertNode(table);
        }
    }

    function addBorders() {
        const editor = document.getElementById("editor");
        const tables = editor.getElementsByTagName("table");
        for (const table of tables) {
            table.style.border = "1px solid black";
            for (const cell of table.getElementsByTagName("td")) {
                cell.style.border = "1px solid black";
            }
        }
    }
  
   const manageNotificationLink = document.getElementById("manage-notification");
const notify = document.getElementById("notify");

// Add a click event listener to the create notification link
manageNotificationLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior

  // Toggle visibility of the notification form
  if (notify.style.display === "none" || notify.style.display === "") {
    notify.style.display = "block"; // Show the form
  } else {
    notify.style.display = "none"; // Hide the form
  }
});

// Add a click event listener to the entire document
document.addEventListener("click", function(event) {
  // Check if the click happened outside of the notification form and the link
  if (!notify.contains(event.target) && event.target !== manageNotificationLink) {
    notify.style.display = "none"; // Hide the form if clicked outside
  }
});




function changeBackgroundColor(color) {
    // Fata selection y'inyandiko
    let selection = window.getSelection();
    if (selection.rangeCount > 0) {
        let range = selection.getRangeAt(0);
        let span = document.createElement("span");
        span.style.backgroundColor = color; // Shyiraho background color
        range.surroundContents(span); // Surround inyandiko na span
    }
}

// Fungura uburyo bwo gushiraho event ku link
document.getElementById('shop').addEventListener('click', function(event) {
    // Rekura kubyerekeye link item default action
    event.preventDefault();

    // Fata ibintu byose bifite class ya 'buy'
    const items = document.querySelectorAll('.buy');
    
    // Hitamo gufungura byerekane
    items.forEach(item => {
        item.style.display = 'block'; // Kwerekana ibintu
    });

    // Fungura uburyo bwo guhisha ibintu igihe user akanda ahandi hantu
    document.addEventListener('click', function hideItems(e) {
        // Reba niba click yabaye hanze ya shop cyangwa kuri items
        if (!document.getElementById('shop').contains(e.target) && !Array.from(items).some(item => item.contains(e.target))) {
            // Guhisha ibyo bigaragajwe
            items.forEach(item => {
                item.style.display = 'none'; // Guhisha ibintu
            });

            // Kuraho event listener kugirango idakomeza gukora
            document.removeEventListener('click', hideItems);
        }
    });
});

 
    // Targeting the story editor
    const editor = document.getElementById('story');

    // Enabling the toolbar functions
    function formatText(command, value = null) {
        document.execCommand(command, false, value);
    }

    function changeColor(color) {
        formatText('foreColor', color);
    }

    function changeBackground(color) {
        formatText('hiliteColor', color);
    }

    function changeFontStyle(font) {
        formatText('fontName', font);
    }

    function insertImage() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = `<img src="${e.target.result}" style="max-width: 100%; height: 70px;">`;
                document.execCommand('insertHTML', false, img);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function insertVideo() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.onchange = function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const video = `<video controls style="max-width: 100%; height: auto;">
                    <source src="${e.target.result}" type="video/mp4">Your browser does not support the video tag.
                </video>`;
                document.execCommand('insertHTML', false, video);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

function insertAudio() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "audio/*";
    input.onchange = function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const audio = `<audio controls>
                    <source src="${e.target.result}" type="audio/mpeg">Your browser does not support the audio tag.
                </audio>`;
                document.execCommand('insertHTML', false, audio);
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

    function insertHTML(html) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        range.deleteContents();

        const div = document.createElement('div');
        div.innerHTML = html;
        const frag = document.createDocumentFragment();
        let node;
        while ((node = div.firstChild)) {
            frag.appendChild(node);
        }
        range.insertNode(frag);
    }

    // Make the textarea contenteditable
    editor.setAttribute('contenteditable', true);

    // Sync contenteditable changes to the hidden textarea for form submission
    editor.addEventListener('input', () => {
        editor.value = editor.innerHTML;
    });
    
    // Fata button cyangwa link ugomba gukoresha
const showContentButton = document.getElementById('showContent');

// Fata elements zifite class ya "channel"
const channelContent = document.querySelector('.channel');

// Onclick event ya link
showContentButton.addEventListener('click', function(event) {
  event.preventDefault(); // Guhagarika default behavior ya link
  if (channelContent.style.display === 'none' || !channelContent.style.display) {
    channelContent.style.display = 'block'; // Erekana ibirimo
  } else {
    channelContent.style.display = 'none'; // Bihishe nanone
  }
});

// Gukoresha click event ku nyandiko zose ziri hanze
document.addEventListener('click', function(event) {
  // Reba niba utanzeho button cyangwa ibirimo muri class ya channel
  if (!showContentButton.contains(event.target) && !channelContent.contains(event.target)) {
    channelContent.style.display = 'none'; // Bihishe niba ukanze ahandi
  }
});



document.getElementById('addLink').addEventListener('click', () => {
    const url = prompt('Enter the URL:');
    if (url) {
        document.execCommand('createLink', false, url);
    }
});

function showInput(type) {
  document.getElementById('fileInput').style.display = type === 'file' ? 'block' : 'none';
  document.getElementById('urlInput').style.display = type === 'url' ? 'block' : 'none';
}

function displayVideo(type) {
  const videoContainer = document.getElementById('video');
  videoContainer.innerHTML = ''; // Siba ibyo byari biriho

  if (type === 'file') {
    const fileInput = document.getElementById('videoFile');
    const file = fileInput.files[0];

    if (file) {
      const videoElement = document.createElement('video');
      videoElement.controls = true;
      videoElement.style.width = '100%';
      const fileURL = URL.createObjectURL(file);
      videoElement.src = fileURL;
      videoContainer.appendChild(videoElement);
    }
  } else if (type === 'url') {
    const urlInput = document.getElementById('videoURL');
    const url = urlInput.value;

    if (url) {
      const videoElement = document.createElement('video');
      videoElement.controls = true;
      videoElement.style.width = '100%';
      videoElement.src = url;
      videoContainer.appendChild(videoElement);
    }
  }
}



      document.addEventListener("DOMContentLoaded", function() {
    // Bika amahitamo
    let options = [];

    // Function yo kongera amahitamo
    function addOption() {
        const optionsContainer = document.getElementById('options-container');
        const optionId = `option-${options.length}`;
        const optionHTML = `
            <div class="option">
                <input type="text" placeholder="Andika amahitamo hano..." id="${optionId}" />
            </div>
        `;
        optionsContainer.insertAdjacentHTML('beforeend', optionHTML);
        options.push({ id: optionId, text: '', votes: 0 });
    }

    // Function yo gusiba amahitamo yose
    function clearOptions() {
        document.getElementById('options-container').innerHTML = '';
        options = [];
    }

    // Function yo gushyiraho poll
    function submitPoll() {
        const question = document.getElementById('edito').innerHTML.trim();
        if (question === '') {
            alert('Nyamuneka andika ikibazo cyawe mbere yo kohereza.');
            return;
        }

        options.forEach(option => {
            const input = document.getElementById(option.id);
            if (input) {
                option.text = input.value.trim();
            }
        });

        const validOptions = options.filter(option => option.text !== '');
        if (validOptions.length < 2) {
            alert('Nyamuneka shyiramo byibuze amahitamo abiri.');
            return;
        }

        // Erekana ibisubizo
        displayPoll(question, validOptions);
    }

    // Function yo kugaragaza ikibazo n'amahitamo muri results
    function displayPoll(question, validOptions) {
        const questionDisplay = document.getElementById("Qsn");
        questionDisplay.textContent = question; // Kwerekana ikibazo muri results

        const resultsContainer = document.getElementById("results");
        const pollForm = document.getElementById("poll-form");
        pollForm.innerHTML = ''; // Gusiba amahitamo ya kera

        validOptions.forEach((option, index) => {
            const optionDiv = document.createElement("div");
            optionDiv.classList.add("option");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = "poll";
            input.value = option.text;
            input.id = `amahitamo${index}`;

            const label = document.createElement("label");
            label.htmlFor = `amahitamo${index}`;
            label.textContent = option.text;

            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            pollForm.appendChild(optionDiv);
        });

        // Kongeramo button ya submit
        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit Poll";
        submitButton.id = "submit-poll";
        submitButton.addEventListener("click", sendPollToDatabase);
        pollForm.appendChild(submitButton);
    }

    // Function yo kohereza poll muri database (dummy function)
    function sendPollToDatabase() {
        const question = document.getElementById("Qsn").textContent;
        const selectedOption = document.querySelector('input[name="poll"]:checked');

        if (!selectedOption) {
            alert("Nyamuneka hitamo igisubizo mbere yo kohereza.");
            return;
        }

        const pollData = {
            question: question,
            selectedOption: selectedOption.value
        };

        console.log("Poll Data to Send:", pollData);
        alert("Poll yoherejwe neza!");
    }

    // Fungura ikibazo muri results iyo bakanze "Ask"
    document.getElementById("ask").addEventListener("click", function(event) {
        event.preventDefault();
        const question = document.getElementById('edito').innerText.trim();
        if (question === '') {
            alert('Nyamuneka andika ikibazo mbere yo kubaza.');
            return;
        }
        document.getElementById("Qsn").textContent = question;
    });

    // Kwemeza functions muri global scope
    window.addOption = addOption;
    window.clearOptions = clearOptions;
    window.submitPoll = submitPoll;
});



document.getElementById("noy").addEventListener("click", function(event) {
            var sponsorDiv = document.getElementById("sponsorDiv");
            if (sponsorDiv.style.display === "none" || sponsorDiv.style.display === "") {
                sponsorDiv.style.display = "block";
            } else {
                sponsorDiv.style.display = "none";
            }
            event.stopPropagation(); // Kwirinda ko bihita bihishwa ako kanya
        });

        // Iyo ukandagiye ahandi hose hatari kuri sponsorDiv cyangwa noy, irahisha
        document.addEventListener("click", function(event) {
            var sponsorDiv = document.getElementById("sponsorDiv");
            var noy = document.getElementById("noy");
            if (event.target !== sponsorDiv && event.target !== noy) {
                sponsorDiv.style.display = "none";
            }
        });
