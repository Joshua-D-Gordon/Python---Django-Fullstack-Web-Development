if __name__ == "__main__":
    def add(x,y):
        return x+y
    
    a = 6
    b = 5

    print(add(a,b))

    # filter function
    mylist = [1,2,3,4,5,6,7,8]

    def even_bool(num):
        return num%2 == 0
    
    evens = filter(even_bool, mylist)

    print(list(evens))

    #lambda num: num%2 == 1

    odds = filter(lambda num: num%2 == 1, mylist)
    print(list(odds))

    st = 'hello'
    st.upper()
    st.lower()
    print(st.split('#'))