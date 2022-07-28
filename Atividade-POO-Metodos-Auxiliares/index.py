
class Aluno():
    
    #Constructor
    def __init__(self, name, age):
        if (name == ""):
            print("Erro! Escolha um nome!")
        else:
            self.name = name
            
        if (age < 0 or age > 120):
            print("Erro! Idade Inválida!")
        else:
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
    
'''    
aluno1 = Aluno(None, None)

aluno1.set_age(20)
aluno1.set_name("Arthur")

print(aluno1.get_age()) 
print(aluno1.get_name())
'''

aluno2 = Aluno("Arthur", 130)
print(aluno2.get_age())
print(aluno2.get_name())




