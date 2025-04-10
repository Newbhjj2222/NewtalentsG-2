const select = document.getElementById("question-select");
  const input = document.getElementById("custom-question");
  const sendBtn = document.getElementById("send-btn");
  const chatBody = document.getElementById("chat-body");
  
  const knownQuestions = {
  "amakuru": "Ni meza! tugufashe iki uyu munsi?",
  "bite": "Ni sawa! tugufashe iki uyu munsi?",
"hy": "hy! tugufashe iki uyu munsi?",
"hello": "hello! tugufashe iki uyu munsi?",
"kwiyandikisha": "Niba umbajije uko wakwiyandikisha, ndagufasha rwose. Kanda ahanditse muri menu yawe hejuru ya page iburyo, umanuke urebe ahanditse 'Login' cyangwa 'Sign In', ubundi uhakande. Uzahita ugera aho winjirira, ukande ahanditse 'Sign Up', wuzuze ifishi hanyuma wohereze.",
"ni gute na kwiyandikisha": "Niba umbajije uko wakwiyandikisha, ndagufasha rwose. Kanda ahanditse muri menu yawe hejuru ya page iburyo, umanuke urebe ahanditse 'Login' cyangwa 'Sign In', ubundi uhakande. Uzahita ugera aho winjirira, ukande ahanditse 'Sign Up', wuzuze ifishi hanyuma wohereze.",

"biyandikisha gute": "Niba umbajije uko wakwiyandikisha, ndagufasha rwose. Kanda ahanditse muri menu yawe hejuru ya page iburyo, umanuke urebe ahanditse 'Login' cyangwa 'Sign In', ubundi uhakande. Uzahita ugera aho winjirira, ukande ahanditse 'Sign Up', wuzuze ifishi hanyuma wohereze.",
"nsha kumenya uko biyandikisha": "Niba umbajije uko wakwiyandikisha, ndagufasha rwose. Kanda ahanditse muri menu yawe hejuru ya page iburyo, umanuke urebe ahanditse 'Login' cyangwa 'Sign In', ubundi uhakande. Uzahita ugera aho winjirira, ukande ahanditse 'Sign Up', wuzuze ifishi hanyuma wohereze.",
  "kwandika inkuru": "Niba ushaka kwandika inkuru, kanda hasi ahari iki kimenyetso hagana hasi. ➕ 'Urahita ugera aho wandikira'.",
  "na kwandika inkuru gute": "Niba ushaka kwandika inkuru, kanda hasi ahari iki kimenyetso hagana hasi. ➕ 'Urahita ugera aho wandikira'.",
  
  "bandika  inkuru gute": "Niba ushaka kwandika inkuru, kanda hasi ahari iki kimenyetso hagana hasi. ➕ 'Urahita ugera aho wandikira'.",
  
  "nshaka kuba umwanditsi": "Niba ushaka kwandika inkuru, kanda hasi ahari iki kimenyetso hagana hasi. ➕ 'Urahita ugera aho wandikira'.",
  
"inkuru": "Niba ushaka kwandika inkuru, kanda hasi ahari iki kimenyetso hagana hasi. ➕ 'Urahita ugera aho wandikira'.",
  "kugura nes": "Yego ushaka gugura nes point ukoresha usoma inkuru? kanda muri button irimo iki ikimenyetso 💸 hanyuma ukande ahanditse Gura nes ubundi ukurikize amabwiriza.",
  "bagura gute nes point": "Yego ushaka gugura nes point ukoresha usoma inkuru? kanda muri button irimo iki ikimenyetso 💸 hanyuma ukande ahanditse Gura nes ubundi ukurikize amabwiriza.",
"nes point": "Yego ushaka gugura nes point ukoresha usoma inkuru? kanda muri button irimo iki ikimenyetso 💸 hanyuma ukande ahanditse Gura nes ubundi ukurikize amabwiriza.",
  "ni bande bashobora kwandika": "Buri wese ushaka gusangiza abandi inkuru ashobora kwandika, yishyura amafaranga kugirango account ye ibe monitize yemererwe kubikuza.",
  "ese nshobora kubona nes point zubuntu": "Yego! Uhabwa nes point z'ubuntu bitewe n’abantu basomye inkuru yawe, cyangwa usangiza inkuru cyangwa utumira abandi basomyi",
  "ni gute nakorera nes point zubuntu": "Yego! Uhabwa nes point z'ubuntu bitewe n’abantu basomye inkuru yawe, cyangwa usangiza inkuru cyangwa utumira abandi basomyi",
"ni gute nabona nes point nyinshi": "Yego! Uhabwa nes point z'ubuntu bitewe n’abantu basomye inkuru yawe, cyangwa usangiza inkuru cyangwa utumira abandi basomyi",
  "ni gute nakorera amafaranga": "nes point zawe zahinduka amafaranga wishyurwa binyuze kuri Mobile Money, igihe account yawe ari monitize.",
  "ese nshobora gusiba account yanjye": "yego gusa ubisabye admin. umwandikira kuri Whatsapp 0722319367",
    "ni gute nasiba account yanjye": "ushobora gusiba account yawe gusa ubisabye admin. umwandikira kuri Whatsapp 0722319367",
  "inkuru zanjye nazibona gute": "inkuru zawe uzibona uciye aho uzandikira",
  "nasoma gute inkuru zanjye kubuntu": "inkuru zawe uzibona uciye aho uzandikira",
  "nshobora guhindura izina..": "Yego, gusa ubisabye admin. umwandikira kuri Whatsapp 0722319367",
  "nshobora kwinjira nkoresheje Facebook": "Oya, ubu winjira ukoresheje email yawe gusa. ibyo biracyakorwa nibisoza tuzabamenyesha.",
  "nabona gute nes point nyinshi": "Andika inkuru nziza, hanyuma uyitange bundi utumire abasomyi benshi  uyisangize abandi kandi ukangurire abandi kuyisoma.",
  "ese hari amarushanwa yo gukorera nes point": "Yego, buri kwezi haba irushanwa ryo kubona nes py nyinshi. kubindi bisobanuro wabaza admin umwandikiye kuri Whatsapp 0722319367",
  "nshobora guhindura nimero": "Yego, ariko usabwa gusaba uburenganzira admin",
  "ese amafoto mu koresha ku nkuru muyakura he": "Twifashisha Chatgpt mu kuyakora.",
  "ni ubuhe buryo bwo kugura nes ": "Kanda kuri 'Gura nes', munsi ya balance yanyu hanyuma mukurukize amabwiriza",
  "ese nshobora gusangiza abandi inkuru": "Yego, hari buto ya 'share' ku nkuru zose.",
  "ese hari aho natangira comments": "Yego, ushobora kugaragaza igitekerezo ku nkuru iyo ari yo yose.",
  "ese hariho uburyo na kwandikira umwanditsi": "Yego, hari ubutumwa bwo hagati y’abanditse n’abasomyi. gusa biracyategurwa nibikunda tuzabamenyesha",
  "kwamamaza": "Yego, jya kuri contact as uzabona aho uca wamamaza.",
  "gusoma": "niba wagize ikibazo mu gusoma inkuru, gura nes point kugirango wemererwe gusoma inkuru zitandukanye. niba utanyuzwe n'igisubizo uhawe. wakwandikira admin kuri Whatsapp akaguha ubufasha. 0722319367"
  // ...
  
  // Ibindi 80 ushaka kongerwamo, nabigukorera byihuse niba umbwiye ko ushaka ibisubizo binonosoye, cyangwa se ibijyanye n’urubuga rwawe.
};
  
  // Iyo user ahisemo option
  select.addEventListener("change", function() {
    const value = select.value;
    if (value) {
      let questionText = select.options[select.selectedIndex].text;
      addMessage(questionText, "user");
      respondToOption(value);
      select.value = ""; // Reset
    }
  });
  
  // Iyo user yanditse ikibazo cye
  sendBtn.addEventListener("click", function() {
    const question = input.value.trim().toLowerCase();
    if (question !== "") {
      addMessage(question, "user");
      respondToText(question);
      input.value = "";
    }
  });
  
  function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = sender + "-message";
    msg.innerText = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }
  function respondToOption(option) { const response = knownQuestions[option] || "Ndacyashaka igisubizo kuri icyo kibazo, buretse gato."; setTimeout(() => addMessage(response, "bot"), 500); }


  // Fungura igisubizo hashingiwe ku bibazo
function respondToText(question) {
  let response = "Ndacyashaka igisubizo kuri icyo kibazo, buretse gato.";
  
  // Kugereranya niba ari kimwe n’ibiboneka muri dropdown
  for (let key in knownQuestions) {
    if (question.includes(key)) {
      response = knownQuestions[key];
      break;
    }
  }
  
  // Niba nta gisubizo kiri muri knownQuestions, utange alert hanyuma ufungure link kuri WhatsApp
  if (response === "Ndacyashaka igisubizo kuri icyo kibazo, buretse gato.") {
    setTimeout(() => {
      addMessage("Urihangana ntitubashije kugusubiza none aha. gusa tugiye kuguhuza na admin kuri Whatsapp, ube ariwe ubaza.", "bot");
      
      setTimeout(() => {
        window.location.href = "https://wa.me/250722319367?text=" + encodeURIComponent(question); // Fungura link ya WhatsApp automatic
      }, 8000); // Fungura link nyuma y'amasegonda 1
    }, 1000); // Umuburo utangwa mu gihe gisubizo kitabonetse
  } else {
    setTimeout(() => addMessage(response, "bot"), 600);
  }
}
  document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const closeBtn = document.getElementById("close-btn");
  const chatbotIcon = document.getElementById("chatbot-icon");

  if (!chatbotContainer || !closeBtn || !chatbotIcon) {
    console.error("Some elements are missing in the HTML.");
    return;
  }

  chatbotIcon.addEventListener("click", function () {
    chatbotContainer.classList.remove("hidden");
    chatbotIcon.style.display = "none";
  });

  closeBtn.addEventListener("click", function () {
    chatbotContainer.classList.add("hidden");
    chatbotIcon.style.display = "flex";
  });
});
