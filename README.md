Approach:

Firstly i have created an array of size(26) named par.
Then i have made an array of string.
Taken the input as given in test cases.
Maintained the parent child relationship. For eg. I>N (so here I is the parent of N child)
created an additional string named ans.
Iterated over the par array and finded that element who is parent of nobody.
Then concatenate the element in ans string.
Then finded the parent of every element step by step and concatenate it every time in the ans string.
Finally revered the ans string and print it.

Eg.       [I>N , A>I, P>A, S>P ]
finded N then printed and conc. in ans   ====   N
then finded N parent(I) and conc. in ans ====   NI
then finded I parent(A) and conc. in ans ====   NIA
then finded A parent(P) and conc. in ans ====   NIAP
then finded P parent(S) and conc. in ans ====   NIAPS
now S have no parent. so we stop.

after reverse of ans string =====   SPAIN
