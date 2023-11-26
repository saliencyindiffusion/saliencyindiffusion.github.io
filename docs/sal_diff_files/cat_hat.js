var animals;
var hats;
var cur_animal = 0;
var cur_hat = 0;
var image;



function changeImage(){
    let hat = hats[cur_hat].innerHTML.toLowerCase();
    if (hat === '...'){
        hat = "default";
    }
    image.src = "./ptp_files/" + animals[cur_animal].innerHTML.toLowerCase() + "_" + hat + ".png"

}

function clearStyle(elem){
    elem.style.color = '#8e8e8e';
    elem.style.backgroundColor = null;
}

function setStyle(elem){
    elem.style.color = '#000000';
    elem.style.backgroundColor = '#f88000';
}

function modifyAnimal(i){

    function inner_(){
        if (cur_animal !== i){
            clearStyle(animals[cur_animal]);
            cur_animal = i;
            setStyle(animals[cur_animal]);
            changeImage();
        }
    }
    return inner_
}

function modifyHat(i){

    function inner_(){
        if (cur_hat !== i){
            clearStyle(hats[cur_hat]);
            cur_hat = i;
            setStyle(hats[cur_hat]);
            changeImage();
        }
    }
    return inner_
}

function set_alpha(slider, fluffy){
    let alpha = 1 - (slider.value - 16) / 52;
    let red = Math.round(248 + 7 * alpha);
    let green = Math.round(128 + 127 * alpha);
    let blue = Math.round(255 * alpha);
    fluffy.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function init() {
    // image = document.getElementById("cat-hat-img");
	// animals = document.getElementsByClassName("cat-hat-button_a");
    // hats = document.getElementsByClassName("cat-hat-button_b");
    // setStyle(animals[cur_animal]);
    // setStyle(hats[cur_hat]);
    // for (let i = 0; i < animals.length; ++i){
    //     animals[i].addEventListener("click", modifyAnimal(i));
    // }
    // for (let i = 0; i < hats.length; ++i){
    //     hats[i].addEventListener("click", modifyHat(i));
    // }
    let slider0 = document.getElementById("range0");
    let image0 = document.getElementById("image0");
    let image0_sal = document.getElementById("image0-sal-map");

    let slider1 = document.getElementById("range1");
    let image1 = document.getElementById("image1");
    let image1_sal = document.getElementById("image1-sal-map");

    let slider2 = document.getElementById("range2");
    let image2 = document.getElementById("image2");
    let image2_sal = document.getElementById("image2-sal-map");

    let slider3 = document.getElementById("range3");
    let image3 = document.getElementById("image3");
    let image3_sal = document.getElementById("image3-sal-map");

    let slider4 = document.getElementById("range4");
    let image4 = document.getElementById("image4");
    let image4_sal = document.getElementById("image4-sal-map");

    let slider5 = document.getElementById("range5");
    let image5 = document.getElementById("image5");
    let image5_sal = document.getElementById("image5-sal-map");

    let slider6 = document.getElementById("range6");
    let image6 = document.getElementById("image6");
    let image6_sal = document.getElementById("image6-sal-map");

    let slider7 = document.getElementById("range7");
    let image7 = document.getElementById("image7");
    let image7_sal = document.getElementById("image7-sal-map");
    // let fluffy  = document.getElementById("fluffy");
    // set_alpha(slider, fluffy)
    slider0.oninput = function() {
        // 248, 128, 0
        image0.src = "./sal_diff_files/contrast-1/COCO_val2014_000000025860_a" + String(slider0.value) + ".jpg";
        image0_sal.src = "./sal_diff_files/contrast-1/man_a" + String(slider0.value) + ".png";
    //  set_alpha(slider, fluffy)
    }

    slider1.oninput = function() {
        // 248, 128, 0
        image1.src = "./sal_diff_files/contrast-2/COCO_val2014_000000061735_a" + String(slider1.value) + ".jpg";
        image1_sal.src = "./sal_diff_files/contrast-2/dog_a" + String(slider1.value) + ".png";
    //  set_alpha(slider, fluffy)
    }

    slider2.oninput = function() {
        // 248, 128, 0
        image2.src = "./sal_diff_files/brightness-1/COCO_val2014_000000028273_a" + String(slider2.value) + ".jpg";
        image2_sal.src = "./sal_diff_files/brightness-1/cat_a" + String(slider2.value) + ".png";
    //  set_alpha(slider, fluffy)
    }

    slider3.oninput = function() {
        // 248, 128, 0
        image3.src = "./sal_diff_files/brightness-2/COCO_val2014_000000251920_a" + String(slider3.value) + ".jpg";
        image3_sal.src = "./sal_diff_files/brightness-2/pizza_a" + String(slider3.value) + ".png";
    //  set_alpha(slider, fluffy)
    }

    slider4.oninput = function() {
        // 248, 128, 0
        image4.src = "./sal_diff_files/color-1/COCO_val2014_000000432125_a" + String(slider4.value) + ".jpg";
        image4_sal.src = "./sal_diff_files/color-1/pink_a" + String(slider4.value) + ".png";
    //  set_alpha(slider, fluffy)
    }

    slider5.oninput = function() {
        // 248, 128, 0
        image5.src = "./sal_diff_files/color-2/COCO_val2014_000000289222_a" + String(slider5.value) + ".jpg";
        image5_sal.src = "./sal_diff_files/color-2/tr_a" + String(slider5.value) + ".png";
    //  set_alpha(slider, fluffy)
    }

    slider6.oninput = function() {
        // 248, 128, 0
        image6.src = "./sal_diff_files/hamburger/COCO_val2014_000000100083_a" + String(slider6.value) + ".jpg";
        image6_sal.src = "./sal_diff_files/hamburger/burger_a" + String(slider6.value) + ".png";
    //  set_alpha(slider, fluffy)
    }

    // slider7.oninput = function() {
    //     // 248, 128, 0
    //     image7.src = "./sal_diff_files/contrast/('COCO_val2014_000000100083.jpg',)denoised_img_a" + String(slider7.value) + ".jpg";
    //     image7_sal.src = "./sal_diff_files/contrast/('COCO_val2014_000000100083.jpg',)denoised_sal_a" + String(slider7.value) + ".jpg";
    // //  set_alpha(slider, fluffy)
    // }

}

document.addEventListener("DOMContentLoaded", () => {
    console.log("aaaaa");
    init();
});
