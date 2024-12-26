//E1AFD1    , 9DDE8B    729762  859F3D  006A67  219B9D  
let explore_Btn=document.getElementsByClassName("explorebtn");
for (let btn of explore_Btn) {
    btn.innerHTML = `Explore <i class="fa-solid fa-arrow-right"></i>`;
}
let colorcolor=document.getElementById("")
let oneQuote=document.getElementById("quote");
let quotesHYD=["Hyderabad’s charm lies in its rich, diverse heritage","A city where art, history, and talent thrive together","Hyderabad’s soul reflects through its culture, history, and talent","A blend of tradition, innovation, and artistic expression","Hyderabad’s history, culture, and talent create unique magic","Hyderabad, where culture, history, and talent shine together","From Charminar to modern tech, Hyderabad embraces all talents","Hyderabad’s legacy of talent and culture stands eternal","Hyderabad’s landmarks tell stories of a royal past","Hyderabad is where old traditions blend with technology","From the Nizams to modernity, Hyderabad’s journey fascinates","Hyderabad’s streets echo stories of ancient grandeur","Hyderabad’s biryani is a culinary delight, unmatched anywhere","Legacy, culture, and innovation converge in Hyderabad’s heart","Biryani and smiles – the Hyderabad way of life","Hyderabad, a city that fills your heart and plate","Hyderabad’s magic? It’s in the smiles and spices","Hyderabad, where history and heart meet with a smile","From Charminar to biryani, Hyderabad steals your heart"]


let quoteColor=["#474E93","#213555","#8D0B41","#001A6E","#543A14","#4B5945","#F26B0F","#441752","#355F2E","#640D5F","#1C325B","#1F4529","#4C1F7A","#1A1A1D","#3B1C32","#FFE31A","#EC8305","#A66E38","#D91656","#4E31AA","#800000","#921A40","#1A3636","#E4003A","#000000","#059212","#06D001","#FF0000","#A34343","#12372A","#232D3F","#750E21"]

const randomquotes = Math.floor(Math.random() * quotesHYD.length);
const randomColor = Math.floor(Math.random() * quoteColor.length);
oneQuote.textContent=quotesHYD[randomquotes];
oneQuote.style.color=quoteColor[randomColor];

let description_box=document.getElementById("hydContentinner");
let description_color=["black","green","#0B3e33","#365E32","#800000"]
const desc_color=Math.floor(Math.random() *description_color.length)
description_box.style.color=description_color[desc_color];
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
        "statue of equality":"Statue_of_equality-card",
        "jalavihar":"Jalavihar-card",
        "medak chruch":"medak-chruch-card",
        "swarnagiri temple":"Swarnagiri-Temple-card",
        "yadagirigutta":"Yadagirigutta-card",
        "rachakonda fort":"Rachakonda-Fort-card",
        "ammapalli-temple":"Ammapalli-Temple-card",
        "barbeque spices":"Barbeque-Spices-card",           //resturant
        "bawarchi":"bawarchi-card",
        "paradise":"paradise-card",
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


    let err_block=document.getElementById("Error_popup"); //error popups
    let Err_icon=document.getElementById("ErrorIcon");
    let Msg=document.getElementById("Message");
    let ErrDescrip=document.getElementById("errorDesc")

    loginFormContainer.style.display = "none";
    signUpFormContainer.style.display = "none";

    // if(!loggedIn){
    //     setTimeout(()=>{
    //         loginFormContainer.style.display="block"
    //         signUpFormContainer.style.display="none"
    //         document.body.style.overflow="hidden";
    //     },20000)
    // }

    signInButton.addEventListener("click", () => {  //display Login
        if(signInButton.textContent==="Sign Out"){
            signInButton.textContent="Sign In"
        }
        else{
            let loggedIn=localStorage.getItem("loggedIn");
            loginFormContainer.style.display = "block";
            signUpFormContainer.style.display = "none";
            document.body.style.overflow="hidden";          //scrolling stops
        }
    });

    signUpLink.addEventListener("click", (event) => {//display signUp
        event.preventDefault();
        loginFormContainer.style.display = "none";
        signUpFormContainer.style.display = "block";
    });
    formBlock=false;
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
                err_block.style.display="block";
                err_block.style.borderColor="red";
                Err_icon.innerHTML=`<i id="cross" class="fa-solid fa-x"></i>` ;
                cross_sbl=document.getElementById("cross");
                cross_sbl.style.color="red";

                Msg.textContent="User Name Validation Error"  ;
                ErrDescrip.textContent="Please enter at least 2 characters";
                // document.getElementById("nameerr").textContent = "Please enter at least 2 characters.";
                valid = false;
                signUpFormContainer.style.display = "none";

            }
            if (!emailExp.test(mail)) {
                err_block.style.display="block";
                err_block.style.borderColor="red";
                Err_icon.innerHTML=`<i id="cross" class="fa-solid fa-x"></i>` ;
                cross_sbl=document.getElementById("cross");
                cross_sbl.style.color="red";
                
                Msg.textContent="Email Validation Error"  ;
                ErrDescrip.textContent="Please enter a valid email.";
                // document.getElementById("mailerr").textContent = "Please enter a valid email.";
                valid = false;
                signUpFormContainer.style.display = "none";

            }
            if (!pswdExp.test(pswd)) {
                err_block.style.display="block";
                err_block.style.borderColor="red";
                Err_icon.innerHTML=`<i id="cross" class="fa-solid fa-x"></i>` ;
                cross_sbl=document.getElementById("cross");
                cross_sbl.style.color="red";
                Msg.textContent="Password Validation Error"  ;
                ErrDescrip.innerHTML=`8-15 Characters<br>at least 1 uppercase<br>at least 1 lowercase letter<br>at least 1 Number<br>at least 1 Special Character`;
                // document.getElementById("pswderr").textContent ="Password must be 8-15 characters with at least one uppercase letter, one lowercase letter, one number, and one special character.";
                valid = false;
                signUpFormContainer.style.display = "none";
            }

            if (valid) {
                localStorage.setItem("mailVerify", mail);
                localStorage.setItem("pswdVerify", pswd);

                err_block.style.display="block";
                Err_icon.innerHTML=`<i id="tick" class="fa-solid fa-check"></i>` ;
                Err_icon.style.borderColor="green"
                tick_sbl=document.getElementById("tick");
                tick_sbl.style.color="green",
                
                Msg.textContent="You have successfully Signed Up"  ;
                ErrDescrip.textContent="Redirecting to LogIn Page"

                signUpFormContainer.style.display = "none";

            }
            CloseErr.addEventListener("click", function () {
                err_block.style.display="none";
                
                if(valid){
                    document.getElementById("signup_name").value="";
                    document.getElementById("signup_mail").value="";
                    document.getElementById("signup_pswd").value="";
                    loginFormContainer.style.display = "block";
                    signUpFormContainer.style.display = "none";


                }
                else{
                    signUpFormContainer.style.display = "block";
                }
            } );
        });
    }
    

// --------------------------Login Form---------------------------------------

    
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const savedMail = localStorage.getItem("mailVerify");
            const savedPswd = localStorage.getItem("pswdVerify");
            const loginMailEle = document.getElementById("loginmail")
            const loginPswdEle = document.getElementById("loginpswd")
            const loginMail=loginMailEle.value.trim();
            const loginPswd=loginPswdEle.value.trim();
            if (loginMail === savedMail && loginPswd === savedPswd) {
                err_block.style.display="block";
                Err_icon.innerHTML=`<i id="tick" class="fa-solid fa-check"></i>` ;
                Err_icon.style.borderColor="green"
                tick_sbl=document.getElementById("tick");
                tick_sbl.style.color="green",
                
                Msg.textContent="You have successfully Logged in"  ;
                ErrDescrip.textContent="Redirecting to the website...";
                loginFormContainer.style.display = "none";
                document.body.style.overflow="auto";
                formBlock=true;
            } 
            else if(loginMail === savedMail && loginPswd != savedPswd){
                err_block.style.display="block";
                Err_icon.innerHTML=`<i id="cross" class="fa-solid fa-x"></i>` ;
                Err_icon.style.borderColor="red",
                cross_sbl=document.getElementById("cross");
                cross_sbl.style.color="red";

                Msg.textContent="Invalid Password"  ;
                ErrDescrip.textContent="Password is Not Matched ! Please try again";
                loginFormContainer.style.display = "none";
                formBlock=false;

            }
            else {
                    err_block.style.display="block";
                    Err_icon.innerHTML=`<i id="cross" class="fa-solid fa-x"></i>` ;
                    Err_icon.style.borderColor="red",
                    cross_sbl=document.getElementById("cross");
                    cross_sbl.style.color="red";

                    Msg.textContent="User Not Found"  ;
                    ErrDescrip.textContent="Invalid credentials! Please try again";
                    loginFormContainer.style.display = "none";
                    formBlock=false;


            }
            CloseErr.addEventListener("click", function () {
                err_block.style.display="none";
                loginMailEle.value = "";
                loginPswdEle.value= "";
                Err_icon.style.borderColor="";
                if(formBlock===true){
                    loginFormContainer.style.display = "none";
                    signInButton.textContent="Sign Out"
                }else{
                    loginFormContainer.style.display = "block";
                }
            } );
            
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
        About_Place:`<b>CHOWMALLA PALACE</b> is a stunning historical landmark located in <b>HYDERABAD</b>, India. Built in the 18th century by the Nizams of Hyderabad, it served as the official residence and seat of the Nizam's government. The palace complex is renowned for its magnificent <b>ARCHITECTURE</b>, blending Persian, Mughal, and European styles. It features elegant courtyards, grand halls, and beautifully landscaped gardens, making it a masterpiece of royal design. One of the most striking features of Chowmalla Palace is its <b>CLOCK TOWER</b>, which adds a regal charm to the entire complex.<br><br>
        The palace is also famous for its collection of rare <b>ANTIQUES</b>, including vintage cars and artifacts that reflect the grandeur of the Nizam era. Visitors can explore the opulent rooms, including the <b>DURBAR HALL</b>, which was used for royal gatherings and ceremonies. Today, Chowmalla Palace stands as a symbol of Hyderabad's rich history, attracting tourists and history enthusiasts from all over the world.`

    },
    "golconda-card":{
        adultTicketPrice:"₹25 per person",
        childernTicketPrice:"₹15 per person",
        ForeignerTicketPrice:"₹300 per person",
        foodPrice:"200-250 rupees per person",
        timings:"9 AM - 5:30 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6564248165278!2d78.39933427462691!3d17.384205902897847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb968ea6aea98f%3A0x6b76ecdfd65a335a!2sGolconda%20Fort!5e1!3m2!1sen!2sin!4v1733075385068!5m2!1sen!2sin",
        About_Place:`<b>GOLCONDA</b> is a magnificent fortress located in <b>HYDERABAD</b>, India, with a rich history dating back to the 13th century. Originally built as a mud fort by the Kakatiya dynasty, it was later expanded by the Qutb Shahi rulers in the 16th century into a grand structure. Known for its impressive <b>ARCHITECTURE, GOLCONDA</b> features massive stone walls, elaborate gates, and numerous bastions, showcasing the brilliance of medieval engineering. The fort is famous for its <b>AERODYNAMIC WATER SYSTEM</b> and echo system, which were ingeniously designed to communicate across vast distances.
        <br><br><b>GOLCONDA</b> was also a thriving center of diamond trade and is home to the legendary <b>KOH-I-NOOR</b> and <b>GREAT MOGUL</b> diamonds. The stunning views from the top of the fort, overlooking the city, and the beauty of its surroundings make it a popular tourist destination. Today, <b>GOLCONDA</b> stands as a symbol of historical grandeur and architectural marvel, attracting visitors from around the world.`

    },
    "hussain-sagar-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"100-150 rupees per person",
        timings:"8 AM - 10 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27559.284057662644!2d78.45371788252629!3d17.423779888852458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHussain%20Sagar%20Lake!5e1!3m2!1sen!2sin!4v1733081311850!5m2!1sen!2sin",
        About_Place:`<b>HUSSAIN SAGAR</b> is a large artificial lake located in the heart of <b>HYDERABAD</b>, India. Built in 1563 by the Qutb Shahi dynasty, it was originally intended to meet the water needs of the city. The lake is famous for its <b>BUDDHA STATUE</b>, which stands on an island in the center, making it a major attraction. The statue, one of the largest of its kind, symbolizes peace and harmony.<br><br>
        The surrounding area of Hussain Sagar is beautifully landscaped with parks and promenades, offering scenic views of the lake and the city skyline. Visitors can enjoy boat rides on the lake, providing a unique perspective of the statue and the city. The <b>LAKE FRONT</b> is a popular spot for evening walks and gatherings. Over the years, Hussain Sagar has become an iconic symbol of Hyderabad, blending natural beauty with historical significance, and continues to draw tourists from around the world.`

    },
    "charminar-card":{
        adultTicketPrice:"₹25 per person",
        childernTicketPrice:"₹15 per person",
        ForeignerTicketPrice:"₹300 per person",
        foodPrice:"200 -300 rupees per person",
        timings:"9:30 AM - 5:30 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1723.0468951390637!2d78.47174783842624!3d17.360961217702297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scharminar!5e1!3m2!1sen!2sin!4v1733030535677!5m2!1sen!2sin",
        About_Place:`The <b>CHARMINAR</b>, built in <b>1591 by Muhammad Quli Qutb Shah</b>, is a majestic symbol of Hyderabad's history and culture. Constructed to commemorate the end of a devastating plague and mark the founding of Hyderabad, this architectural marvel stands as a testament to the city's rich heritage. Its name, meaning <b>"FOUR TOWERS,</b>" reflects its symmetrical design with four grand minarets, each rising to 56 meters.<br><br>
        Blending <b>INDO-ISLAMIC and PERSIAN STYLES, </b>the Charminar is made of limestone and granite, featuring stunning arches and intricate motifs. The western side houses a mosque, adding spiritual significance to its elegance.
        Surrounded by bustling markets like <b>LAAD BAZAAR</b>, known for bangles and pearls, the Charminar is a vibrant cultural hub. Its timeless beauty, especially when illuminated at night, draws visitors worldwide, making it a treasured landmark and a true representation of Hyderabad's legacy.`

    },
    "Mecca-Masjid-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"200 -300 rupees per person",
        timings:"4 AM - 9:30 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27571.5093259406!2d78.46197623241422!3d17.34261081132621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMecca%20Masjid!5e1!3m2!1sen!2sin!4v1733081476175!5m2!1sen!2sin",
        About_Place:`<b>MECCA MASJID</b> is one of the largest and most prominent mosques in <b>HYDERABAD</b>, India. Located near <b>CHARMINAR</b>, it was constructed during the reign of the Qutb Shahi dynasty in the 17th century. The mosque gets its name from the sacred city of <b>MECCA</b>, as the bricks used in its construction were believed to be brought from there. The mosque is an excellent example of Mughal-style architecture, with stunning **ARCHWAYS** and intricate carvings that adorn its walls.<br><br>
        The prayer hall is vast and can accommodate thousands of devotees, making it a significant place of worship. The mosque also features an impressive <b>MINARET</b> and a beautiful courtyard. The serene atmosphere and architectural grandeur of <b>MECCA MASJID</b> attract both worshippers and tourists alike. It stands as a symbol of the rich cultural heritage of Hyderabad and continues to be a vital religious and historical landmark in the city.`

    },
    "Jagannath-Temple-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"150 -300 rupees per person",
        timings:"6 AM - 12 PM and 5-9 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.072583231173!2d78.42354197462758!3d17.41518850200466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96d70ff8b6f3%3A0xde370030b7d7d2fe!2sShri%20Jagannatha%20Swami%20Temple!5e1!3m2!1sen!2sin!4v1733082008890!5m2!1sen!2sin",
        About_Place:`The <b>JAGANNATH TEMPLE</b> in <b>HYDERABAD</b> is a relatively new temple, constructed in <b>2009</b> by the <b>ODIA COMMUNITY</b> of the city. Dedicated to <b<LORD JAGANNATH</b>, the temple is renowned for its annual <b>RATHYATRA FESTIVAL</b>, attracting thousands of devotees. The temple's architecture is inspired by the Puri Jagannath Temple in Odisha, featuring intricate carvings and a towering Shikhara.<br><br>   
        The temple complex houses several shrines, including those for<b> LAKSHMI, SHIVA, GANESH, HANUMAN</b>, and the <b>NAVAGRAHAS</b>. The main shrine houses the deities of Lord Jagannath, Lord Balabhadra, and Devi Subhadra. The serene ambiance and spiritual significance of the temple make it a popular pilgrimage site for devotees and tourists alike`

    },
    "Salarjung-Museum-card":{
        adultTicketPrice:"₹20 per person",
        childernTicketPrice:"₹10 per person",
        ForeignerTicketPrice:"₹500 per person",
        foodPrice:"100-200 rupees per person",
        timings:"10 AM - 5 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3445.8948884045717!2d78.47773602462661!3d17.371536003262687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%20%20%20%20%22Salarjung-Museum!5e1!3m2!1sen!2sin!4v1733082145148!5m2!1sen!2sin",
        About_Place:`The <b>SALAR JUNG MUSEUM</b> in <b>HYDERABAD</b> is one of the world's largest one-man collection museums. It was established in <b>1951</b> and houses a vast array of <b>ARTIFACTS</b> from around the world. The museum's collection includes exquisite <b>JEWELRY, SCULPTURES, PAINTINGS, CLOCKS</b>, and <b>TEXTILES</b>. The museum's architectural style is a blend of <b>MUGHAL</b> and <b>EUROPEAN</b> influences, creating a unique and captivating ambiance.  <br><br> 
        The museum's most famous artifact is the <b>MECHINELL CLOCK</b>, a masterpiece of horological engineering. Other notable exhibits include the <b>VEILED REBECCA</b> sculpture and a collection of <b>TIPU SULTAN</b> artifacts. The Salar Jung Museum offers visitors a fascinating journey through history and culture, making it a must-visit destination in Hyderabad. Sources and related content`
    },
    "shilparamam-card":{
        adultTicketPrice:"₹60 per person",
        childernTicketPrice:"₹40 per person",
        ForeignerTicketPrice:"₹60 per person",
        foodPrice:"100-150 rupees per person",
        timings:"10:30 AM - 8 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.36666563716!2d78.37573157462838!3d17.452578100924978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dbf996589d%3A0xd5b5d3b90d993301!2sShilparamam%20Art%20%26%20Craft%20Village!5e1!3m2!1sen!2sin!4v1733082482833!5m2!1sen!2sin",
        About_Place:`<b>SHILPARAMAM</b> is a unique <b>ART VILLAGE</b> located in <b>HYDERABAD</b>. Established in <b>1994</b>, it is a hub for artisans and craftsmen from across India. The village showcases a wide range of traditional Indian >b>CRAFTS</b> and <b>ARTS</b>. Visitors can witness live demonstrations of various crafts, including pottery, weaving, metalwork, and wood carving.<br><br>
        The village is designed to resemble a traditional Indian village, with thatched-roof huts and narrow lanes. The serene atmosphere and beautiful surroundings make it a perfect place to relax and appreciate the beauty of Indian handicrafts. Shilparamam also hosts cultural events and festivals throughout the year, offering visitors a glimpse into India's rich cultural heritage. Sources and related content.`
    },
    "ramoji-film-card":{
        adultTicketPrice:"₹1,250 per person",
        childernTicketPrice:"₹1,050 per person",
        ForeignerTicketPrice:"₹1,250 per person",
        foodPrice:"500-1000 rupees per person",
        timings:"9 AM - 5:30 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6894.043101678295!2d78.6782698901514!3d17.311553340387007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb0aed7788a7d1%3A0xa0149728f13306f0!2sRamoji%20Film%20City!5e1!3m2!1sen!2sin!4v1733157087262!5m2!1sen!2sin",
        About_Place:`<b>RAMOJI FILM CITY</b> in <b>HYDERABAD</b> is the world's largest integrated film studio complex. Established in <b>1996</b>, it sprawls across over <b>2,000 acres</b> and houses a diverse range of film production facilities. The complex boasts a variety of SETS replicating various historical and contemporary locations, including ancient Indian kingdoms, European cities, and futuristic landscapes.<br><br>
        The film city offers a unique blend of <b>ENTERTAINMENT</b> and education. Visitors can explore the various film sets, witness live film shoots, and participate in exciting activities like stunt shows and dance performances. The complex also houses a theme park, a convention center, and a luxury hotel, making it a popular tourist destination.  `
    },
    "Statue_of_equality-card":{
        adultTicketPrice:"₹200 per person",
        childernTicketPrice:"₹125 per person",
        ForeignerTicketPrice:"₹1530 per person",
        foodPrice:"400 rupees per person",
        timings:"8 AM - 6 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.3719205985763!2d78.3308186746227!3d17.18576820858314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbb910f959883b%3A0xba967f2e03f099ab!2sStatue%20Of%20Equality%20%7C%20108%20DivyaDesams!5e1!3m2!1sen!2sin!4v1735063456269!5m2!1sen!2sin",
        About_Place:`The <b>STATUE OF EQUALITY</b> is a magnificent 216-foot-tall golden statue of the 11th-century Indian philosopher RAMANUJA, located near Hyderabad. Unveiled in <b>2022</b>, it commemorates his <b>1000th</b> birth anniversary. Ramanuja was a proponent of <b>SOCIAL EQUALITY</b> and a key figure in <b>VAISHNAVISM</b>.<br><br>
        The statue stands on a 45-acre complex and features a museum, a research center, and a Vedic library. It is a significant pilgrimage site and a testament to Ramanuja's enduring legacy of promoting inclusivity and spiritual enlightenment.`
    },
    "Jalavihar-card":{
        adultTicketPrice:"₹349 per person",
        childernTicketPrice:"₹249 per person",
        ForeignerTicketPrice:"₹800 per person",
        foodPrice:"450 rupees per person",
        timings:"11 AM - 7 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6889.64472136397!2d78.45860148981747!3d17.42845067019389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sjalvihar!5e1!3m2!1sen!2sin!4v1733030812223!5m2!1sen!2sin",
        About_Place:`<b>JALVIHAR</b> is a popular<b> WATER PARK</b> located in <b>HYDERABAD</b>. It is a great place for. <b>FAMILY FUN</b> and <b>ENTERTAINMENT</b>. The park offers a variety of water rides and slides, including thrilling water coasters, lazy rivers, and splash pools.<br><br>
        The park is well-maintained and offers a clean and hygienic environment. The lush green surroundings and the cool water provide a much-needed respite from the hot Hyderabad climate. Jalvihar is a perfect place to spend a fun-filled day with friends and family.`
    },
    "medak-chruch-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"200-250 rupees per person",
        timings:"6 AM - 6 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716.4117540408681!2d78.26454799622302!3d18.05333119011758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bd4e5a894b3%3A0xf6fba740712d4e02!2sMedak%20Cathedral!5e1!3m2!1sen!2sin!4v1733157802643!5m2!1sen!2sin",
        About_Place:`The <b>MEDAK CATHEDRAL</b> is a prominent <b>CHRISTIAN PILGRIMAGE</b> site located in <b>MEDAK</b>, a district near <b>HYDERABAD</b>. Built in <b>1914</b>, it is one of the largest churches in Asia. The cathedral's imposing architecture is a blend of <b>GOTHIC</b> and <b>ROMANESQUE</b> styles, with soaring spires, stained glass windows, and intricate stone carvings.<br><br>
        The cathedral's interior is equally impressive, with high ceilings, ornate altars, and beautiful frescoes. It is a popular destination for both religious pilgrims and tourists. The annual <b>MEDAK CHRISTMAS</b> celebrations are particularly famous, attracting thousands of visitors.`
        
    },
    "Swarnagiri-Temple-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"100-150 rupees per person",
        timings:"6 AM - 1 PM and 3-9 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110194.7616005343!2d78.72862520425072!3d17.493820800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb6fd9a3dac9f5%3A0xf04c28e0a4feefd7!2sSwarnagiri%20Sree%20Venkateswara%20Swamy%20Devasthanam!5e1!3m2!1sen!2sin!4v1733158492249!5m2!1sen!2sin",
        About_Place:`The <b>SWARNAGIRI TEMPLE</b> is a significant <b>RELIGIOUS SITE</b> located in <b>HYDERABAD</b>. It is situated atop a hill, offering panoramic views of the city. The temple is dedicated to <b>LORD VENKATESWARA</b>, a form of <b>LORD VISHNU</b>. The temple complex is spread across several acres and features various shrines, including those dedicated to <b>LORD BALAJI</b>, <b>GODDESS PADMAVATI</b>, and <b>LORD GANESHA</b>.<br><br>
        The temple's architecture is a blend of <b>DRAVIDIAN and VISHWAKARMA</b> styles. The main temple is a magnificent structure with intricate carvings and sculptures. The temple also houses a sacred <b>TULASI PLANT</b> and a <b>DIVINE TREE</b>. The serene atmosphere and spiritual significance of the temple make it a popular pilgrimage destination for devotees.`
    },
    "Yadagirigutta-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"200-250 rupees per person",
        timings:"7:15 AM-12:30 PM and 4 PM-7 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13767.153737852772!2d78.92704999192172!3d17.588482288037955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb66630166cccd%3A0x24b91e71a60c48c2!2sYadagirigutta%20Sri%20Lakshmi%20Narasimha%20Swamy%20Devastanam!5e1!3m2!1sen!2sin!4v1733159337753!5m2!1sen!2sin",
        About_Place:`<b>YADAGIRIGUTTA</b> is a prominent <b>HILL TEMPLE TOWN</b> dedicated to <b>LORD VENKATESHWARA</b>. Located in Yadadri Bhuvanagiri district of Telangana, India, it is a significant pilgrimage site for Hindus. The temple complex is spread across a hill, offering panoramic views of the surrounding countryside.<br><br>
        The main temple, built in the <b>DRAVIDIAN STYLE</b> of architecture, is adorned with intricate carvings and sculptures. The sanctum sanctorum houses the idol of Lord Venkateshwara, which is believed to be <b>SELF-MANIFESTED</b>. The temple complex also includes several other shrines dedicated to various Hindu deities. The annual Brahmotsavam festival, held at the temple, is a major attraction for devotees`
    },
    "Rachakonda-Fort-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"300 rupees",
        timings:"7 AM-11 AM and 1 PM-4 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6889.64472136397!2d78.45860148981747!3d17.42845067019389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb0f766c14f5c1%3A0x621f20eae0c6a199!2sRachakonda%2C%20Telangana%20508252!5e1!3m2!1sen!2sin!4v1733030932100!5m2!1sen!2sin",
        About_Place:`The <b>RACHAKONDA FORT</b> is a magnificent <b>FORT</b> located in <b>WARANGAL</b>, Telangana. Built in the <b>12th</b> century by the Kakatiya dynasty, this imposing structure stands as a testament to the architectural prowess of the era. The fort is spread across a sprawling area and is surrounded by a deep moat.<br><br>The fort complex houses several structures, including the <b>RAMA TEMPLE</b>, the <b>GANESH TEMPLE</b>, and the <b>KALYANI</b>. The <b>RAMA TEMPLE</b> is particularly renowned for its intricate carvings and sculptures. The fort offers breathtaking views of the surrounding countryside and is a popular tourist destination.`
    },
    "Ammapalli-Temple-card":{
        adultTicketPrice:"No entry fee",
        childernTicketPrice:"No entry fee",
        ForeignerTicketPrice:"No entry fee",
        foodPrice:"100-150 rupees per person",
        timings:"6:30 AM-1 PM and 3:30 PM-7 PM",
        MapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13767.153737852772!2d78.92704999192172!3d17.588482288037955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbee750a6884b%3A0x84eb9a257d92679c!2sShri%20Sita%20Rama%20Chandra%20Swami%20Temple%2C%20Ammapally!5e1!3m2!1sen!2sin!4v1733160062483!5m2!1sen!2sin",
        About_Place:`The <b>AMMAPALLI TEMPLE</b> is an ancient Hindu temple located in <b>WARANGAL</b>, Telangana. Built during the <b>KAKATIYA DYNASTY</b> in the <b>12th CENTURY</b>, it is dedicated to <b>LORD SHIVA</b>. The temple is renowned for its exquisite <b>TELUGU SCRIPT</b> inscriptions, which provide valuable insights into the history, culture, and language of the Kakatiya era.<br><br>
        The temple complex comprises several shrines, including the main shrine dedicated to Lord Shiva. The intricate carvings on the temple walls depict various mythological scenes, including those from the Puranas. The temple's unique architectural style, characterized by its ornate pillars and delicate carvings, reflects the artistic brilliance of the Kakatiya period. The Ammapalli Temple stands as a testament to the rich cultural heritage of Telangana.`
    }

}

let resdetails={
    "Barbeque-Spices-card":{
        avgprice:"₹1,900 for two people",
        rating:"4.5",
        timing:"12pm-11pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60909.16423864585!2d78.46976741441708!3d17.420291212479313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBarbeque%20Nation!5e0!3m2!1sen!2sin!4v1734266419737!5m2!1sen!2sin",
        About_Place:`<b>BARBEQUE-SPICES</b>, a renowned restaurant chain, was established in 2010. Renowned for its unforgettable grilling experience, it quickly gained popularity among Hyderabad's residents. With multiple branches across the city, including Gachibowli, Banjara Hills, and Ameerpet, BARBEQUE-SPICES offers a diverse selection of vegetarian and non-vegetarian dishes.<br><br>
        The restaurant's signature live grills allow diners to savor freshly cooked delicacies. From succulent kebabs and grilled seafood to flavorful vegetables, the menu caters to every palate. The average cost of a buffet meal ranges from <b>INR 600 to INR 800</b>, making it an <b>affordable</b> dining option. Barbeque-Spices is highly regarded for its exceptional food quality and lively ambiance, making it a preferred choice for celebrations and casual outings.`
    },
    "bawarchi-card":{
        avgprice:"₹700 for two people",
        rating:"4.5",
        timing:"12 pm–11:30 pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60909.16706137987!2d78.46976735255612!3d17.420282749979595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbawarchi!5e0!3m2!1sen!2sin!4v1734268204980!5m2!1sen!2sin",
        About_Place:`<b>BAWARCHI</b>, a legendary name in Hyderabad's culinary scene, has been serving authentic Hyderabadi cuisine for over three decades. Established in <b>1987</b>, the restaurant has gained a loyal following for its inimitable flavors and unparalleled quality.<br><br>
        <b>BAWARCHI</b> offers a diverse menu featuring classic Hyderabadi dishes like<b> Biryani, Haleem</b>, and <b>Qubani Ka Meetha</b>. The restaurant boasts multiple branches across Hyderabad, ensuring accessibility for food enthusiasts. The average cost of a meal at BAWARCHI is moderate, making it an affordable option for a delightful dining experience. The restaurant's focus on authentic flavors and generous portions has consistently garnered praise from patrons.`
    },
    "paradise-card":{
        avgprice:"₹1,000 for two people",
        rating:"4.0",
        timing:"11pm-11pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d220545.39576712056!2d78.31450537988326!3d17.364788890982805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sparadise!5e1!3m2!1sen!2sin!4v1735065220204!5m2!1sen!2sin",
        About_Place:`The <b>PARADISE RESTAURANT</b> is a renowned dining destination in <b>HYDERABAD</b>, famous for its delectable Biryani and other South Indian delicacies. Established in <b>1953</b>, it has become a <b>CULINARY INSTITUTION</b>, attracting both locals and tourists alike.<br><br>
        The restaurant's ambiance is a blend of traditional and modern, offering a comfortable and inviting dining experience. The menu features a wide array of dishes, including signature Biryani varieties like Hyderabadi <b>Biryani</b> and <b>Dum Biryani</b>, along with a selection of South Indian specialties such as <b>Dosas, Idlis</b>, and <b>Vadas</b>. The average price per person is around <b>₹500-₹800</b>.`
    },
    "platform 65-card":{
        avgprice:"₹1,100 for two people ",
        rating:"4.0",
        timing:"11:30 am–11 pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d176329.92727921304!2d78.41361632365276!3d17.507390568820007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splatform%2065!5e0!3m2!1sen!2sin!4v1734268475947!5m2!1sen!2sin",
        About_Place:`<b>PLATFORM 65</b>, a unique dining experience, was born from a passion for innovative cuisine. This restaurant, known for its eclectic menu and vibrant atmosphere, has quickly become a favorite among Hyderabad's food enthusiasts.<br<br>
        Platform 65 boasts a diverse menu that blends Indian and international flavors. From wood-fired pizzas and succulent grilled meats to flavorful Asian stir-fries and delectable desserts, the restaurant offers a culinary journey for every palate. The average cost per person ranges from <b>INR 800 to INR 1200</b>, making it a mid-range dining option. The restaurant's focus on fresh, high-quality ingredients and creative presentations ensures a memorable dining experience. Platform 65 currently operates a single location in Hyderabad, strategically positioned to cater to the city's discerning diners`
    },
    "pista house-card":{
        avgprice:"₹1,000 for two people ",
        rating:"4.8",
        timing:"11 am–12 am",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243520.26033192503!2d78.41361580485095!3d17.50731926126753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spista%20house!5e0!3m2!1sen!2sin!4v1734268583371!5m2!1sen!2sin",
        About_Place:`<b>PISTA HOUSE</b>, a legendary institution in Hyderabad, has been serving authentic Hyderabadi cuisine for over <b>70 years</b>. Established in <b>1943</b>, Pista House has built a reputation for its irresistible Haleem, a slow-cooked meat and lentil stew, which is particularly popular during the holy month of Ramadan. Their menu also features a variety of other Hyderabadi delicacies, such as <b>Biryani, Kebabs</b>, and <b>Nihari</b>.<br><br>
        Pista House has multiple branches across Hyderabad, ensuring easy access for locals and tourists alike. The average cost of a meal at Pista House is moderate, making it an affordable option for enjoying authentic Hyderabadi flavors. The restaurant's authenticity and flavorful dishes have earned it a loyal following and have made it a must-visit destination for anyone exploring the culinary delights of Hyderabad`
    },
    "Flechazo-card":{
        avgprice:"₹1,800 for two people",
        rating:"4.1",
        timing:"11:30 am–3:30 pm, 6:30 pm–10:30 pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243520.4426811318!2d78.41361481522028!3d17.50718324923531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sflechazo%20restaurant!5e0!3m2!1sen!2sin!4v1734268751996!5m2!1sen!2sin",
        About_Place:`<b>FLECHAZO</b>, a vibrant and contemporary restaurant, has quickly become a favorite among Hyderabad's discerning diners. Known for its modern Indian cuisine, Flechazo offers a unique and innovative menu that blends traditional flavors with contemporary techniques. The restaurant's stylish interiors, coupled with its energetic ambiance, create a memorable dining experience.<br><br>
        Flechazo boasts a diverse menu featuring a range of appetizers, main courses, and desserts. Some of its most popular dishes include the "<b>Tandoori Jhinga</b>", succulent prawns marinated in a blend of spices, and the "<b>Dal Bukhara</b>", a rich and creamy lentil dish. The restaurant also offers an impressive selection of cocktails and mocktails. The average cost per person at Flechazo ranges from <b>INR 1500 to INR 2000</b>.`
       
    },
    "Mehfil-card":{
        avgprice:"₹700 for two people",
        rating:"4.1",
        timing:"11 am–12 am",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243520.62502773092!2d78.41361382558885!3d17.50704723812479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMehfil!5e0!3m2!1sen!2sin!4v1734268812632!5m2!1sen!2sin",
        About_Place:`<b>MEHFIL</b> was established in 2010 and has quickly become a popular dining destination. With branches across Hyderabad, including Banjara Hills, Jubilee Hills, and Gachibowli, Mehfil offers a delightful culinary experience. The average cost of a meal is around <b>INR 500</b>, and the food, known for its exceptional taste, is sure to tantalize your taste buds. The signature dish, Biryani, is a must-try.<br><br>
        Mehfil is renowned for its authentic Hyderabadi cuisine, particularly its <b>FLAVOURFUL BIRYANIS</b> and <b>KEBABS</b>. The restaurant's ambiance is warm and inviting, making it an ideal spot for a relaxed and enjoyable dining experience. Whether you're a local or a visitor, Mehfil is a must-visit for a taste of Hyderabad's culinary heritage. `
    },
    "swagath-card":{
        avgprice:"₹850 for two people",
        rating:"4.0",
        timing:"7:30 am–11:30 pm",
        map:"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d243520.8073717221!2d78.41361283595673!3d17.50691122793597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sswagath%20restaurant!5e0!3m2!1sen!2sin!4v1734269301368!5m2!1sen!2sin",
        About_Place:`<b>SWAGAT RESTAURANT</b> was established in 1990, a pioneer in authentic Andhra cuisine. With a focus on traditional recipes and fresh ingredients, Swagath has built a loyal following. Their branches are strategically located across Hyderabad, ensuring accessibility for diners.<br><br>
        The average cost per person at Swagath Restaurant ranges from <b>INR 400 to INR 800</b>, making it an <b>affordable</b> option for a fine-dining experience. The food at Swagath is renowned for its authenticity and bold flavors, reflecting the rich culinary heritage of Andhra Pradesh. Their most famous dish is undoubtedly the "<b>GONGURA MUTTON</b>", a spicy and tangy mutton curry made with the gongura leaf.`
    },

}

document.addEventListener("DOMContentLoaded", function () {
    // Select all cards
    const cards = document.querySelectorAll(".card");
    const popUp = document.getElementById("popUp");
    const popUpImg = document.getElementById("popUpImg");
    const placeName = document.getElementById("placeName");
    const closePopUp = document.getElementById("closePopUp");
    //Extra Info card
    const ExtraInfo=document.getElementById("mainImgPopup");
    const closeBTN=document.getElementById("close_btn");
    const place_name=document.getElementById("PlaceName");
    const about_place=document.getElementById("aboutPlace");
    const Img__popup=document.getElementById("Img_popup")

    let details;
    cards.forEach((card) => {
        card.addEventListener("click", function () {
            const cardId = card.id;
            if(placeDetails[cardId]) {
                details = placeDetails[cardId];
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
                details= resdetails[cardId];
                let text=card.querySelector(".placeText").textContent;
                placeName.textContent = text;
                const imgSrc = card.querySelector(".placePhoto").src;
                popUpImg.src = imgSrc;
                document.querySelector("#Acc_TextOne").textContent="Average Food Price"
                document.querySelector("#flush-collapseOne .accordion-body").textContent = `${details.avgprice}`;
                document.querySelector("#Acc_TextTwo").textContent="Rating";
                document.querySelector("#flush-collapseTwo .accordion-body").textContent = details.rating;
                document.querySelector("#flush-collapseThree .accordion-body").textContent =details.timing;
                document.getElementById("googleMap").src=details.map;
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
        //Extra Info block

    });
    popUpImg.addEventListener("click",function(){
        Img__popup.src=popUpImg.src;
        place_name.textContent=placeName.textContent;
        about_place.style.background="#F8EDE3"
        about_place.style.borderRadius="20px"
        console.log("des:-",details)
        if(details.About_Place){
            about_place.innerHTML=details.About_Place;
            console.log("print:-",about_place)
        }
        else{
            about_place.innerHTML="No information available for this place";
        }
        ExtraInfo.style.display="block";
        
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
    closeBTN.addEventListener("click",function(){
        ExtraInfo.style.display="none";
        // about_place.innerHTML='';
    })
});


// -------------------------------------media quries-------------------------

