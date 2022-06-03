import pandas as pd
def calculator (table):
    firstRow = {}
    SecondRow = {}
    thirdRow = {}
    forthRow = {}  
table of table[][]
    for index, i in enumerate(table):
        for indexX, x in enumerate(i):
            for indexZ, z in enumerate(i):
                for indexY, y in enumerate(i):
                    for indexJ, j in enumerate(i):
                        firstRow[concat(index,indexX,indexZ,indexY,indexJ)] = firstPathCalculator(table,index,indexX,indexZ,indexY,indexJ);
    for index, i in enumerate(table):
     for indexJ, j in enumerate(i):
            SecondRow[concat(index,indexJ,'','','')] = secondPathCalculator(table,index,indexJ)
    for index, i in enumerate(table):
        for indexJ, j in enumerate(i):
            for indexS, s in enumerate(i):
                thirdRow[concat(index,indexJ,indexS,'','')] = thirdPathCalculator(table,index,indexS,indexJ)
    for index, i in enumerate(table):
        for indexV, v in enumerate(i):
            for indexJ, j in enumerate(i):
                forthRow[concat(index,indexV,indexJ,'','')] = fourthPathCalculator(table,index,indexV,indexJ);

    df1 = pd.DataFrame(firstRow, index=[0])
    df2 = pd.DataFrame(SecondRow, index=[1])
    df3 = pd.DataFrame(thirdRow, index=[2])
    df4 = pd.DataFrame(forthRow, index=[3])
    print(df1)
    print(df2)
    print(df3)
    print(df4)

        
def firstPathCalculator (table,i,x,z,y,j):
    print('i:',i,' x:',x,' z:',z,' y:',y,' j:', j)
    return table[i][x] * table[x][y] * table[y][j] / (1 - table[x][y] * (table[x][y] + (table[x][y] * table[x][z])))
def secondPathCalculator (table,i,j):
    return table[i][j]
def thirdPathCalculator (table,i,s,j):
    return table[i][s] * table[s][j]
def fourthPathCalculator (table,i, v,j):
    return (table[i][v] * table[v][j]) / (1 - table[v][v])

def concat(a, b, c, d, e):
    s1 = str(a)
    s2 = str(b)
    s = s1 + s2 +str(c) +str(d) +str(e)
    return s