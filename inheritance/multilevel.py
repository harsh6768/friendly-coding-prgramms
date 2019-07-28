class A:

    def features1(self):
        print('Features 1')
    def features2(self):
        print('Features 2')

a1=A()
#calling method of class A
a1.features1()
a1.features2()


#Class B inheriting the Class A
class B(A):
    def features3(self):
        print('Features 3')
    def features4(self):
        print('Features 4')
    

b1=B()
b1.features3()

class C(B):
    def features5(self):
        print('Features 5')
    def features6(self):
        print('features 6')


c1=C()
c1.features2()
