
#1 to call the function by pasing the simple ways
def person(name,age):
    print(name)
    print(age)

person('harsh',20)

#2. keyword arguments

def person1(name,age):
    print(name,age)

person1(age=21,name='harsh chaurasiya')

#3. Default arguments if we are not passing any age then it will take the default value

def person2(name,age=18):
    print(name,age)

person2('harsh chaurasiya')

#4. variable length arguments

def person4(*datas):
    
    total=0
    for data in datas:
        total+=data 
    print('The average age of the Person is :',total)

person4(20,21,22,23,24) 

#5 keyword variable length arguments

def person5(**data):

    for i,j in data.items():
        print(i,j)

person5(name='harsh',age=20,address='maihar',state='MP')


