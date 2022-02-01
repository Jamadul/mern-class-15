

/**
 * <!-- Instant Data With Checkbox Start-->
 */
const skills = document.querySelectorAll('.skill');
const all_skills = document.querySelector('.all_skills');



skills.forEach( skill =>{

    skill.addEventListener('change', function(){

        let all_data = document.querySelectorAll('.skill:checked');

        let skill_arr = [];

        all_data.forEach( data =>{

            skill_arr.push(data.value);
        });

        let list = '';

        skill_arr.map( data => {

            list += `<li class="list-group-item bg-success text-white">${data}</li>`;

        });

        all_skills.innerHTML = list;
        
    }); 

});

/**
 * <!-- Instant Data With Checkbox End-->
 */

/**
 * Analog Clock Start
 */
const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');


setInterval(() => {

    let time = new Date();
    let current_sec = time.getSeconds();
    let current_min = time.getMinutes();
    let current_hour = time.getHours();
    sec.style.transform = `rotate(${katakati(60, current_sec)}deg)`;
    min.style.transform = `rotate(${katakati(60, current_min)}deg)`;
    hour.style.transform = `rotate(${katakati(12, current_hour)}deg)`;
    
}, 1000);



function katakati(time, current){
    return (360*current)/time;
};

/**
 * Analog Clock End
 */

/**
 * Calculeter Start
 */



/**
 * Calculater End
 */