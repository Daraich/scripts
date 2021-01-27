#include <stdio.h>
#include <stdlib.h>
#include "List.h"

void cleanup(List L);
void sort(List L);
int searchList(List L, int x);
int isPalindrome(List L);

int main(void) {
    int i;
    List A = newList();

    /*
    // Testing cleanup

    for (i = 0; i < 10; i++) {
        append(A, i);
    }

    for (i = 0; i < 5; i++) {
        append(A, i);
    }

    for (i = 0; i < 5; i++) {
        append(A, i + 10);
    }

    printf("Testing cleanup():\nBefore:\n");
    printList(stdout, A);

    cleanup(A);

    printf("\nAfter:\n");
    printList(stdout, A);

    clear(A);
    */

   for (i = 0; i < 10; i++) {
       append(A, i);
    }

    // Testing question 1
    int success1 = 0;

    if (searchList(A, 0) == 0) {
        success1++;
    }

    if (searchList(A, 5) == 5) {
        success1++;
    }

    if (searchList(A, 9) == 9) {
        success1++;
    }

    if (searchList(A, 10) == -1) {
        success1++;
    }

    clear(A);

    if (searchList(A, 0) == -1) {
        success1++;
    }

    printf("Sucess q1: %d/5\n", success1);

    // Testing question 2

    int success2 = 0;

    if (isPalindrome(A)) {
        printf("1\n");
        success2++;
    }

    for (i = 0; i < 10; i++) {
        append(A, i);
    }

    if (!isPalindrome(A)) {
        printf("2\n");
        success2++;
    }

    clear(A);
    append(A, 2);
    append(A, 2);
    append(A, 2);

    if (isPalindrome(A)) {
        printf("3\n");
        success2++;
    }

    clear(A);
    append(A, 1);
    append(A, 2);
    append(A, 7);
    append(A, 2);
    append(A, 1);

    if (isPalindrome(A)) {
        printf("4\n");
        success2++;
    }

    clear(A);
    append(A, 3);
    append(A, 4);
    append(A, 6);
    append(A, 6);
    append(A, 4);
    append(A, 3);

    if (isPalindrome(A)) {
        printf("5\n");
        success2++;
    }

    clear(A);
    append(A, -1);

    if (isPalindrome(A)) {
        printf("6\n");
        success2++;
    }
    
    printf("Sucess q2: %d/6\n", success2);

    freeList(&A);
    return 0;
}

void cleanup(List L) {
    int data;
    int index = 0;

    while(index < length(L)) {
        moveFront(L);

        for (int i = 0; i < index; i++) {
            moveNext(L);
        }
        data = get(L);
        moveNext(L);

        while(index(L) >= 0) {
            if (get(L) == data) {
                delete(L);
                moveFront(L);
                for (int i = 0; i < index; i++) {
                    moveNext(L);
                }
            }
            moveNext(L);
        }

        index++;
    }
}

void sort(List L) {
    int data;
    int i;

    for (i = 0; i <= length(L); i++) {
        moveFront(L);
        data = get(L);
        moveNext(L);

        while (index(L) >= 0 && data > get(L)) {
            moveNext(L);
        }

        if (index(L) < 0) {
            append(L, data);
        } else {
            insertAfter(L, data);
        }
        deleteFront(L);
    }
}

int searchList(List L, int x) {
    moveFront(L);

    while (index(L) >= 0) {
        if (get(L) == x) {
            return index(L);
        }
        moveNext(L);
    }
    return -1;
}

int isPalindrome(List L) {
    int i;

    List A = copyList(L);
    moveFront(L);
    moveBack(A);

    for (i = 0; i < length(L); i++) {
        if (get(L) != get(A)) {
            freeList(&A);
            return 0;
        }
        moveNext(L);
        movePrev(A);
    }

    freeList(&A);
    return 1;
}