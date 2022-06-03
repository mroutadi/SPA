import pandas as pd
import calculator
rows = []
ourCSV = pd.read_csv('input output multipate.csv')
asdf = pd.DataFrame(ourCSV)
calculator.calculator(asdf.to_numpy())
# table = asdf.to_numpy()
