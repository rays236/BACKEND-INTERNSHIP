const preHeatOven = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const preHeatOven = false
        if(preHeatOven) {
            resolve("Overn preheated to 350 degree fahrenheit");
        } else {
            reject("Task One Failed");
        }
        }, 2000)
    })
};
const addChocoAndChips = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const addChoco = true
        if(addChoco) {
            resolve("Add sugar and stir till mealted");
        } else {
            reject("Task Failed");
        }
        }, 2000)
    })
};
const addFlourAndSalt = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const addFlour = true
        if(addFlour) {
            resolve("Knead flour until it's soft");
        } else {
            reject("Task Failed");
        }
        }, 2000)
    })
};
const makeCookie = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const makeCookie = true
        if(makeCookie) {
            resolve("take the kneaded flour and shape it");
        } else {
            reject("Task Failed");
        }
        }, 2000)
    })
};

const bakeCookieEnglish = async () => {
    try {
    const taskOne = await preHeatOven();
    console.log(taskOne);

    const taskTwo = await addChocoAndChips();
    console.log(taskTwo);

    const taskThree = await addFlourAndSalt();
    console.log(taskThree);

    const taskFour = await makeCookie();
    console.log(taskFour);

    console.log("Enjoy! Your perfect sweek cookie");
    }
    catch(error) {
        console.log(error)
    }
}

bakeCookieEnglish();