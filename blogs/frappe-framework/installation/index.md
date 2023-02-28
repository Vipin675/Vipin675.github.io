# INSTALLATION GUIDE FOR FRAPPE BENCH

```bash
sudo apt-get update
```

```bash
sudo apt-get upgrade
```

```bash
check python3 -V
```

check git ?

```bash
bashsudo apt-get install git 
```

When you install python-dev package, it installs the development header files and libraries needed to build modules that interface with the Python interpreter, as well as the Python header files needed to compile C/C++ code that extends or embeds Python.

The specific version of python-dev you need to install may depend on the version of Python you are using. For example, if you are using Python 3.9, you may need to install the python3.9-dev package instead of python-dev.

```bash
sudo apt-get install python3-dev
```


Note that the python-dev package is only needed if you plan to build Python extensions or embed Python in another program. If you are simply running Python scripts, you do not need to install this package.

---
Python3-setuptools is a package/module in the Python programming language that provides an easy way to package, distribute, and install Python modules and applications. It is a tool that simplifies the process of distributing Python packages and makes it easy for developers to distribute their own code or third-party libraries.

```bash
sudo apt-get install python3-setuptools python3-pip
```

Python3-pip is a package/module in the Python programming language that provides a tool for installing and managing Python packages. Pip is the standard package manager for Python and it is used to install, uninstall, and upgrade Python packages and their dependencies.

---

Virtualenv is a tool used to create isolated Python environments. It allows developers to create separate Python environments with their own dependencies, without interfering with the system-wide Python installation or with other Python projects on the same machine.

```bash
sudo apt-get install virtualenv
```

if python3.10

```bash
sudo apt install python3.10-venv
```

## Installing mariadb

```bash
https://downloads.mariadb.org/mariadb/repositories/#mirror=piconets
```

```bash
sudo apt install software-properties-common
```

If you are on Ubuntu version older than 20.04, run this before installing MariaDB:

```bash
sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8

sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el] http://ftp.ubuntu-tw.org/mirror/mariadb/repo/10.3/ubuntu xenial main'
```

```bash
sudo apt-get update
sudo apt-get install mariadb-server
```

```text
https://www.digitalocean.com/community/tutorials/how-to-install-mariadb-on-ubuntu-20-04
```

```bash
sudo mysql_secure_installation
```

---

You'll also need the MySQL database development files.

```bash
# apt-get install mariadb-client-10.3
sudp apt-get install libmysqlclient-dev
```

Now, edit the MariaDB configuration file.

```bash
sudo nano /etc/mysql/my.cnf
```

```bash
service mysql restart
```
