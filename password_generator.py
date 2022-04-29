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
        char_index = randbelow(len(options))
        
        while not options[char_index]:
            char_index = randbelow(len(options))

        if char_index == 0:
            password += choice(ascii_lowercase)

        if char_index == 1:
            password += choice(ascii_uppercase)

        if char_index == 2:
            password += str(randbelow(9))

    return password
