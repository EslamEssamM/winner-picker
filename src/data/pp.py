import pandas as pd
import os

# Read the Excel file
print("Reading data.xlsx")
# print current directory
print(os.getcwd())
df = pd.read_excel('./data.xlsx')

# Save to data.json
df.to_json('data.json', orient='records', force_ascii=False)