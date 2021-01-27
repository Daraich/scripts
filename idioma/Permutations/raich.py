#!/usr/local/bin/python


for first in [ 'b', 'k', 't', 'r', 'm', 'n', 'p', 'kh', 'f', 'g', 'd', 'l' ]:
    for second in [ 'a', 'e', 'i', 'o', 'u' ]:
        for third in [ 'b', 'k', 't', 'r', 'm', 'n', 'p', 'kh', 'f', 'g', 'd', 'l' ]:
            for fourth in [ 'e', 'u', 'o' ]:
                print first + second + third + fourth
