# Complexity of LZW Algorithm

LZW Algorithm consists of two parts Compression and Decompression. We will cover both parts.

## <ins>LZW Compression</ins>

### *Time Complexity (Count your steps)*

We will be calculating the time complexity of LZW Compression Algorithm by calculating the time taken by each statement of the pseudo code.This technique is also known as *Count Your Steps*.

**Count Your Steps :**

    The running time of the algorithm is the sum of running times for each statement executed; a statement that takes Ci steps to execute and executes n times will contribute Ci*n to the total running time.

In the following calculation n represents the number of characters read from the file which is to be compressed.

```HTML
Statement                                          Cost      Steps

STRING = get input symbol                           C1         1
WHILE there are still input symbols DO              C2         n
     SYMBOL = get input symbol                      C3         n-1
     IF STRING + SYMBOL is in the STRINGTABLE THEN  C4         n-1
        STRING = STRING + SYMBOL                    C5         (n-1)/x
     ELSE
        Output the code for STRING                  C6         (n-1)/y
        Add STRING + SYMBOL to STRINGTABLE          C7         (n-1)/y
        STRING = SYMBOL                             C8         (n-1)/y
     END
END
    Output the code for STRING                      C9          1
```

After getting the first input our algorithm runs a **WHILE** loop with a nested **IF** and **ELSE** condition that determines it Time Complexity.

- #### Worst Case

For Worst Case value of **x** will be maximum and value of **y** will be minimum. Let it be *y=1*. Means the statement in **ELSE** condition will be repeated more times than the statement in the **IF** condition. Such that every time loop is repeated it goes in **ELSE** statement.

To compute T(n), the running time of LZW on an input of n characters, we sum the products of the cost and times columns, obtaining

   T(n) = C<sub>1</sub> + C<sub>2</sub>n + C<sub>3</sub>(n-1) + C<sub>4</sub>(n-1) + C<sub>5</sub>(0) + C<sub>6</sub>(n-1) + C<sub>7</sub>(n-1) + C<sub>8</sub>(n-1) + C<sub>9</sub>

   T(n) = C<sub>1</sub> + C<sub>2</sub>n + C<sub>3</sub>n - C<sub>3</sub> +C<sub>4</sub>n - C<sub>4</sub> + C<sub>6</sub>n - C<sub>6</sub> + C<sub>7</sub>n - C<sub>7</sub> + C<sub>8</sub>n - C<sub>8</sub> + C<sub>9</sub>

   T(n) =  (C<sub>2</sub> + C<sub>3</sub> + C<sub>4</sub> + C<sub>6</sub> + C<sub>7</sub> + C<sub>8</sub>) n + (C<sub>1</sub> - C<sub>3</sub> - C<sub>4</sub> - C<sub>6</sub> - C<sub>7</sub> - C<sub>8</sub> + C<sub>9</sub>)

Here we let C<sub>2</sub> + C<sub>3</sub> + C<sub>4</sub> + C<sub>6</sub> + C<sub>7</sub> + C<sub>8</sub> = a and C<sub>1</sub> - C<sub>3</sub> - C<sub>4</sub> - C<sub>6</sub> - C<sub>7</sub> - C<sub>8</sub> + C<sub>9</sub> = b

T(n) = an + b

We expressed the Worst-Case running time as *an + b* for some constants a, and b that depend on the statement costs C<sub>i</sub>. We thus ignored not only the actual statement costs, but also the abstract costs C<sub>i</sub>.

We shall now make one more simplifying abstraction: it is the **rate of growth** or **order of growth**, of the running time that really interests us. We therefore consider only the leading term of a formula. We also ignore the leading term’s constant coefficient, since constant factors are less significant in determining computational efficiency for large inputs.

We are left with the factor of n from the leading term. We write that LZW has a Worst-Case running time of O(n) (pronounced as Big O of n).<br /><br />

**Worst_Case (Big-O) :** &nbsp; <ins>T(n) = **_O_**(n).</ins><br />

Hence our algorithm takes linear time.

- #### Best Case

For Best Case value of **x** will be minimum and value of **y** will be maximum. Let it be *x=1*. Means the statement in **IF** condition will be repeated more times than the statement in the **ELSE** condition. Such that every time loop is repeated it goes in **IF** statement.

To compute T(n), the running time of LZW on an input of n characters, we sum the products of the cost and times columns, obtaining

   T(n) = C<sub>1</sub> + C<sub>2</sub>n + C<sub>3</sub>(n-1) + C<sub>4</sub>(n-1) + C<sub>5</sub>(n-1) + C<sub>6</sub>(0) + C<sub>7</sub>(0) + C<sub>8</sub>(0) + C<sub>9</sub>

   T(n) = C<sub>1</sub> + C<sub>2</sub>n + C<sub>3</sub>n - C<sub>3</sub> +C<sub>4</sub>n - C<sub>4</sub> + C<sub>5</sub>n - C<sub>5</sub> + C<sub>9</sub>

   T(n) =  (C<sub>2</sub> + C<sub>3</sub> + C<sub>4</sub> + C<sub>5</sub>) n + (C<sub>1</sub> - C<sub>3</sub> - C<sub>4</sub> - C<sub>5</sub>+ C<sub>9</sub>)

Here we let C<sub>2</sub> + C<sub>3</sub> + C<sub>4</sub> + C<sub>5</sub> = a and C<sub>1</sub> - C<sub>3</sub> - C<sub>4</sub> - C<sub>5</sub> + C<sub>9</sub> = b

T(n) = an + b

Same as Worst-Case, Best-Case time complexity of our algorithm is n. We write that LZW has a Best-Case running time of O(n) (pronounced as Big O of n).<br /><br />

**Best_Case (Big-O) :** &nbsp; <ins>T(n) = **_O_**(n).</ins><br/>

Hence our algorithm have linear time complexity.

- #### Average Case

Average-Case Time complexity of an algorithm can be calculated simply by Worst_case and Best-Case using this simple formula.

Average-Case Equation = (Worst-Case Equation + Best-Case Equation) / 2

As in our case both Worst-Case and Best-case have time complexity of n so it is obvious Average-Case will have the same.

### *Space Complexity*

We know that Space Complexity Depends on the Memory taken by the Algorithm to complete its execution. In Addition to memory used by code ( Variables initialized etc) this algorithm also loads the file to memory/buffer which  is to be compressed. Thus the Space Complexity of LZW heavily depends on size of file because the file is first loaded in memory and then it is encoded.

## <ins>LZW Decompression</ins>

### *Time Complexity (Count your steps)*

We will be calculating the time complexity of LZW De-Compression Algorithm by the same method called *Count Your Steps*.

In the following calculation n represents the number of characters read from the file which is to be decompressed.

```HTML
Statement                                           Cost      Steps

Read CODE                                            C1         1
STRING = TABLE[CODE]                                 C2         1
output STRING                                        C3         1
WHILE there are still codes to receive DO            C4         n
     Read CODE from encoder                          C5         n-1
     IF Code is not in the translation table THEN    C6         n-1
        Entry = STRING + STRING[0]                   C7         (n-1)/x
     ELSE
        ENTRY = get translation of CODE              C8         (n-1)/y
     END
     Output Entry                                    C9         n-1
     Add STRING + ENTRY[0] to the translation table  C10        n-1
     STRING = ENTRY                                  C11        n-1
END
```

- #### Worst Case

As we can see in Worst-Case **IF** condition will run all the time because it has more computational steps {*Not only Decoding but also adding the code in the STRINGTABLE*} than **ELSE** condition.

For Worst Case value of **x** will be minimum and value of **y** will be Maximum. Let it be *x=1*. Means that every time loop is repeated it goes in **IF** statement.

To compute T(n), the running time of LZW on an input of n characters, we sum the products of the cost and times columns, obtaining

   T(n) = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> + C<sub>4</sub>n + C<sub>5</sub>(n-1) + C<sub>6</sub>(n-1) + C<sub>7</sub>(n-1) + C<sub>8</sub>(0) + C<sub>9</sub> (n-1) + C<sub>10</sub>(n-1)+ C<sub>11</sub>(n-1)

   T(n) = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> + C<sub>4</sub>n + C<sub>5</sub>n - C<sub>5</sub> +C<sub>6</sub>n - C<sub>6</sub> + C<sub>7</sub>n - C<sub>7</sub> + C<sub>9</sub>n - C<sub>9</sub> + C<sub>10</sub>n - C<sub>10</sub> + C<sub>11</sub>n - C<sub>11</sub>

   T(n) =  (C<sub>4</sub> + C<sub>5</sub> + C<sub>6</sub> + C<sub>7</sub> + C<sub>9</sub> + C<sub>10</sub> + C<sub>11</sub>) n + (C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> - C<sub>5</sub> - C<sub>6</sub> - C<sub>7</sub> - C<sub>9</sub> - C<sub>10</sub> - C<sub>11</sub>)

Here we let C<sub>4</sub> + C<sub>5</sub> + C<sub>6</sub> + C<sub>7</sub> + C<sub>9</sub> + C<sub>10</sub> + C<sub>11</sub> = a and C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> - C<sub>5</sub> - C<sub>6</sub> - C<sub>7</sub> - C<sub>9</sub> - C<sub>10</sub> - C<sub>11</sub> = b

T(n) = an + b

We expressed the worst-case running time as an + b for some constants a, and b that depend on the statement costs C<sub>i</sub>. We thus ignored not only the actual statement costs, but also the abstract costs C<sub>i</sub>.

We are left with the factor of n from the leading term. We write that LZW has a Worst-Case running time of O(n) (pronounced as Big O of n).<br /><br />

**Worst_Case (Big-O) :** &nbsp; <ins>T(n) = **_O_**(n).</ins><br />

Hence our algorithm takes linear time.

- #### Best Case

For Best Case value of **x** will be maximum and value of **y** will be minimum. Let it be *y=1*. Means that every time loop is repeated it goes in **ELSE** statement.

To compute T(n), the running time of LZW on an input of n characters, we sum the products of the cost and times columns, obtaining

   T(n) = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> + C<sub>4</sub>n + C<sub>5</sub>(n-1) + C<sub>6</sub>(n-1) + C<sub>7</sub>(0) + C<sub>8</sub>(n-1) + C<sub>9</sub> (n-1) + C<sub>10</sub>(n-1)+ C<sub>11</sub>(n-1)

   T(n) = C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> + C<sub>4</sub>n + C<sub>5</sub>n - C<sub>5</sub> +C<sub>6</sub>n - C<sub>6</sub> + C<sub>8</sub>n - C<sub>8</sub> + C<sub>9</sub>n - C<sub>9</sub> + C<sub>10</sub>n - C<sub>10</sub> + C<sub>11</sub>n - C<sub>11</sub>

   T(n) =  (C<sub>4</sub> + C<sub>5</sub> + C<sub>6</sub> + C<sub>8</sub> + C<sub>9</sub> + C<sub>10</sub> + C<sub>11</sub>) n + (C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> - C<sub>5</sub> - C<sub>6</sub> - C<sub>8</sub> - C<sub>9</sub> - C<sub>10</sub> - C<sub>11</sub>)

Here we let C<sub>4</sub> + C<sub>5</sub> + C<sub>6</sub> + C<sub>8</sub> + C<sub>9</sub> + C<sub>10</sub> + C<sub>11</sub> = a and C<sub>1</sub> + C<sub>2</sub> + C<sub>3</sub> - C<sub>5</sub> - C<sub>6</sub> - C<sub>8</sub> - C<sub>9</sub> - C<sub>10</sub> - C<sub>11</sub> = b

Same as Worst-Case, Best-Case time complexity of our algorithm is n. We write that LZW has a Best-Case running time of O(n) (pronounced as Big O of n).<br /><br />

**Best_Case (Big-O) :** &nbsp; <ins>T(n) = **_O_**(n).</ins><br/>

Hence our algorithm have linear time complexity.

- #### Average Case

Average-Case Time complexity of an algorithm can be calculated simply by Worst_case and Best-Case using this simple formula.

Average-Case Equation = (Worst-Case Equation + Best-Case Equation) / 2

As in our case both Worst-Case and Best-case have time complexity of n so it is obvious Average-Case will have the same.

### *Space Complexity*

We know that Space Complexity Depends on the Memory taken by the Algorithm to complete its execution. In Addition to memory used by code ( Variables initialized etc) this algorithm also loads the file to memory/buffer which  is to be decompressed. Thus the Space Complexity of LZW Decompressor heavily depends on the size of the encoded file because the file is first loaded in memory and then it is encoded.
