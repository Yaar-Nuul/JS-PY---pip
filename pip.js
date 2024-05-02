

const userPreferences = {};

function addUser(userId, preferredCategories) {
    userPreferences[userId] = preferredCategories;
}

function getRecommendations(userId) {
    const preferredCategories = userPreferences[userId];
    if (!preferredCategories) return [];
    
    return ["Recommendation1", "Recommendation2", "Recommendation3"];
}

