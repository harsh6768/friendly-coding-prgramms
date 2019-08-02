
class Person:

    def __init__(self,name,age):
        self.name=name
        self.age=age

    def compare(self,other):
        if self.age==other.age:
            return True 
        else:
            return False 
    
person1=Person('harsh chaurasiya',21)
person1.age=20

person2=Person('harsh',20)

if person1.compare(person2):
    print('Age is Equal!!!')
else:
    print('Not Equal!!!')

        