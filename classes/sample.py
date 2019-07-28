class Computer:

    def __init__(self,cpu,ram):
        self.cpu=cpu
        self.ram=ram 
    
    def config(self):
        print("Configuration of Computer :",self.cpu,self.ram)


comp=Computer('i5','8gb')

#Way 1 to call the config method 
Computer.config(comp)

#Way 2 to call the config method 
comp.config()