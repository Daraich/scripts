#!/usr/local/bin/python


for first in [ 'b', 'k', 't', 'r', 'm', 'n', 'p', 'kh', 'f', 'g', 'd', 'l' ]:
    for second in [ 'a', 'e', 'i', 'o', 'u', 'ae', 'ai', 'ao', 'au', 'ea', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'oa', 'oe', 'oi', 'ou', 'ua', 'ue', 'ui', 'uo' ]:
        for third in [ 'b', 'k', 't', 'r', 'm', 'n', 'p', 'kh', 'f', 'g', 'd', 'l' ]:
            for fourth in [ 'e', 'u', 'o' ]:
                print first + second + third + fourth
               
