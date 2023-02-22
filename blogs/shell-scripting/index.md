# Shell Scripting

## What is a command shell ?

A command shell, also known as a command-line interface or CLI, is a program designed to take commands typed in by the user and execute them. It is an interface that allows a user to interact with a computer's operating system using text commands.

## Navigating Files and Directories

The part of the operating system responsible for managing files and directories is called the file system. It organizes our data into files, which hold information, and directories (also called ‘folders’), which hold files or other directories.

* ``` pwd ```  - print name of current/working directory
  
* ```ls```  - prints the names of the files and directories in the current directory. Use ```ls --help```  to see availabe arguments.

* ```cd``` - The ```cd``` command is a command used in command-line. ```cd``` stands for "change directory" and is used to navigate to a different directory or folder in the file system. ```.``` on its own means ‘the current directory’; ``` .. ``` means ‘the directory above the current one’.
* ``` Tab completion ```  is a feature in many computer programs and operating systems that allows a user to type a partial command or filename and then press the ``` Tab ``` key to automatically complete the rest of the command or filename.

## Working With Files and Directories

* ``` mkdir ``` - means ‘make directory’.
  
* ``` nano test.txt ``` - The ``` nano ``` command is a text editor used in the terminal of Linux and Unix-based operating systems. ``` ctrl + o ``` to save, ``` ctrl + x ``` to exit.
  
* ``` touch my_file.txt ``` - The ``` touch ``` command generates a new file called ``` my_file.txt ``` in your current directory.
  
## Moving files and directories

```bash
mv [option] source destination
```

The ``` mv ``` command is a command-line utility used in Linux, Unix, and other Unix-like operating systems. It is used to move or rename files and directories.
  
```bash
mv [file1.ext file2.ext ... filen.ext] destination
```

Moving Files to a new folder
  
```bash
cp [options] source destination
```

The ``` cp ``` command works very much like ``` mv ```, except it copies a file instead of moving it.
  
```bash
cp [file1.ext file2.ext ... filen.ext] destination
```

Copying Files to a new folder
  
## Removing files and directories

```bash
rm my_file.txt 
```

This commond remove the file named ``` my_file.txt ``` from current directory.
  
```bash
rm -r foldername
```

`rm` can remove a directory and all its contents if we use the recursive option ``` -r ```.

```bash
rmdir directory 
```

This command remove the foler or directory.

## Using wildcards for accessing multiple files at once

Wildcards are special characters used to perform operations on groups of files and directories that match a specific pattern.

* `*` (asterisk): matches any sequence of characters, including zero characters. For example, `*.txt` matches all files with the `*.txt` extension in the current directory, while `file*` matches all files in the current directory that start with `file`.

* `?` (question mark): matches any single character. For example, `file?.txt` matches all files in the current directory with a name like `file1.txt`, `file2.txt`, etc.

## Pipes and Filters

`wc` is the ‘word count’ command: it counts the number of lines, words, and characters in files (returning the values in that order from left to right). If we run the command `wc *.pdb`, the `*` in `*.pdb` matches zero or more characters, so the shell turns `*.pdb` into a list of all `.pdb` files in the current directory:

`wc *.pdb` also shows the total number of all lines in the last line of the output.

If we run `wc -l` instead of just `wc`, the output shows only the number of lines per file.

The `-m` and `-w` options can also be used with the `wc` command to show only the number of characters or the number of words, respectively.

## Capturing output from commands

```bash
wc [option] file.txt > lengths.txt
```

The greater than symbol, >, tells the shell to redirect the command’s output to a file instead of printing it to the screen. This command prints no screen output, because everything that wc would have printed has gone into the file lengths.txt instead. If the file doesn’t exist prior to issuing the command, the shell will create the file. If the file exists already, it will be silently overwritten, which may lead to data loss. Thus, redirect commands require caution.

We can now send the content of `lengths.txt` to the screen using `cat lengths.txt`. The cat command gets its name from ‘concatenate’ i.e. join together, and it prints the contents of files one after another. There’s only one file in this case, so `cat` just shows us what it contains.

We’ll continue to use `cat` in this lesson, for convenience and consistency, but it has the disadvantage that it always dumps the whole file onto your screen. More useful in practice is the command `less` (e.g. `less lengths.txt`). This displays a screenful of the file, and then stops. You can go forward one screenful by pressing the spacebar, or back one by pressing `b`. Press `q` to quit.

## Filtering output

The `sort` command line is used to sort the lines of a file or input stream in alphabetical or numerical order.

The basic syntax of the `sort` command is:

```bash
sort [OPTIONS] [FILE] 
```

Here, [OPTIONS] refers to any additional options that you want to use with the sort command, and [FILE] refers to the name of the file that you want to sort.

Some common options that can be used with the sort command are:

* -r: sorts the lines in reverse order (i.e., descending instead of ascending).
* -n: sorts the lines numerically, instead of alphabetically.
* -k: specifies the field that should be used for sorting.

we can run another command called `head` to get the first few lines in `lengths.txt`

```bash
sort -n lengths.txt > sorted-lengths.txt 
head -n 1 sorted-lengths.txt 
```

what does `>>` mean?

`>` overwrite the data, whereas `>>` append with already exist data.

`tail` is similar to `head`, but prints lines from the end of a file instead.

## Passing output to another command

In our example of finding the file with the fewest lines, we are using two intermediate files `lengths.txt` `sorted-lengths.txt` to store output. This is a confusing way to work because even once you understand what `wc`, `sort`, and `head` do, those intermediate files make it hard to follow what’s going on. We can make it easier to understand by running `sort` and `head` together:

```bash
sort -n lengths.txt | head -n 1
```

The vertical bar, `|`, between the two commands is called a **pipe**. It tells the shell that we want to use the output of the command on the left as the input to the command on the right.

This has removed the need for the `sorted-lengths.txt` file.

## Combining multiple commands

Nothing prevents us from chaining pipes consecutively. We can for example send the output of `wc` directly to `sort`, and then send the resulting output to `head`. This removes the need for any intermediate files.

![combined multiple commands](https://swcarpentry.github.io/shell-novice/fig/redirects-and-pipes.svg)

## Loops

Loops are a programming construct which allow us to repeat a command or set of commands for each item in a list. Similar to wildcards and tab completion, using loops also reduces the amount of typing required (and hence reduces the number of typing mistakes).

```bash
head -n 5 basilisk.dat minotaur.dat unicorn.dat
```

It'll print first five line from each file name.

let we want to print only second from each file. We can do it using loop like following:

```bash
for fileName in basilisk.dat minotaur.dat unicorn.dat
>do
>   echo $fileName
>   head -n 2 $fileName | tail -n 1
>done
```

In this example, the list is three filenames: `basilisk.dat`, `minotaur.dat`, and `unicorn.dat`. Each time the loop iterates, we first use `echo` to print the value that the variable `$filename` currently holds. This is not necessary for the result, but beneficial for us here to have an easier time to follow along. Next, we will assign a file name to the variable `filename` and run the `head` command. The first time through the loop, `$filename` is `basilisk.dat`. The interpreter runs the command `head` on `basilisk.dat` and pipes the first two lines to the `tail` command, which then prints the second line of `basilisk.dat`. For the second iteration, `$filename` becomes `minotaur.dat`. This time, the shell runs `head` on `minotaur.dat` and pipes the first two lines to the `tail` command, which then prints the second line of `minotaur.dat`. For the third iteration, `$filename` becomes `unicorn.dat`, so the shell runs the `head` command on that file, and `tail` on the output of that. Since the list was only three items, the shell exits the `for` loop.

## Saving to a File in a Loop - Part One

```bash
for alkanes in *.pdb
>do
>   echo $alkanes
>   cat $alkanes > alkane.pdb
>done
```

Prints `cubane.pdb`, `ethane.pdb`, `methane.pdb`, `octane.pdb`, `pentane.pdb` and `propane.pdb`, and the text from `propane.pdb` will be saved to a file called `alkanes.pdb`.

## Saving to a File in a Loop - Part Two

```bash
for alkanes in *.pdb
>do
>   echo $alkanes
>   cat $alkanes >> all.pdb
>done
```

All of the text from `cubane.pdb`, `ethane.pdb`, `methane.pdb`, `octane.pdb`, `pentane.pdb` and `propane.pdb` would be concatenated and saved to a file called `all.pdb`.

## Spaces in Names

Spaces are used to separate the elements of the list that we are going to loop over. If one of those elements contains a space character, we need to surround it with quotes, and do the same thing to our loop variable. Suppose our data files are named:

```text
red dragon.dat
purple unicorn.dat
```

```bash
for filename in "red dragon.dat" "purple unicorn.dat"
> do
>     head -n 100 "$filename" | tail -n 20
> done
```

