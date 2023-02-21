# Shell Scripting

## What is a command shell ?

A command shell, also known as a command-line interface or CLI, is a program designed to take commands typed in by the user and execute them. It is an interface that allows a user to interact with a computer's operating system using text commands.

The shell’s main advantages are its high action-to-keystroke ratio, its support for automating repetitive tasks, and its capacity to access networked machines.

The shell’s main disadvantages are its primarily textual nature and how cryptic its commands and operation can be.

## Navigating Files and Directories

The part of the operating system responsible for managing files and directories is called the file system. It organizes our data into files, which hold information, and directories (also called ‘folders’), which hold files or other directories.

* ``` pwd ```  - print name of current/working directory
  
* ``` ls ```  - prints the names of the files and directories in the current directory. Use ```  ls --help  ```  to see availabe arguments.

* ``` cd ``` - The ``` cd ``` command is a command used in command-line. ``` cd ``` stands for "change directory" and is used to navigate to a different directory or folder in the file system. ``` . ``` on its own means ‘the current directory’; ``` .. ``` means ‘the directory above the current one’.
* ``` Tab completion ```  is a feature in many computer programs and operating systems that allows a user to type a partial command or filename and then press the ``` Tab ``` key to automatically complete the rest of the command or filename.

## Working With Files and Directories

* ``` mkdir ``` - means ‘make directory’.
  
* ``` nano test.txt ``` - The ``` nano ``` command is a text editor used in the terminal of Linux and Unix-based operating systems. ``` ctrl + o ``` to save, ``` ctrl + x ``` to exit.
  
*  ``` touch my_file.txt ``` - The ``` touch ``` command generates a new file called ``` my_file.txt ``` in your current directory. 
  


## Moving files and directories

* ``` mv [option] source destination  ``` - The ``` mv ``` command is a command-line utility used in Linux, Unix, and other Unix-like operating systems. It is used to move or rename files and directories.
  
* ``` mv [file1.ext file2.ext ... filen.ext] destination  ``` - Moving Files to a new folder
  
* ```  cp [options] source destination  ``` - The ``` cp ``` command works very much like ``` mv ```, except it copies a file instead of moving it. 
  
* ``` cp [file1.ext file2.ext ... filen.ext] destination  ``` - Copying Files to a new folder
  

## Removing files and directories

*  ``` rm my_file.txt ``` - This commond remove the file named ``` my_file.txt ``` from current directory.
  
*  ``` rm -r foldername  ``` - ``` rm ``` can remove a directory and all its contents if we use the recursive option ``` -r ```. 

*  ``` rmdir directory ``` - This command remove the foler or directory.

## Using wildcards for accessing multiple files at once

Wildcards are special characters used to perform operations on groups of files and directories that match a specific pattern.

* ``` * ``` (asterisk): matches any sequence of characters, including zero characters. For example, ` *.txt ` matches all files with the ` .txt ` extension in the current directory, while ` file* ` matches all files in the current directory that start with ` file `.

* `  ?  ` (question mark): matches any single character. For example, ` file?.txt ` matches all files in the current directory with a name like ` file1.txt `, ` file2.txt `, etc.
