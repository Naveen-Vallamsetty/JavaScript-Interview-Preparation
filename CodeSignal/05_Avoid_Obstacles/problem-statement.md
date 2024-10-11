We are given coordinates of obstacles on a straight line. We start jumping from point 0, we need to reach the end, avoiding all obstacles. The length of every jump has to be the same (For example, if we jump from 0 to 4, then we must make the next jump from 4 to 8). We need to find the minimum length of the jump so that we can reach the end and we avoid all obstacles.

Examples:

Input : obs[] = [5, 3, 6, 7, 9]
Output : 4
Obstacles are at points 3, 5, 6, 7 and 9
We jump from 0 to 4, then 4 to 8, then 4
to 12. This is how we reach end with jumps
of length 4. If we try lower jump lengths,
we cannot avoid all obstacles.

Input : obs[] = [5, 8, 9, 13, 14]
Output : 6

We insert the locations of all obstacles in a hash table. We also find the maximum value of the obstacle. Then we tried all possible jump sizes from 1 to maximum. If any jump size leads to an obstacle, we do not consider that jump.
