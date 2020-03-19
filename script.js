
function Rand(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    //The maximum is inclusive and the minimum is inclusive 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
function genAll() {
    //Generate all attributes
    genMari();
    genChild();
    genPrimCar();
    genGoal();
    genMisc();
}
function genMari() {
    //Generate marital Status
    var MariStat = document.getElementById("MariStat")
    var mariVal = Rand(1,marital.length);
    var SecCar = document.getElementById("SecCar")
    
    if(mariVal == 25){
        var sec = [Rand(1,secondary.length),
        Rand(1,secondary.length),
        Rand(1,secondary.length)]

        for (i=0,len = sec.length; i < len; i++) {
            if(sec[i] == 10){
                sec[i] = secondary[sec[i]-1];
            } else if(sec[i] == 9){
                sec[i] = secondary[sec[i]-1] + "<ul><li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li></ul>";
            } else if(sec[i] < 9 && sec[i] > 3){
                sec[i] = unConCar[Rand(1,unConCar.length-1)];
            } else {
                sec[i] = conCar[Rand(1,conCar.length-1)];
            }
        }

        SecCar.innerHTML = "<ul><li>" + sec[0] + "</li><br>"
                         + "<li>" + sec[1] + "</li><br>"
                         + "<li>" + sec[2] + "</li></ul>";

    }else if(mariVal==18 || mariVal > 22){
        var sec = [Rand(1,secondary.length),
            Rand(1,secondary.length)]
    
            for (i=0,len = sec.length; i < len; i++) {
                if(sec[i] == 10){
                    sec[i] = secondary[sec[i]-1];
                } else if(sec[i] == 9){
                    sec[i] = secondary[sec[i]-1] + "<ul><li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                            + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                            + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                            + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                            + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li></ul>";
                } else if(sec[i] < 9 && sec[i] > 3){
                    sec[i] = unConCar[Rand(1,unConCar.length-1)];
                } else {
                    sec[i] = conCar[Rand(1,conCar.length-1)];
                }
            }
    
            SecCar.innerHTML = "<ul><li>" + sec[0] + "</li><br>"
                             + "<li>" + sec[1] + "</li></ul>";
    }else if(mariVal > 5 && !(mariVal == 16)){
        var sec = Rand(1,secondary.length)

        if(sec == 10){
            sec = secondary[sec-1];
        } else if(sec == 9){
            sec = secondary[sec-1] + "<ul><li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                    + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                    + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                    + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                    + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li></ul>";
        } else if(sec < 9 && sec > 3){
            sec = unConCar[Rand(1,unConCar.length-1)];
        } else {
            sec = conCar[Rand(1,conCar.length-1)];
        }
    
        SecCar.innerHTML = sec;
    } else{
        SecCar.innerHTML = "HIDE ME";
    }
    
    MariStat.innerHTML = marital[mariVal-1];
}
function genChild() {
    //Generate number of Children
    var Child = document.getElementById("Child")
    var chiVal = Rand(1,child.length);
    
    Child.innerHTML = child[chiVal-1];
}
function genPrimCar() {
    //Generate a primary career
    var PrimCar = document.getElementById("PrimCar")
    var primVal = Rand(1,primary.length);
    
    if(primVal < 7){
        con = Rand(1,conCar.length);
        PrimCar.innerHTML = conCar[con-1];
    } else if(primVal < 10){
        uncon = Rand(1,unConCar.length);
        PrimCar.innerHTML = unConCar[uncon-1];
    } else{
        PrimCar.innerHTML = primary[primVal-1] + "<ul><li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li></ul>";
    }
}
function genSecCar(){
    var SecCar = document.getElementById("SecCar")
    
    if(mariVal == 25){
        var sec = [Rand(1,secondary.length),
        Rand(1,secondary.length),
        Rand(1,secondary.length)]

        for (i=0,len = sec.length; i < len; i++) {
            if(sec[i] == 10){
                sec[i] = secondary[sec[i]-1];
            } else if(sec[i] == 9){
                sec[i] = secondary[sec[i]-1] + "<ul><li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                        + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li></ul>";
            } else if(sec[i] < 9 && sec[i] > 3){
                sec[i] = unConCar[Rand(1,unConCar.length-1)];
            } else {
                sec[i] = conCar[Rand(1,conCar.length-1)];
            }
        }

        SecCar.innerHTML = "<ul><li>" + sec[0] + "</li><br>"
                         + "<li>" + sec[1] + "</li><br>"
                         + "<li>" + sec[2] + "</li></ul>";

    }else if(mariVal==18 || mariVal > 22){
        var sec = [Rand(1,secondary.length),
            Rand(1,secondary.length)]
    
            for (i=0,len = sec.length; i < len; i++) {
                if(sec[i] == 10){
                    sec[i] = secondary[sec[i]-1];
                } else if(sec[i] == 9){
                    sec[i] = secondary[sec[i]-1] + "<ul><li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                            + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                            + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                            + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                            + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li></ul>";
                } else if(sec[i] < 9 && sec[i] > 3){
                    sec[i] = unConCar[Rand(1,unConCar.length-1)];
                } else {
                    sec[i] = conCar[Rand(1,conCar.length-1)];
                }
            }
    
            SecCar.innerHTML = "<ul><li>" + sec[0] + "</li><br>"
                             + "<li>" + sec[1] + "</li><br>";
    }else if(mariVal > 5 && !(mariVal == 16)){
        var sec = Rand(1,secondary.length)

        if(sec == 10){
            sec = secondary[sec-1];
        } else if(sec == 9){
            sec = secondary[sec-1] + "<ul><li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                    + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                    + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                    + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li><br>"
                    + "<li>" + conCar[Rand(1,conCar.length)-1] + "</li></ul>";
        } else if(sec < 9 && sec > 3){
            sec = unConCar[Rand(1,unConCar.length-1)];
        } else {
            sec = conCar[Rand(1,conCar.length-1)];
        }
    
        SecCar.innerHTML = "<ul><li>" + sec + "</li><br>";
    } else{
        SecCar.innerHTML = "HIDE ME";
    }
}
function genGoal() {
    //Generate generational goal
    var GenGoal = document.getElementById("GenGoal")
    var goalVal = Rand(1,goals.length);
    
    if(goalVal == 12){
        var crisis = [
            "Re-roll Miscellaneous Fun(complete within 24 hours)",
            "Randomize a trait(complete within 24 hours)",
            "Re-roll Career(complete within 24 hours)",
            "Make a major purchase(complete within 24 hours)",
            "Have a romantic crisis(start within 48 hours)",
            "Change style to recapture youth(complete within 24 hours)",
            "Gain a new skill(complete within 1 week)",
            "Have a child(complete within 1 week)",
            "Randomize Aspiration(complete within 24 hours)"
        ]
        goalVal = Rand(1,crisis.length);

        GenGoal.innerHTML = crisis[goalVal-1];
    } else { 
        GenGoal.innerHTML = goals[goalVal-1];
    }
}
function genMisc() {
    //Generate miscellaneous fun
    var MiscFun = document.getElementById("MiscFun")
    var funVal = Rand(1,fun.length);
    
    MiscFun.innerHTML = fun[funVal-1];
}

//////////////

var marital = [
    "Single", "Single", "Single", "Single", "Single",
    "Couple", "Couple", "Couple", "Couple", "Couple", "Couple", "Couple", "Couple", "Couple", "Couple",
    "Mixed Single",
    "Mixed Couple",
    "Second Chance",
    "Single w/ Help",
    "Mixed Single w/ Help",
    "Couple w/ Help",
    "Mixed Couple w/ Help",
    "Single w/ 2 Help",
    "Mixed Single w/ 2 Help",
    "Full House"
]
var child = [
    "1 Child","1 Child",
    "2 Children","2 Children","2 Children","2 Children",
    "3 Children","3 Children",
    "4 Children",
    "5 Children"
]
var primary = [
    "Conventional Career (roll C1)","Conventional Career (roll C1)","Conventional Career (roll C1)","Conventional Career (roll C1)","Conventional Career (roll C1)","Conventional Career (roll C1)",

    "Unconventional Career (roll C2)","Unconventional Career (roll C2)","Unconventional Career (roll C2)",

    "Career Hopper"
]
var secondary = [
    "Conventional Career (roll C1)", "Conventional Career (roll C1)", "Conventional Career (roll C1)",

    "Unconventional Career (roll C2)", "Unconventional Career (roll C2)", "Unconventional Career (roll C2)", "Unconventional Career (roll C2)", "Unconventional Career (roll C2)",
    
    "Career Hopper",
    "Unemployed"
]
var goals = [
    "Perfect Careers",
    "Fulfilled",
    "Perfect Children",
    "Dependable",
    "Expansionist",
    "Collector",
    "Deadbeat Parents",
    "Change of Scenery",
    "Party King/Party Queen",
    "Idle Careers",
    "Friendship is Forever",
    "Midlife Crisis",
    "Memorial",
    "Themed Display",
    "Haunted House",
    "(GT) Best Club Ever",
    "(CL) Domestic Dilemma",
    "(P) My Honor Student(s)",
    "(C&D) Pet Shrine",
    "Bad Investment",
    "Bring Me Back To Life",
    "Do-Gooders",
    "(S) Holiday Fanatics",
    "(S) Scouting Family",
    "(Fame) Rich and Famous",
    "(SV) Doomsday Preppers",
    "(IL)- Enviromentalist",
    "(MS)- Photo Fanatic",
    "(ROM)- Magic Master",
    "(ROM)- Potion Master",
    "(DU)- Career Student",
    "(DU)- Bot Crazy "
]
var fun = [
    "Random",
    "Partier",
    "Mischief Managed",
    "Moody",
    "Homemade",
    "Runs in the Family",
    "Perfect Attendance",
    "Fixer Upper",
    "Half-Siblings",
    "Fighter",
    "Joker",
    "Health Nut",
    "Gourmet",
    "Hands Off!",
    "Hobbyist",
    "My Precious",
    "Vacationer",
    "(GT) Clubber",
    "On Call",
    "Town Explorer",
    "(DO) Regular Diner",
    "(CL) Festival Frequenter",
    "(CL) Flea Market Fanatic",
    "Sibling Rivalry (P)",
    "Rainbow Brite",
    "Exchange Student",
    "(C&D)Foster Pets",
    "(JA) Cultured",
    "(S) Seasonal Fun",
    "(GF) Crazed Fans",
    "(IL) Island Local",
    "(ROM) Magic Club",
    "(DU) Secret Society Member",
    "(DU) Organsation King/Queen",
    "(DU) Roommate fun"
]
var conCar = [
    "Entertainer(Musician)",
   " Entertainer(Comedian)",
    "Writer(Author)",
    "Writer(Journalist)",
    "Painter(Master of the Real)",
    "Painter(Patron of the Arts)",
    "Secret Agent(Diamond Agent)",
    "Secret Agent(Villain)",
    "Criminal(Boss)",
    "Criminal(Oracle)",
    "Astronaut(Space Ranger)",
    "Astronaut(Smuggler)",
    "Culinary(Chef)",
    "Culinary(Mixologist)",
    "Tech Guru(eSport Gamer)",
    "Tech Guru(Start-up Entrepeneur)",
    "Athlete(Bodybuilder)",
    "Athlete(Pro Athlete)",
    "Business(Management)",
    "Business(Investor)",
    "(GTW) Doctor",
    "(GTW) Detective",
    "(GTW) Scientist",
    "(CL) Critic(Art Critic)",
    "(CL) Critic(Food Critic)",
    "(CL) Politician(Charity Organizer)",
    "(CL) Politician(Politician)",
    "(CL) Social Media(Internet Personality)",
    "(CL) Social Media(Public Relations)",
    "(S) Gardener(Botanist)",
    "(S) Gardener(Flower Designer)",
    "Stylist",
    "Trend Setter",
    "Actor",
    "(SV) Military Cadet",
    "(SV) Military Covert Officer",
    "(IL) Conservationist (Marine Bologist)",
    "(IL) Conservastionist (Enviromental Manager)",
    "(MS) Fashion Photographer",
    "(DU)- Education- Administrator Branch",
    "(DU)- Education- Professor Branch",
    "(DU)- Law- Judge Branch",
    "(DU)- Law- Private Attorney Branch",
    "(DU)- Engineering- Computer Branch",
    "(DU)- Engineering- Mechanical Branch"
]
var unConCar = [
    "Freelance Painter",
    "Freelance Author",
    "Freelance Musician",
    "Gardener",
    "Fishersim",
    "Treasure Hunter",
    "Carpenter",
    "Freelance Comedian",
    "Freelance Programmer",
    "Space Explorer",
    "Professional Gamer",
    "Cybercriminal",
    "Professional Host/Hostess",
    "(OR) Remedy Brewer",
    "(GTW) Freelance Photographer",
    "(GTW or CL) Retail Owner",
    "(GT) DJ",
    "(DO) Restauranteur",
    "(C&D) Animal Trainer",
    "(JA) Archaeologist",
    "(JA) Treasure Hunter",
    "(Sea) Flower Arranging",
    "(Sea) Bee Keeper",
    "(Fame) A Video Producer",
    "(Fame) A Music Producer",
    "(IL)- Odd Jobs",
    "Part time jobs: 1-8"
]

//////////////

