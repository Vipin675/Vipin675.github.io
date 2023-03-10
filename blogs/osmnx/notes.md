# Notes

## `conda config --prepend channels conda-forge`

is a command in Conda that configures the default channels for package installation. Here's what each part of the command means:

- `conda config`: This is the command to modify Conda configuration settings.

- `--prepend`: This option tells Conda to add the specified channel(s) to the beginning of the list of channels to search for packages. This means that if a package is available from multiple channels, Conda will prioritize the channel(s) that were added with --prepend.

- `channels`: This is the configuration setting that specifies the list of channels to search for packages.

- `conda-forge`: This is the name of the channel that is being added to the list of default channels. Conda-forge is a popular community-driven channel that provides many packages that are not available in the default channels provided by Anaconda.

In summary, running conda config --prepend channels conda-forge will add the conda-forge channel to the list of default channels that Conda searches when installing packages, and give priority to this channel if a package is available from multiple channels. This can be useful if you need to install packages that are not available in the default channels provided by Anaconda.

## `conda create -n ox --strict-channel-priority osmnx`

The conda create command is used in Conda to create a new environment, and the --strict-channel-priority option specifies that Conda should prioritize packages from the specified channels over any other channels. Here's what each part of the command means:

- `conda create`: This is the command to create a new Conda environment.

- `-n ox`: This option specifies the name of the new environment, in this case, "ox".

- `--strict-channel-priority`: This option tells Conda to prioritize packages from the channels specified in the command over any other channels. This means that if a package is available from multiple channels, Conda will choose the version from the channel(s) specified in the command.

- `osmnx`: This is the name of the package to install in the new environment.

In summary, running conda create -n ox --strict-channel-priority osmnx will create a new Conda environment named "ox", and install the OSMnx package into the environment, prioritizing the channels specified in the command over any other channels. This is useful if you want to create a new environment with a specific package and ensure that the version of the package installed is from a specific channel.
