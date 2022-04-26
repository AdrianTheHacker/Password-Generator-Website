from secrets import randbelow, choice
from string import ascii_uppercase, ascii_lowercase


def get_options(lowercase, uppercase, numbers):
    """
    Returns a list of all different types of characters that can be used.

    Ex
    --
    >>> get_options(True, False, True)
    [lowercase, numbers]

    >>> get_options(False, True, False)
    """
    options = []
    if lowercase:
        options += "l"

    if uppercase:
        options += "u"

    if numbers:
        options += "n"

    return options


def create_password(length, options):
    password = ""

    for character in range(length):
        char_type = choice(options)

        if char_type == "l":
            password += choice(ascii_lowercase)

        if char_type == "u":
            password += choice(ascii_uppercase)

        if char_type == "n":
            password += str(randbelow(9))

    return password


print(create_password(9, get_options(True, False, False)))
print(create_password(17, get_options(False, False, True)))
print(create_password(10, get_options(False, True, False)))
