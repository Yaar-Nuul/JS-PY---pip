
user_preferences = {}

def add_user(user_id, preferred_categories):
    user_preferences[user_id] = preferred_categories

preferred = add_user("001", ["trouser", "short", "bags"])
print(preferred)

def get_recommendations(user_id):
    preferred_categories = user_preferences.get(user_id, [])
    if not preferred_categories:
        return []
    
    return ["All items in our categories"]
detail = get_recommendations("001")
print(detail)

def get_recommendations(user_id):
    preferred_categories = user_preferences.get(user_id, [])
    if not preferred_categories:
        return []
    
    return ["Recommended Items"]
result = get_recommendations("001")
print(result)

