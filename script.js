const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistake span');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');

//set value______________


let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;


function loadParagraph() {
    const paragraphs = [
        "The sun dipped below the horizon, casting long shadows across the landscape. A cool breeze whispered through the trees, rustling their leaves gently. As the day drew to a close, the sky turned a fiery orange, painting a breathtaking scene that seemed to stretch on for miles. In the distance, the silhouette of mountains stood tall against the fading light, their peaks shrouded in mist. Birds soared overhead, their graceful flight adding to the sense of tranquility that permeated the air. It was a moment of perfect serenity, a fleeting glimpse of beauty that would be etched into memory forever.",
        "In the heart of the city, life pulsed with an energy all its own. People hurried along the bustling streets, their footsteps echoing off the towering buildings that surrounded them. Neon signs flickered to life as night fell, illuminating the sidewalks with a kaleidoscope of colors. Street vendors peddled their wares, filling the air with the aroma of sizzling food and exotic spices. Cars honked their horns in a chaotic symphony, weaving in and out of traffic with practiced ease. Amidst the chaos, there was a sense of unity, a shared experience that bound strangers together in a tapestry of humanity.",
        "High above the clouds, an airplane soared through the sky, its engines roaring as it cut through the thin air. Inside, passengers settled into their seats, anticipating the journey ahead. Some slept peacefully, lulled by the gentle hum of the engines, while others gazed out the window in wonder at the world below. For a brief moment, they were suspended between two worlds, neither here nor there, but somewhere in between. It was a feeling of freedom, of possibility, that made the journey itself an adventure.",
        "In the depths of the jungle, a cacophony of sounds filled the air as creatures of all shapes and sizes went about their nightly rituals. Frogs croaked, monkeys chattered, and insects buzzed incessantly, creating a symphony of noise that echoed through the dense foliage. Amidst the chaos, a lone jaguar prowled silently, its golden eyes gleaming in the darkness. It moved with a fluid grace, blending seamlessly into its surroundings as it hunted for prey. In the canopy above, a family of sloths slept soundly, their slow, steady breaths a stark contrast to the frenetic energy below.",
        "On the open plains, herds of wildebeest roamed freely, their hooves kicking up clouds of dust as they moved in unison. In the distance, a pride of lions lay in wait, their amber eyes fixed on the approaching prey. As the sun dipped below the horizon, the savannah came alive with the sounds of the night. Hyenas cackled, jackals howled, and nocturnal birds took flight, their haunting calls filling the air with an eerie melody. It was a harsh and unforgiving landscape, where only the strongest and most cunning survived.",
        "Deep beneath the waves, a world of wonder awaited those brave enough to explore its depths. Coral reefs teemed with life, their vibrant colors a dazzling display against the azure blue of the ocean. Schools of fish darted to and fro, their scales catching the sunlight as they swam. In the shadows, predators lurked, their sleek bodies blending seamlessly into the darkness as they hunted for their next meal. And yet, amidst the chaos, there was a sense of harmony, a delicate balance that had endured for millennia.",
        "In the heart of the desert, the sand stretched out for miles in every direction, a vast expanse of emptiness broken only by the occasional dune. The sun beat down mercilessly, its rays shimmering off the golden grains as they shifted and swirled in the hot breeze. For miles around, there was nothing but silence, broken only by the occasional whisper of the wind as it whispered through the sand. It was a harsh and unforgiving landscape, where only the hardiest of creatures could survive. And yet, amidst the desolation, there was a strange beauty, a sense of peace that could only be found in the solitude of the desert.",
        "In the heart of the forest, towering trees stretched up towards the sky, their branches reaching out to touch the heavens. Shafts of golden sunlight pierced the dense canopy, illuminating the forest floor in a dappled pattern of light and shadow. The air was thick with the scent of pine and earth, mingling together to create a heady aroma that filled the senses. Birds chirped and insects buzzed as they went about their daily routines, while small mammals scurried through the underbrush in search of food. It was a scene of perfect harmony, where every creature played its part in the symphony of life.",
        "In the depths of space, the stars burned brightly against the velvet blackness of the night sky, their twinkling lights a testament to the vastness of the universe. Galaxies spun lazily in the void, their spiral arms reaching out like cosmic tendrils. Nebulae glowed with an otherworldly light, their swirling gases creating breathtaking displays of color and motion. And amidst it all, a small blue planet hung suspended in the darkness, its surface teeming with life. It was a scene of unparalleled beauty, a reminder of the wonders that lay beyond the confines of Earth.",
        "Amidst the ruins of an ancient civilization, a sense of timelessness hung heavy in the air. Crumbling walls rose up from the earth like the bones of giants, their weathered surfaces bearing the scars of centuries past. In the distance, the remnants of a once-great city lay in silent repose, its streets empty and its buildings reduced to rubble. And yet, amidst the decay, there was a strange beauty, a sense of grandeur that could only be found in the passage of time. It was a reminder of the impermanence of all things, and yet also a testament to the enduring spirit of humanity.",
        "In the heart of a bustling metropolis, the streets teemed with life as people hurried to and fro, their footsteps echoing off the towering skyscrapers that loomed overhead. Neon signs flickered and buzzed, casting a garish glow over the sidewalks below. Cars honked their horns impatiently as they jostled for space on the crowded roads, while bicycles and pedestrians navigated the chaos with practiced ease. Amidst it all, street performers entertained the masses with their music and art, their voices rising above the din in a cacophony of sound and color. It was a scene of organized chaos, where the energy of the city pulsed with a life all its own.",
        "In the depths of the ocean, a world of wonder awaited those brave enough to explore its depths. Coral reefs teemed with life, their vibrant colors a dazzling display against the azure blue of the water. Schools of fish darted to and fro, their scales catching the sunlight as they swam. In the shadows, predators lurked, their sleek bodies blending seamlessly into the darkness as they hunted for their next meal. And yet, amidst the chaos, there was a sense of harmony, a delicate balance that had endured for millennia. It was a reminder of the interconnectedness of all things, and of the beauty that could be found in even the most unlikely of places.",
        "Amidst the rolling hills of the countryside, a sense of peace hung heavy in the air. Fields of golden wheat stretched out as far as the eye could see, their gentle sway a testament to the rhythm of the seasons. In the distance, a farmhouse stood nestled amongst the trees, its whitewashed walls glowing in the warm light of the setting sun. Birds chirped and insects buzzed as they went about their daily routines, while livestock grazed lazily in the fields. It was a scene of timeless beauty, where the pace of life was dictated not by the clock, but by the turning of the earth.",
        "In the heart of the rainforest, the air was thick with humidity as dense foliage stretched up towards the canopy above. Sunlight filtered through the leaves in a dappled pattern of light and shadow, illuminating the forest floor in a kaleidoscope of colors. Birds called to one another from the treetops, their songs echoing through the dense undergrowth. Monkeys swung from branch to branch, their nimble movements a testament to the agility of the jungle's inhabitants. And amidst it all, a sense of life pulsed through the air, a vibrant energy that seemed to hum with the rhythm of the forest itself.",
        "On the open plains, the grass stretched out for miles in every direction, a sea of green that rippled gently in the breeze. In the distance, a herd of buffalo grazed lazily, their massive forms silhouetted against the vast expanse of sky. Birds flitted from bush to bush, their colorful plumage a stark contrast to the muted tones of the landscape. And overhead, the sun beat down relentlessly, its rays casting long shadows across the parched earth below. It was a scene of stark beauty, where the harshness of the environment was tempered by the resilience of the creatures that called it home.",
        "In the heart of the city, the streets teemed with life as people hurried to and fro, their footsteps echoing off the towering buildings that surrounded them. Neon signs flickered and buzzed, casting a garish glow over the sidewalks below. Cars honked their horns impatiently as they jostled for space on the crowded roads, while bicycles and pedestrians navigated the chaos with practiced ease. Amidst it all, street performers entertained the masses with their music and art, their voices rising above the din in a cacophony of sound and color. It was a scene of organized chaos, where the energy of the city pulsed with a life all its own.",
        "Amidst the rolling hills of the countryside, a sense of peace hung heavy in the air. Fields of golden wheat stretched out as far as the eye could see, their gentle sway a testament to the rhythm of the seasons. In the distance, a farmhouse stood nestled amongst the trees, its whitewashed walls glowing in the warm light of the setting sun. Birds chirped and insects buzzed as they went about their daily routines, while livestock grazed lazily in the fields. It was a scene of timeless beauty, where the pace of life was dictated not by the clock, but by the turning of the earth.",
        "In the heart of the rainforest, the air was thick with humidity as dense foliage stretched up towards the canopy above. Sunlight filtered through the leaves in a dappled pattern of light and shadow, illuminating the forest floor in a kaleidoscope of colors. Birds called to one another from the treetops, their songs echoing through the dense undergrowth. Monkeys swung from branch to branch, their nimble movements a testament to the agility of the jungle's inhabitants. And amidst it all, a sense of life pulsed through the air, a vibrant energy that seemed to hum with the rhythm of the forest itself.",
        "On the open plains, the grass stretched out for miles in every direction, a sea of green that rippled gently in the breeze. In the distance, a herd of buffalo grazed lazily, their massive forms silhouetted against the vast expanse of sky. Birds flitted from bush to bush, their colorful plumage a stark contrast to the muted tones of the landscape. And overhead, the sun beat down relentlessly, its rays casting long shadows across the parched earth below. It was a scene of stark beauty, where the harshness of the environment was tempered by the resilience of the creatures that called it home.",
        "In the heart of the city, the streets teemed with life as people hurried to and fro, their footsteps echoing off the towering buildings that surrounded them. Neon signs flickered and buzzed, casting a garish glow over the sidewalks below. Cars honked their horns impatiently as they jostled for space on the crowded roads, while bicycles and pedestrians navigated the chaos with practiced ease. Amidst it all, street performers entertained the masses with their music and art, their voices rising above the din in a cacophony of sound and color. It was a scene of organized chaos, where the energy of the city pulsed with a life all its own.",
        "Amidst the rolling hills of the countryside, a sense of peace hung heavy in the air. Fields of golden wheat stretched out as far as the eye could see, their gentle sway a testament to the rhythm of the seasons. In the distance, a farmhouse stood nestled amongst the trees, its whitewashed walls glowing in the warm light of the setting sun. Birds chirped and insects buzzed as they went about their daily routines, while livestock grazed lazily in the fields. It was a scene of timeless beauty, where the pace of life was dictated not by the clock, but by the turning of the earth.",
        "In the heart of the rainforest, the air was thick with humidity as dense foliage stretched up towards the canopy above. Sunlight filtered through the leaves in a dappled pattern of light and shadow, illuminating the forest floor in a kaleidoscope of colors. Birds called to one another from the treetops, their songs echoing through the dense undergrowth. Monkeys swung from branch to branch, their nimble movements a testament to the agility of the jungle's inhabitants. And amidst it all, a sense of life pulsed through the air, a vibrant energy that seemed to hum with the rhythm of the forest itself.",
        "On the open plains, the grass stretched out for miles in every direction, a sea of green that rippled gently in the breeze. In the distance, a herd of buffalo grazed lazily, their massive forms silhouetted against the vast expanse of sky. Birds flitted from bush to bush, their colorful plumage a stark contrast to the muted tones of the landscape. And overhead, the sun beat down relentlessly, its rays casting long shadows across the parched earth below. It was a scene of stark beauty, where the harshness of the environment was tempered by the resilience of the creatures that called it home.",
        "In the heart of the city, the streets teemed with life as people hurried to and fro, their footsteps echoing off the towering buildings that surrounded them. Neon signs flickered and buzzed, casting a garish glow over the sidewalks below. Cars honked their horns impatiently as they jostled for space on the crowded roads, while bicycles and pedestrians navigated the chaos with practiced ease. Amidst it all, street performers entertained the masses with their music and art, their voices rising above the din in a cacophony of sound and color. It was a scene of organized chaos, where the energy of the city pulsed with a life all its own.",
        "Amidst the rolling hills of the countryside, a sense of peace hung heavy in the air. Fields of golden wheat stretched out as far as the eye could see, their gentle sway a testament to the rhythm of the seasons. In the distance, a farmhouse stood nestled amongst the trees, its whitewashed walls glowing in the warm light of the setting sun. Birds chirped and insects buzzed as they went about their daily routines, while livestock grazed lazily in the fields. It was a scene of timeless beauty, where the pace of life was dictated not by the clock, but by the turning of the earth.",
        "In the heart of the rainforest, the air was thick with humidity as dense foliage stretched up towards the canopy above. Sunlight filtered through the leaves in a dappled pattern of light and shadow, illuminating the forest floor in a kaleidoscope of colors. Birds called to one another from the treetops, their songs echoing through the dense undergrowth. Monkeys swung from branch to branch, their nimble movements a testament to the agility of the jungle's inhabitants. And amidst it all, a sense of life pulsed through the air, a vibrant energy that seemed to hum with the rhythm of the forest itself.",
        "On the open plains, the grass stretched out for miles in every direction, a sea of green that rippled gently in the breeze. In the distance, a herd of buffalo grazed lazily, their massive forms silhouetted against the vast expanse of sky. Birds flitted from bush to bush, their colorful plumage a stark contrast to the muted tones of the landscape. And overhead, the sun beat down relentlessly, its rays casting long shadows across the parched earth below. It was a scene of stark beauty, where the harshness of the environment was tempered by the resilience of the creatures that called it home."
      ];
            

    const randomIdx = Math.floor(Math.random() * paragraphs.length);

    typingText.innerHTML = "";

    for (let char of paragraphs[randomIdx]) {
        typingText.innerHTML += `<span>${char}</span>`;
    }

    typingText.querySelectorAll('span')[0].classList.add('active')

    document.addEventListener('keydown', () => input.focus());
    typingText.addEventListener("click", () => {
        input.focus();
    })
}

//Handle User Input________________________

function initTyping() {
    const char = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);

    if (charIndex < char.length && timeLeft > 0) {

        if (!isTyping) {
            timer = setInterval(initTime, 1000);
            isTyping = true;
        }

        if (char[charIndex].innerText === typedChar) {
            char[charIndex].classList.add('correct');
            console.log('correct');
        } else {
            mistake++;

            char[charIndex].classList.add('incorrect');
            console.log('incorrect');
        }
        charIndex++;
        char[charIndex].classList.add('active');
        mistakes.innerText = mistake;

        cpm.innerText = charIndex - mistake;

    } else {
        clearInterval(timer);
        input.value = "";
    }
}


function initTime() {
    if (timeLeft > 0) {
        timeLeft--;
        time.innerText = timeLeft;

        const wpmVal = Math.round(((charIndex - mistake) / 5) / (maxTime - timeLeft) * 60);
        wpm.innerText = wpmVal;

    } else {
        clearInterval(timer)
    }
}

function reset() {
    loadParagraph()
    clearInterval(timer);
    timeLeft = maxTime;
    time.innerText = timeLeft;
    input.value = ""
    charIndex = 0;
    mistake = 0;
    isTyping = false;
    wpm.innerText = 0;
    cpm.innerText = 0;
    mistakes.innerText = 0;
}

btn.addEventListener("click", reset);

input.addEventListener("input", initTyping);
loadParagraph();