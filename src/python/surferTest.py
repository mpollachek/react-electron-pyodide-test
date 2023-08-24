import win32com.client

def main():
    app = win32com.client.Dispatch("Surfer.Application") 
    Plot = app.Documents.Add(1) 
    app.Visible = True
    DataFile = "c:\\Users\\mpoll\\Desktop\\surferScripts\\data\\York_1_edit.xlsx"
    OutFile = "c:\\Users\\mpoll\\Desktop\\surferScripts\\data\\York_1_grd.grd"
    app.GridData6 (DataFile=DataFile, Algorithm = 2, NumRows=150, NumCols=150, ShowReport=False, OutGrid= OutFile)
        
    #Creates a contour map and assigns the map frame to the variable "MapFrame"
    #MapFrame = Plot.Shapes.AddContourMap(GridFileName=OutFile)
    #Changes the limits and scale of the map
    #MapFrame.SetLimits (xMin=0.5, xMax=4.5, yMin=0.5, yMax=3.5)
    #MapFrame.xLength=6
    #MapFrame.yLength=4
    #Declares ContourMap as an Object and assigns the contour map to variable "ContourMap"
    #ContourMap = MapFrame.Overlays(1)
    
main()