class Aluno():
    
    #Static Variable
    haveDoubts = True
    
    #Constructor
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    #Methods getters and setters
    def set_name(self, name):
        self.name = name

    def get_name(self):
        return self.name
    
    def set_age(self, age):
        self.age = age

    def get_age(self):
        return self.age
    
    def presentation(self):
        return print("Hello there! My name is ", self.name, " and I'm ", self.age, " years old.")
 
#object instance    
aluno1 = Aluno("Arthur", 26)
aluno2 = Aluno("Reydne", 30)
aluno3 = Aluno("Maria", 19)

#Using getters and setters
aluno1.set_name("Godofredo")
print(aluno1.get_name())

aluno1.presentation()
aluno2.presentation()
aluno3.presentation()



