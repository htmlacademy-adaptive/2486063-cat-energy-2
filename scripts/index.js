var e=document.querySelector(".navigation"),a=document.querySelector(".header__toggle");e.classList.remove("navigation--no-js");a.addEventListener("click",()=>{e.classList.contains("navigation--closed")?(e.classList.remove("navigation--closed"),e.classList.add("navigation--opened"),a.setAttribute("aria-label","\u0437\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E")):(e.classList.add("navigation--closed"),e.classList.remove("navigation--opened"),a.setAttribute("aria-label","\u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"))});