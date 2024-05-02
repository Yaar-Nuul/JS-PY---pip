
user_preferences = [{}]

def add_user(user_id, preferred_categories):
    user_preferences[user_id] = preferred_categories

def get_recommendations(user_id):
    preferred_categories = user_preferences.get(user_id, [])
    if not preferred_categories:
        return []
    
    return ["All items in our categories"]

def get_recommendations(user_id):
    preferred_categories = user_preferences.get(user_id, [])
    if not preferred_categories:
        return []
    
    return ["Recommended Items"]

