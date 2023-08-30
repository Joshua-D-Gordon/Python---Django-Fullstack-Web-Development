if __name__ == "__main__":
    class Dog():
        def __init__(self, breed) -> None:
            self.bred = breed

    mydog = Dog("lab")
    print(type(mydog))
    print(mydog.bred)