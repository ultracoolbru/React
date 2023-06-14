// Arrays and Array Methods like map()

export const hobbies = ["Sports", "Cooking", "Reading", "Coding"];

hobbies.push("Programming");

export const findIndex = hobbies.findIndex((hobby) => {
    return hobby === "Reading";
});

export const editedHobbies = hobbies.map((item) => ({text: item}));