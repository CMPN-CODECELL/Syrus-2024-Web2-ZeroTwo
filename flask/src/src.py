import pickle
import numpy as np
from sklearn.preprocessing import StandardScaler
import pandas as pd

class src:
    def __init__(self):
        m = open('src\model.pkl', 'rb')
        p = open('src\pca.pkl', 'rb')
        r = open("src\\random_forest_model.pkl", 'rb')
        
        self.model = pickle.load(m)
        self.pca = pickle.load(p)
        self.rcf = pickle.load(r)
        
    def scale(self, array):
        array = StandardScaler().fit_transform(array)
        return array
    
    def one_hot_encode(self, input_dict):
        categories =['Price', 'Age', 'Budget', 'Rating', 'Reviews',
                    'Type of place_Attraction', 'Type of place_Hotel', 'Type of place_Tourism',
                    'Location_Agra', 'Location_Arizona', 'Location_Bangalore', 'Location_Canada',
                    'Location_China', 'Location_Delhi', 'Location_Dubai', 'Location_Goa',
                    'Location_Jaipur', 'Location_Jaisalmer', 'Location_Kochi', 'Location_Kyoto',
                    'Location_Mumbai', 'Location_Mysore', 'Location_Nepal', 'Location_New Delhi',
                    'Location_New York', 'Location_Paris', 'Location_Peru', 'Location_Rome',
                    'Location_Santorini', 'Location_Sydney', 'Gender_Female', 'Gender_Male',
                    'Type of Person_Blue', 'Type of Person_Green', 'Type of Person_Orange',
                    'Type of Person_Pink']
        
        input_dict = dict(map(lambda i,j : (i,j) , ["Type of place", "Price", "Location", "Age", "Gender", "Budget"], input_dict))
        
        encoded_dict = {category: 0 for category in categories}
    
        for key, value in input_dict.items():
            if key in ["Price", "Age", "Budget"]:
                encoded_dict[key] = value
            else:
                encoded_dict[f"{key}_{value}"] = 1
                
        encoded_df = pd.DataFrame([encoded_dict])
    
        return np.array(encoded_df.iloc[0].values).reshape(1,-1)
        
    def predict_cluster(self, array):
        array = self.scale(array)
        return self.model.predict(array)
    
    def predict_visit(self, array):
        x = self.one_hot_encode(array)
        return self.rcf.predict(x)
