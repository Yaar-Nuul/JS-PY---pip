

const userPreferences = [{}];

function addUser(userId, preferredCategories) {
    userPreferences[userId] = preferredCategories;
}
console.log("001", ["trousers", "shorts", "bag"]);

function getRecommendations(userId) {
    const preferredCategories = userPreferences[userId];
    if (!preferredCategories) return [];
    
    return ["Recommendation"];
}

console.log(getRecommendations("001"));
