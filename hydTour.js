//E1AFD1    , 9DDE8B    729762  859F3D  006A67  219B9D  

let colorcolor=document.getElementById("")
let oneQuote=document.getElementById("quote");
let quotesHYD=["Hyderabad’s charm lies in its rich, diverse heritage","A city where art, history, and talent thrive together","Hyderabad’s soul reflects through its culture, history, and talent","A blend of tradition, innovation, and artistic expression","Hyderabad’s history, culture, and talent create unique magic","Hyderabad, where culture, history, and talent shine together","From Charminar to modern tech, Hyderabad embraces all talents","Hyderabad’s legacy of talent and culture stands eternal","Hyderabad’s landmarks tell stories of a royal past","Hyderabad is where old traditions blend with technology","From the Nizams to modernity, Hyderabad’s journey fascinates","Hyderabad’s streets echo stories of ancient grandeur","Hyderabad’s biryani is a culinary delight, unmatched anywhere","Legacy, culture, and innovation converge in Hyderabad’s heart","Biryani and smiles – the Hyderabad way of life","Hyderabad, a city that fills your heart and plate","Hyderabad’s magic? It’s in the smiles and spices","Hyderabad, where history and heart meet with a smile","From Charminar to biryani, Hyderabad steals your heart"]


let quoteColor=["#474E93","#213555","#8D0B41","#001A6E","#543A14","#4B5945","#F26B0F","#441752","#355F2E","#640D5F","#1C325B","#1F4529","#4C1F7A","#1A1A1D","#3B1C32","#FFE31A","#EC8305","#A66E38","#D91656","#4E31AA","#800000","#921A40","#1A3636","#E4003A","#000000","#059212","#06D001","#FF0000","#A34343","#12372A","#232D3F","#750E21"]

const randomquotes = Math.floor(Math.random() * quotesHYD.length);
const randomColor = Math.floor(Math.random() * quoteColor.length);
oneQuote.textContent=quotesHYD[randomquotes];
oneQuote.style.color=quoteColor[randomColor];
// ----------------------------------------------search-------------------------
document.getElementById("searchicon").addEventListener("click", () => {
    performSearch();
});

document.getElementById("searchbtn").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});

function performSearch() {
    const searchQuery = document.getElementById("searchbtn").value.trim().toLowerCase();

    const places = {
        "chowmalla": "chowmalla-card",
        "golconda": "golconda-card",
        "hussain sagar": "hussain-sagar-card",
        "charminar": "charminar-card",
        "mecca masjid":"Mecca-Masjid-card",
        "jagannath temple":"Jagannath-Temple-card",
        "salarjung museum":"Salarjung-Museum-card",
        "shilparamam":"shilparamam-card",
        "ramoji film city":"ramoji-film-card",      //Outskirts
        "gandikota":"gandikota-card",
        "jalavihar":"Jalavihar-card",
        "medak chruch":"medak-chruch-card",
        "swarnagiri temple":"Swarnagiri-Temple-card",
        "yadagirigutta":"Yadagirigutta-card",
        "rachakonda fort":"Rachakonda-Fort-card",
        "ammapalli-temple":"Ammapalli-Temple-card",
        "barbeque spices":"Barbeque-Spices-card",           //resturant
        "bawarchi":"bawarchi-card",
        "fisherman's-wharf":"Fisherman's-Wharf-card",
        "platform 65":"platform 65-card",
        "pista house":"pista house-card",
        "flechazo":"Flechazo-card",
        "mehfil":"Mehfil-card",
        "swagath":"swagath-card"
    };

    if (places[searchQuery]) {
        const targetCard = document.getElementById(places[searchQuery]);
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        targetCard.style.backgroundColor="lightyellow";
        setTimeout(()=>{
        targetCard.style.backgroundColor="";
        },3000)
    } else {
        alert("Place not found! Please check your spelling or try another search.");
    }
}
// -----------------------------------------------------Login and sign Up---------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const signInButton = document.getElementById("signIN");
    const signUpFormContainer = document.querySelector(".signup_Form");
    const loginFormContainer = document.querySelector(".login_Form");
    const loginForm = document.getElementById("loginForm");
    const signUpLink = document.getElementById("signIn_to_SignUp");
    const signUpForm = document.getElementById("formValid");

    loginFormContainer.style.display = "none";
    signUpFormContainer.style.display = "none";


    let loggedIn=localStorage.getItem("loggedIn");

    // if(!loggedIn){
    //     setTimeout(()=>{
    //         loginFormContainer.style.display="block"
    //         signUpFormContainer.style.display="none"
    //         document.body.style.overflow="hidden";
    //     },20000)
    // }

    signInButton.addEventListener("click", () => {  //display Login
        loginFormContainer.style.display = "block";
        signUpFormContainer.style.display = "none";
        document.body.style.overflow="hidden";          //scrolling stops
    });

    signUpLink.addEventListener("click", (event) => {//display signUp
        event.preventDefault();
        loginFormContainer.style.display = "none";
        signUpFormContainer.style.display = "block";
    });

    if (signUpForm) {
        signUpForm.addEventListener("submit", (event) => {                  //signUp
            event.preventDefault();

            const nameExp = /^[a-zA-Z]{2,}$/;
            const emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
            const pswdExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_-])[a-zA-Z\d!@#$%^&*_-]{8,15}$/;

            const name = document.getElementById("signup_name").value.trim();
            const mail = document.getElementById("signup_mail").value.trim();
            const pswd = document.getElementById("signup_pswd").value.trim();

            let valid = true;

            document.getElementById("nameerr").textContent = "";
            document.getElementById("mailerr").textContent = "";
            document.getElementById("pswderr").textContent = "";

            if (!nameExp.test(name)) {
                document.getElementById("nameerr").textContent = "Please enter at least 2 characters.";
                valid = false;
            }
            if (!emailExp.test(mail)) {
                document.getElementById("mailerr").textContent = "Please enter a valid email.";
                valid = false;
            }
            if (!pswdExp.test(pswd)) {
                document.getElementById("pswderr").textContent =
                    "Password must be 8-15 characters with at least one uppercase letter, one lowercase letter, one number, and one special character.";
                valid = false;
            }

            if (valid) {
                localStorage.setItem("mailVerify", mail);
                localStorage.setItem("pswdVerify", pswd);
                alert("Sign Up successful! Redirecting to login...");
                signUpFormContainer.style.display = "none";
                loginFormContainer.style.display = "block";
            }
        });
    }
    

// --------------------------Login Form---------------------------------------
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const savedMail = localStorage.getItem("mailVerify");
            const savedPswd = localStorage.getItem("pswdVerify");
            const loginMail = document.getElementById("loginmail").value.trim();
            const loginPswd = document.getElementById("loginpswd").value.trim();

            if (loginMail === savedMail && loginPswd === savedPswd) {
                alert("Login successful!");
                loginFormContainer.style.display = "none";
                document.body.style.overflow="auto";
            } else {
                alert("Invalid credentials! Please try again.");
            }
        });
    }
});

// ----------------------------------------------POPUP-----------------------------------------
let placeDetails={
    "chowmalla-card":{
        adultTicketPrice:"₹80 per person",
        childernTicketPrice:"₹10 per person",
        ForeignerTicketPrice:"₹200 per person",
        foodPrice:"200-300 rupees per person",
        timings:"10 AM - 5 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.1526930549653!2d78.46911477462638!3d17.35782840365697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978adaaaaaab%3A0x4dd9d545daddebe8!2sChowmahalla%20Palace!5e1!3m2!1sen!2sin!4v1733074656721!5m2!1sen!2sin",

    },
    "golconda-card":{
        adultTicketPrice:"₹25 per person",
        childernTicketPrice:"₹15 per person",
        ForeignerTicketPrice:"₹300 per person",
        foodPrice:"200-250 rupees per person",
        timings:"9 AM - 5:30 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6564248165278!2d78.39933427462691!3d17.384205902897847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb968ea6aea98f%3A0x6b76ecdfd65a335a!2sGolconda%20Fort!5e1!3m2!1sen!2sin!4v1733075385068!5m2!1sen!2sin",

    },
    "hussain-sagar-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"100-150 rupees per person",
        timings:"8 AM - 10 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27559.284057662644!2d78.45371788252629!3d17.423779888852458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHussain%20Sagar%20Lake!5e1!3m2!1sen!2sin!4v1733081311850!5m2!1sen!2sin",

    },
    "charminar-card":{
        adultTicketPrice:"₹25 per person",
        childernTicketPrice:"₹15 per person",
        ForeignerTicketPrice:"₹300 per person",
        foodPrice:"200 -300 rupees per person",
        timings:"9:30 AM - 5:30 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1723.0468951390637!2d78.47174783842624!3d17.360961217702297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scharminar!5e1!3m2!1sen!2sin!4v1733030535677!5m2!1sen!2sin",

    },
    "Mecca-Masjid-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"200 -300 rupees per person",
        timings:"4 AM - 9:30 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27571.5093259406!2d78.46197623241422!3d17.34261081132621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMecca%20Masjid!5e1!3m2!1sen!2sin!4v1733081476175!5m2!1sen!2sin",

    },
    "Jagannath-Temple-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"150 -300 rupees per person",
        timings:"6 AM - 12 PM and 5-9 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.072583231173!2d78.42354197462758!3d17.41518850200466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96d70ff8b6f3%3A0xde370030b7d7d2fe!2sShri%20Jagannatha%20Swami%20Temple!5e1!3m2!1sen!2sin!4v1733082008890!5m2!1sen!2sin",

    },
    "Salarjung-Museum-card":{
        adultTicketPrice:"₹20 per person",
        childernTicketPrice:"₹10 per person",
        ForeignerTicketPrice:"₹500 per person",
        foodPrice:"100-200 rupees per person",
        timings:"10 AM - 5 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3445.8948884045717!2d78.47773602462661!3d17.371536003262687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20%20%20%20%22Salarjung-Museum!5e1!3m2!1sen!2sin!4v1733082145148!5m2!1sen!2sin",

    },
    "shilparamam-card":{
        adultTicketPrice:"₹60 per person",
        childernTicketPrice:"₹40 per person",
        ForeignerTicketPrice:"₹60 per person",
        foodPrice:"100-150 rupees per person",
        timings:"10:30 AM - 8 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.36666563716!2d78.37573157462838!3d17.452578100924978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dbf996589d%3A0xd5b5d3b90d993301!2sShilparamam%20Art%20%26%20Craft%20Village!5e1!3m2!1sen!2sin!4v1733082482833!5m2!1sen!2sin",

    },
    "ramoji-film-card":{
        adultTicketPrice:"₹1,250 per person",
        childernTicketPrice:"₹1,050 per person",
        ForeignerTicketPrice:"₹1,250 per person",
        foodPrice:"500-1000 rupees per person",
        timings:"9 AM - 5:30 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6894.043101678295!2d78.6782698901514!3d17.311553340387007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb0aed7788a7d1%3A0xa0149728f13306f0!2sRamoji%20Film%20City!5e1!3m2!1sen!2sin!4v1733157087262!5m2!1sen!2sin",

    },
    "gandikota-card":{
        adultTicketPrice:"₹50 per person",
        childernTicketPrice:"₹50 per person",
        ForeignerTicketPrice:"₹300 per person",
        foodPrice:"400 rupees per person",
        timings:"6 AM - 6 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6894.043101678295!2d78.6782698901514!3d17.311553340387007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb40b519338fe8b%3A0x903d57f7eb08e0ad!2sGandikota%2C%20Andhra%20Pradesh!5e1!3m2!1sen!2sin!4v1733157235391!5m2!1sen!2sin"
    },
    "Jalavihar-card":{
        adultTicketPrice:"₹349 per person",
        childernTicketPrice:"₹249 per person",
        ForeignerTicketPrice:"₹800 per person",
        foodPrice:"450 rupees per person",
        timings:"11 AM - 7 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6889.64472136397!2d78.45860148981747!3d17.42845067019389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjalvihar!5e1!3m2!1sen!2sin!4v1733030812223!5m2!1sen!2sin",
    },
    "medak-chruch-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"200-250 rupees per person",
        timings:"6 AM - 6 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716.4117540408681!2d78.26454799622302!3d18.05333119011758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bd4e5a894b3%3A0xf6fba740712d4e02!2sMedak%20Cathedral!5e1!3m2!1sen!2sin!4v1733157802643!5m2!1sen!2sin",
        
    },
    "Swarnagiri-Temple-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"100-150 rupees per person",
        timings:"6 AM - 1 PM and 3-9 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110194.7616005343!2d78.72862520425072!3d17.493820800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb6fd9a3dac9f5%3A0xf04c28e0a4feefd7!2sSwarnagiri%20Sree%20Venkateswara%20Swamy%20Devasthanam!5e1!3m2!1sen!2sin!4v1733158492249!5m2!1sen!2sin"
    },
    "Yadagirigutta-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"200-250 rupees per person",
        timings:"7:15 AM-12:30 PM and 4 PM-7 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13767.153737852772!2d78.92704999192172!3d17.588482288037955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb66630166cccd%3A0x24b91e71a60c48c2!2sYadagirigutta%20Sri%20Lakshmi%20Narasimha%20Swamy%20Devastanam!5e1!3m2!1sen!2sin!4v1733159337753!5m2!1sen!2sin"
    },
    "Rachakonda-Fort-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"300 rupees",
        timings:"7 AM-11 AM and 1 PM-4 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6889.64472136397!2d78.45860148981747!3d17.42845067019389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb0f766c14f5c1%3A0x621f20eae0c6a199!2sRachakonda%2C%20Telangana%20508252!5e1!3m2!1sen!2sin!4v1733030932100!5m2!1sen!2sin",
    },
    "Ammapalli-Temple-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"100-150 rupees per person",
        timings:"6:30 AM-1 PM and 3:30 PM-7 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13767.153737852772!2d78.92704999192172!3d17.588482288037955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbee750a6884b%3A0x84eb9a257d92679c!2sShri%20Sita%20Rama%20Chandra%20Swami%20Temple%2C%20Ammapally!5e1!3m2!1sen!2sin!4v1733160062483!5m2!1sen!2sin"
    }

}

let resdetails={
    "Barbeque-Spices-card":{
        avgprice:"₹1,900 for two people",
        rating:"4.5",
        timing:"12pm-11pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60909.16423864585!2d78.46976741441708!3d17.420291212479313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBarbeque%20Nation!5e0!3m2!1sen!2sin!4v1734266419737!5m2!1sen!2sin"
    },
    "bawarchi-card":{
        avgprice:"₹700 for two people",
        rating:"4.5",
        timing:"12 pm–11:30 pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60909.16706137987!2d78.46976735255612!3d17.420282749979595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbawarchi!5e0!3m2!1sen!2sin!4v1734268204980!5m2!1sen!2sin"
    },
    "Fisherman's-Wharf-card":{
        avgprice:"₹1,800 for two people",
        rating:"4.0",
        timing:"12pm-11pm",
        map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0189525832734!2d78.32921617493525!3d17.41087808348032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94843eae2847%3A0x5c423ce28f4d1ed0!2sThe%20Fisherman&#39;s%20Wharf!5e0!3m2!1sen!2sin!4v1734269540648!5m2!1sen!2sin"
    },
    "platform 65-card":{
        avgprice:"₹1,100 for two people ",
        rating:"4.0",
        timing:"11:30 am–11 pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d176329.92727921304!2d78.41361632365276!3d17.507390568820007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splatform%2065!5e0!3m2!1sen!2sin!4v1734268475947!5m2!1sen!2sin"
    },
    "pista house-card":{
        avgprice:"₹1,000 for two people ",
        rating:"4.8",
        timing:"11 am–12 am",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243520.26033192503!2d78.41361580485095!3d17.50731926126753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spista%20house!5e0!3m2!1sen!2sin!4v1734268583371!5m2!1sen!2sin"
    },
    "Flechazo-card":{
        avgprice:"₹1,800 for two people",
        rating:"4.1",
        timing:"11:30 am–3:30 pm, 6:30 pm–10:30 pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243520.4426811318!2d78.41361481522028!3d17.50718324923531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sflechazo%20restaurant!5e0!3m2!1sen!2sin!4v1734268751996!5m2!1sen!2sin"
    },
    "Mehfil-card":{
        avgprice:"₹700 for two people",
        rating:"4.1",
        timing:"11 am–12 am",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243520.62502773092!2d78.41361382558885!3d17.50704723812479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMehfil!5e0!3m2!1sen!2sin!4v1734268812632!5m2!1sen!2sin"
    },
    "swagath-card":{
        avgprice:"₹850 for two people",
        rating:"4.0",
        timing:"7:30 am–11:30 pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243520.8073717221!2d78.41361283595673!3d17.50691122793597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sswagath%20restaurant!5e0!3m2!1sen!2sin!4v1734269301368!5m2!1sen!2sin"
    },

}

document.addEventListener("DOMContentLoaded", function () {
    // Select all cards
    const cards = document.querySelectorAll(".card");
    const popUp = document.getElementById("popUp");
    const popUpImg = document.getElementById("popUpImg");
    const placeName = document.getElementById("placeName");
    const closePopUp = document.getElementById("closePopUp");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const cardId = card.id;
            if(placeDetails[cardId]) {
                const details = placeDetails[cardId];
                let text=card.querySelector(".placeText").textContent;
                placeName.textContent = text;
                const imgSrc = card.querySelector(".placePhoto").src;
                popUpImg.src = imgSrc;

                document.querySelector("#flush-collapseOne .accordion-body").textContent = `Aldut:-${details.adultTicketPrice},\nChild:- ${details.childernTicketPrice},\nForeigner:- ${details.ForeignerTicketPrice}`
                document.querySelector("#flush-collapseTwo .accordion-body").textContent = details.foodPrice;
                document.querySelector("#flush-collapseThree .accordion-body").textContent =details.timings;
                document.getElementById("googleMap").src=details.MapLink;
                document.body.classList.add("blur-background"); 
                popUp.style.display = "block";
                document.body.style.overflow="hidden";
                document.getElementById("hydContent").style.opacity=0.6;
                document.getElementById("carouselExampleIndicators1").style.opacity=0.6;
                document.getElementById("carouselExampleIndicators2").style.opacity=0.6;
                document.getElementById("carouselExampleIndicators3").style.opacity=0.6;


            }
            else if(resdetails[cardId]) {
                const res = resdetails[cardId];
                let text=card.querySelector(".placeText").textContent;
                placeName.textContent = text;
                const imgSrc = card.querySelector(".placePhoto").src;
                popUpImg.src = imgSrc;
                document.querySelector("#Acc_TextOne").textContent="Average Food Price"
                document.querySelector("#flush-collapseOne .accordion-body").textContent = `${res.avgprice}`;
                document.querySelector("#Acc_TextTwo").textContent="Rating";
                document.querySelector("#flush-collapseTwo .accordion-body").textContent = res.rating;
                document.querySelector("#flush-collapseThree .accordion-body").textContent =res.timing;
                document.getElementById("googleMap").src=res.map;
                document.body.classList.add("blur-background"); 
                popUp.style.display = "block";
                document.body.style.overflow="hidden";
                document.getElementById("hydContent").style.opacity=0.6;
                document.getElementById("carouselExampleIndicators1").style.opacity=0.6;
                document.getElementById("carouselExampleIndicators2").style.opacity=0.6;
                document.getElementById("carouselExampleIndicators3").style.opacity=0.6;
                document.getElementById("footerdiv").style.opacity=0.6;

            }
        });
    });

    // Close popup
    closePopUp.addEventListener("click", function () {
        popUp.style.display = "none";
        document.body.style.overflow="auto";
        document.getElementById("hydContent").style.opacity=1;
        document.getElementById("carouselExampleIndicators1").style.opacity=1;
        document.getElementById("carouselExampleIndicators2").style.opacity = 1;
        document.getElementById("carouselExampleIndicators3").style.opacity = 1;
        document.getElementById("footerdiv").style.opacity=1;


    });
});


// -------------------------------------media quries-------------------------
