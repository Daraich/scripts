def do_insertions_fast(l, insertions):
    """Implement here a faster version of do_insertions_simple """
    r = []
    dup_stack = []
    j = 0
    i = 0
    for element in l:
        while True:
            while j != 0 and insertions[j][0] == insertions[j+1][0]:
                dup_stack.append(insertions[j])
                j += 1
            if j < len(insertions) and len(r) == insertions[j][0]:
                r.append(insertions[j][1])
                j += 1
                break
            if len(dup_stack) == 0:
                break
            r.append(dup_stack.pop()[1])
        r.append(element)
    if j < len(insertions):
        for element in insertions[j:]:
            r.append(element[1])
    return r


    r = []
    dup_stack = []
    j = 0
    i = 0
    for element in l:
        while True:
            while j < len(insertions) and i == insertions[j][0]:
                if j != 0 and insertions[j][0] == insertions[j+1][0]:
                    dup_stack.append(insertions[j])
                else:
                    r.append(insertions[j][1])
                j += 1
                if j < len(insertions) and insertions[j][0] == len(r):
                    i += 1
            i += 1
            if len(dup_stack) == 0:
                break
            r.append(dup_stack.pop()[1])
        r.append(element)
        i += 1
    if j < len(insertions):
        for element in insertions[j:]:
            r.append(element[1])
            i +=1
    return r
