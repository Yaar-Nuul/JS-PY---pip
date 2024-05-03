

const userPreferences = {};

function addUser(userId, preferredCategories) {
    userPreferences[userId] = preferredCategories;
    return userPreferences
}
let addedUser = addUser("001", ["trousers", "shorts", "bag"])
console.log({addedUser});

function getRecommendations(userId) {
    const preferredCategories = userPreferences[userId];
    if (!preferredCategories) return [];
    
    return ["Recommendation"];
}

console.log(getRecommendations("001"));
