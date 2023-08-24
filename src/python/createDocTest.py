import os

def writeFile():
    with open("C:\\Users\\mpoll\\Desktop\\surferScripts\\electron-test\\src\\python\\writeTest.txt", "w") as wf:
        data = "writing file successful"
        wf.write(data)
    
def writeFile2():
    with open("writefile2test.txt", "w+") as wf2:
        data = "writing file 2 successful"
        wf2.write(data)

def readFile():
    with open("C:\\Users\\mpoll\\Desktop\\surferScripts\\electron-test\\src\\python\\writeTest.txt", "r") as rf:
        return rf.read()
        
writeFile()
writeFile2()
readFile()
