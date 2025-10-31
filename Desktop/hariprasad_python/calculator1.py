from tkinter import *
root=Tk()
root.title("Calculator")
root.geometry("400x500")

root.resizable(False,False)
entry=Entry(root,font=("Arial",20),borderwidth=2,justify=RIGHT,relief=RIDGE)
entry.grid(row=0,column=0,columnspan=4,ipadx=8,ipady=10,pady=10)

def click(event):
    text=event.widget.cget("text")
    if text=="=":
        try:
            result=str(eval(entry.get()))
            entry.delete(0,END)
            entry.insert(END,result)
        except:
            entry.delete(0,END)
            entry.insert(END,"Error")
    elif text=="cancel":
        entry.delete(0,END)
    elif text=="c":
        current=entry.get()
        entry.delete(0,END)
        entry.insert(END,current[:-1])
    else:
        entry.insert(END,text)
        
buttons=[
    ["7","8","9","/"],
    ["4","5","6","*"],
    ["1","2","3","-"],
    ["0",".","c","+"],
    ["=","cancel"]
]

for i in range(len(buttons)):
    for j in range(len(buttons[i])):
     btn=Button(root,text=buttons[i][j],font=("Arial",18),width=5,height=2,bg="lightgray")
     btn.grid(row=i+1,column=j,padx=5,pady=5)
     btn.bind("<Button-1>",click)
        
root.mainloop()